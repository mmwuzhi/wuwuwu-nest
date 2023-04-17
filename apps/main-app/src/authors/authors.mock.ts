import { postsMock } from '../posts/posts.mock'
import { Author } from './models/author.model'

export const authorsMock: Author[] = [
  {
    id: 1,
    posts: [],
  },
  {
    id: 2,
    posts: [postsMock[0]],
  },
]
