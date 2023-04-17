import { Injectable } from '@nestjs/common'
import { Author } from './models/author.model'
import { authorsMock } from './authors.mock'

@Injectable()
export class AuthorsService {
  async findOneById(id: number): Promise<Author> {
    return authorsMock.find((curr) => curr.id === id)
  }
}
