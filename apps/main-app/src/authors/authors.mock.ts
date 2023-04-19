import { postsMock } from '../posts/posts.mock'
import { Author } from './models/author.model'

export const authorsMock: Author[] = [
  {
    id: 1,
    firstName: 'Alan',
    lastName: 'Turing',
    posts: [],
  },
  {
    id: 2,
    lastName: 'Knopf',
    posts: [postsMock[0]],
  },
]
