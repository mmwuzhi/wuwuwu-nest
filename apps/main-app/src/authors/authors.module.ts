import { Module } from '@nestjs/common'
import { PostsModule } from '../posts/posts.module'
import { AuthorsService } from './authors.service'
import { AuthorsResolver } from './authors.resolver'
import { PostsService } from '../posts/posts.service'

@Module({ imports: [PostsModule], providers: [PostsService, AuthorsResolver, AuthorsService] })
export class AuthorsModule {}
