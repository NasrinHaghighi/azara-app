import { NextResponse } from 'next/server';



import prisma from '../../../../utils/connect'


//const prisma = new PrismaClient();

//get all posts//
import { NextRequest } from 'next/server';


export const GET = async (req: NextRequest,{params}:any) => {

    const {id}=params
   // console.log('id',id)
    try {
        const post = await prisma.friend.findUnique({
            where: {
                   id: id
               }
           })
   
        return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}
export const PUT = async (req: NextRequest,{params}:any) => {

    const {id}=params
   
    const body = await req.json();
   
    try {
        const friend = await prisma.friend.update({
            where: {
                id: id
            },
            data: body
        })
   
        return new NextResponse(JSON.stringify(friend), { status: 200 });
    } catch (err) {
        console.log(err);
        return new NextResponse(JSON.stringify({ message: 'error' }), { status: 500 });
    }
}