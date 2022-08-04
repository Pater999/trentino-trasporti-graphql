import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { ApolloServer, ForbiddenError } from 'apollo-server-express'
import Keyv from "keyv";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import { GeneralUtils } from './utils/general_utils'
import { initContext } from './context'
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault,
    ApolloServerPluginCacheControl
} from 'apollo-server-core'
import { buildSchema } from 'type-graphql'
import path from 'path'
import resolvers from './resolvers/resolvers'

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['OPTIONS, GET, POST, PUT, PATCH, DELETE'],
}

const port = process.env.port ?? 8080;

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
            ApolloServerPluginCacheControl({ defaultMaxAge: 210 }),
            GeneralUtils.isDev()
                ? ApolloServerPluginLandingPageLocalDefault()
                : ApolloServerPluginLandingPageProductionDefault(),
        ],
        cache: new KeyvAdapter(new Keyv(process.env.REDIS_URL)), 
    })

    await server.start()
    server.applyMiddleware({ app })

    // START SERVER
    app.listen({ port }, () =>
        console.log(
            `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
        )
    )
}

main()
