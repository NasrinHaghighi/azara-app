import GoogleProvider from 'next-auth/providers/google'
import  { PrismaAdapter } from "@auth/prisma-adapter"
import type { Adapter } from 'next-auth/adapters';
import { NextAuthOptions } from 'next-auth'
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt';


import { getServerSession } from "next-auth"




const prisma = new PrismaClient()



export const options: NextAuthOptions = {
    pages: {
        signIn: '/signin',
    },
    adapter: PrismaAdapter(prisma) as Adapter,
    secret: process.env.SECRET ?? 'secret',
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code',
                },
            },
        }),
        CredentialsProvider({
            name: 'Credentials',

            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'jsmith@gmail.com' },
                password: { label: 'Password', type: 'password' },
            },

            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const existingUser = await prisma.user.findUnique({
                    where: { email: credentials.email }
                });

                if (!existingUser) {
                    return null;
                }

                console.log('existingUser', existingUser);

                if (existingUser.password) {
                    const passwordMatch = await compare(credentials.password, existingUser.password);
                   // console.log('passwordMatch', passwordMatch);

                    if (!passwordMatch) {
                        return null;
                    }
                }

                return {
                    id: existingUser.id,
                    email: existingUser.email,
                    name: existingUser.name,
                    role: existingUser.role
                };
            }
        }),
    ],
    callbacks: {


        async jwt({ token, user }) {

            if (user) {
                return {
                    ...token,
                    role:user.role
                }
            }
            return token
        },
        async session({ session, token }) {
           // console.log('session', session);
            return {
                ...session,
               user: {
                ...session.user,
                  role: token.role
               }
            }
            return session
        },

    }

}


export const getAuthSession = () => getServerSession(options)









