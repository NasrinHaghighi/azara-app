import { NextResponse } from 'next/server';

//import { PrismaClient } from '@prisma/client';
import prisma from '../../../utils/connect'


//const prisma = new PrismaClient();

//get one posts for edite in dashboard//
export const GET = async (req: any,{params}:any) => {

    const {slug}=params
    
    try {
       const post = await prisma.post.findUnique({
        where: {
               slug: slug
           }
       })

        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}