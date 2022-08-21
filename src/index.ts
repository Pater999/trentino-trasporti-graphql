import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import { ApolloServer, ForbiddenError } from 'apollo-server-express'
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache'
import { isDev, isProduction } from './utils/general_utils'
import { initContext } from './context'
import {
    ApolloServerPluginLandingPageLocalDefault,
    ApolloServerPluginLandingPageProductionDefault
} from 'apollo-server-core'
import { buildSchema } from 'type-graphql'
import path from 'path'
import resolvers from './resolvers/resolvers'

const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-type', 'Authorization'],
    methods: ['OPTIONS, GET, POST, PUT, PATCH, DELETE']
}

const port = process.env.PORT ?? 8080

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
        )
    })

    // INIT GRAPHQL SERVER
    const server = new ApolloServer({
        schema,
        context: initContext,
        introspection: isDev(),
        formatError: (error) => {
            if (error.message.startsWith('Access denied!')) {
                return new ForbiddenError(error.message)
            }
            return error
        },
        plugins: [
            isProduction()
                ? ApolloServerPluginLandingPageProductionDefault()
                : ApolloServerPluginLandingPageLocalDefault()
        ],
        // cache: new KeyvAdapter(new Keyv(process.env.REDIS_URL)),
        cache: new InMemoryLRUCache({
            // ~100MiB
            maxSize: Math.pow(2, 20) * 100,
            // 5 minutes (in milliseconds)
            ttl: 300_000
        })
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

void main()
