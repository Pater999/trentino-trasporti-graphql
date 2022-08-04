import { PrismaClient } from '@prisma/client'
import { ExpressContext } from 'apollo-server-express'

export interface MyContext {
    prisma: PrismaClient
}

export const prisma = new PrismaClient()

export const initContext = async (ctx: ExpressContext): Promise<MyContext> => {
   
    await prisma.$connect()

    return {
        ...ctx,
        prisma,
    }
}
