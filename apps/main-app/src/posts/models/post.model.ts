import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Comment } from '../../comments/models/comment.model'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field({ description: 'post title' })
  title: string

  @Field(() => Int, { nullable: true })
  votes?: number

  @Field(() => [Comment], { nullable: 'items' })
  comments: Comment[]
}
