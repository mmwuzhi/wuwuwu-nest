import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number

  @Field({ description: 'comment content' })
  content: string
}
