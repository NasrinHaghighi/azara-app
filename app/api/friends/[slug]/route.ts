import { NextResponse } from 'next/server';

//import { PrismaClient } from '@prisma/client';
import prisma from '../../../utils/connect'


//const prisma = new PrismaClient();

//get frindes by id//
export const GET = async (req: any,{params}:any) => {

    const {slug}=params
    console.log('id in backend',slug)
    console.log('id in backend',params)
    try {
       const friend = await prisma.friend.findUnique({
        where: {
              slug: slug
           }
       })

        return new NextResponse(JSON.stringify(friend), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}