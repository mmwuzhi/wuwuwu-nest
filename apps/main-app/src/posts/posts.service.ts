import { Injectable } from '@nestjs/common'
import { Post } from './models/post.model'
import { postsMock } from './posts.mock'
import { authorsMock } from '../authors/authors.mock'

@Injectable()
export class PostsService {
  async findOneById(id: number): Promise<Post> {
    return postsMock.find((curr) => curr.id === id)
  }

  async findAll({ authorId }: { authorId: number }) {
    return authorsMock.find((curr) => curr.id === authorId)?.posts ?? []
  }
}
