import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Dayjs } from 'dayjs'
import { DateScalar } from '../../common/scalars/date.sclar'

@ObjectType()
export class Comment {
  @Field(() => Int)
  id: number

  @Field({ description: 'comment content' })
  content: string

  @Field(() => DateScalar)
  date: Dayjs
}
