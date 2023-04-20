import { join } from 'path'
import { Module } from '@nestjs/common'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CalcController } from './calc/calc.controller'
import { AuthorsController } from './authors/authors.controller'
import { PostsController } from './posts/posts.controller'
import { AuthorsModule } from './authors/authors.module'
import { PostsModule } from './posts/posts.module'

@Module({
  imports: [
    AuthorsModule,
    PostsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'apps/main-app/src/schema.gql'),
      // disable graphql-playground
      playground: false,
      // enable apollo sandbox
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // enable subscription with graphql-ws
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    ClientsModule.register([
      {
        name: 'CALC_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.MAIN_HOST,
          port: 8888,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'LOG_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.MAIN_HOST,
          port: 9999,
        },
      },
    ]),
  ],
  controllers: [AppController, CalcController, AuthorsController, PostsController],
  providers: [AppService],
})
export class AppModule {}
