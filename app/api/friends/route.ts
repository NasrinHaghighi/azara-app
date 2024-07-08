import { NextResponse } from 'next/server';

//import { PrismaClient } from '@prisma/client';
import { getAuthSession } from '../../utils/auth';
import prisma from '../../utils/connect'






export const POST = async (req: Request) => {
    const session = await getAuthSession();
 
 
    if (!session) {
        return new NextResponse(JSON.stringify({ message: 'not authenticated ' }), { status: 401 });
    }
   try{
    const body = await req.json();
    console.log('req body', body);
    const friend = await prisma.friend.create({ data: { ...body,  } });
    return new NextResponse(JSON.stringify(friend), { status: 200 });
   } catch(e:any){
    console.log(e)
    return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
}
};

export const GET = async (req: Request) => {
   
    try{
   
   
     const friends = await prisma.friend.findMany()


     return new NextResponse(JSON.stringify(friends), { status: 200 });
    } catch(e:any){
     console.log(e)
     return new NextResponse(JSON.stringify({message:'SOME'}), {status: 500})
 }
 };

 //DELETE APOST//
export const DELETE = async (req: Request) => {
    const body = await req.json();
 
console.log('body', body);
    const { id, slug } = body;
    
    try {
       
    
       await prisma.friend.delete({
            where: {
                id: id as string
            }
        });
        const updatedPosts = await prisma.post.findMany();

        
        return new NextResponse(JSON.stringify({ message: 'Post deleted', posts: updatedPosts }), {
            status: 200
        });

    } catch (error: any) {
        return new NextResponse(JSON.stringify({ message: error.message }), {
            status: 500
        });
    }
};