import { PrismaClient } from '@prisma/client'
import { ExpressContext } from 'apollo-server-express'

export interface MyContext {
    prisma: PrismaClient
}

export const initContext = async (ctx: ExpressContext): Promise<MyContext> => {
    const prisma = new PrismaClient()
    await prisma.$connect()

    return {
        ...ctx,
        prisma,
    }
}
