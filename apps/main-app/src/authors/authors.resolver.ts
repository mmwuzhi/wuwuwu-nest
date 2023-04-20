import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Author } from './models/author.model'
import { AuthorsService } from './authors.service'
import { PostsService } from '../posts/posts.service'
import { Post } from '../posts/models/post.model'
import { PostInput } from '../posts/models/postInput.model'

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService, private postsService: PostsService) {}

  @Query(() => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return await this.authorsService.findOneById(id)
  }

  @Query(() => [Author], { name: 'authors' })
  async getAuthors(@Args('ids', { type: () => [Int] }) ids: number[]) {
    return await Promise.all(ids.map(async (id) => await this.authorsService.findOneById(id)))
  }

  @Query(() => [Author], { name: 'allAuthors' })
  async getAllAuthors() {
    return await this.authorsService.findAll()
  }

  @Mutation(() => Author)
  async addAuthorPost(
    @Args({ name: 'addPost', type: () => PostInput }) post: PostInput,
    @Args({ name: 'authorId', type: () => Int }) authorId: number,
  ): Promise<Author> {
    const author = await this.authorsService.findOneById(authorId)

    // TODO: The data actually sent to the client is different from this return value because the logic for retrieving posts was overridden by getPosts.
    return { ...author, posts: [...author.posts, { id: 999, ...post }] }
  }

  @ResolveField('posts', () => [Post])
  async getPosts(@Parent() author: Author): Promise<Post[]> {
    const { id } = author
    return await this.postsService.findAll({ authorId: id })
  }
}
