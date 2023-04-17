import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field({ description: 'post title' })
  title: string

  @Field(() => Int, { nullable: true })
  votes?: number
}
