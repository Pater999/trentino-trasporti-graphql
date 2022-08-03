import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { ApolloServer, ForbiddenError } from 'apollo-server-express'
import { GeneralUtils } from './utils/general_utils'
import { initContext } from './context'
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core'
import { buildSchema } from 'type-graphql'
import path from 'path'
import resolvers from './resolvers/resolvers'

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['OPTIONS, GET, POST, PUT, PATCH, DELETE'],
}

const main = async () => {
    const app = express()

    // MIDDLEWARE
    app.use(cors(corsOptions))
    app.use(compression())

    const schema = await buildSchema({
        resolvers,
        emitSchemaFile: path.resolve(
            __dirname,
            './schema/generated-schema.graphql'
        ),
    })

    // INIT GRAPHQL SERVER
    const server = new ApolloServer({
        schema,
        context: initContext,
        introspection: GeneralUtils.isDev(),
        formatError: (error) => {
            if (error.message.startsWith('Access denied!')) {
                return new ForbiddenError(error.message)
            }
            return error
        },
        plugins: [
            GeneralUtils.isDev()
                ? ApolloServerPluginLandingPageLocalDefault()
                : ApolloServerPluginLandingPageProductionDefault(),
        ],
    })

    await server.start()
    server.applyMiddleware({ app })

    // START SERVER
    app.listen({ port: 4000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    )
}

main()
