import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Author } from './models/author.model'
import { AuthorsService } from './authors.service'
import { PostsService } from '../posts/posts.service'
import { Post } from '../posts/models/post.model'

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService, private postsService: PostsService) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return await this.authorsService.findOneById(id)
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author
    return await this.postsService.findAll({ authorId: id })
  }
}
