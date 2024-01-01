import { User } from '../types';
import prisma from '../prisma';
import { PrismaClient } from '@prisma/client';


export async function createUser(data: User) {
    prisma.$connect();
    const user = await getUser(data.email,prisma);
    try{
        if(user?.email === data.email) {
            // console.log(user)
            throw new Error('User already exists');
        
        }
        else
            return await prisma.user.create({data});
    }
    finally{
        await prisma.$disconnect();
    }
}

async function getUser(email: string,prisma: PrismaClient) {
    return await prisma.user.findFirst({
        where: {
            email: email
    }})
}