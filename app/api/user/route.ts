
import { NextResponse } from 'next/server'
import prisma from '../../utils/connect'
import { hash } from 'bcrypt'



export async function POST(req: Request) {

    try {
        const body = await req.json()
        const { name, email, password } = body

        //check is email aleady exist

        const existUserByEmail = await prisma.user.findUnique({
            where: { email: email }
        })
        if (existUserByEmail) {
            return NextResponse.json({ user: null, message: "Email already exist" }, { status: 400 })
        }
       


        const hashPass = await hash(password, 10);
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email,
                role: "user",
                password: hashPass
            }
        })
        const {password:newuserPassword, ...rest} =newUser


        return NextResponse.json({ user: rest, message: 'user created' }, { status: 200 })
    } catch (err) {
return NextResponse.json({ message: 'somethings went wrong ' }, { status: 500 })
    }
}

//GET users//
export const GET = async (req: Request) => {
   
    try{
   
   
     const users = await prisma.user.findMany()


     return new NextResponse(JSON.stringify(users), { status: 200 });
    } catch(e:any){
     console.log(e)
     return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
 }
 };
   