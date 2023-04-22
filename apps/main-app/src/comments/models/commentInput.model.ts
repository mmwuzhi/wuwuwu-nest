import { InputType, OmitType } from '@nestjs/graphql'
import { Comment } from './comment.model'

@InputType()
export class CommentInput extends OmitType(Comment, ['id', 'date'] as const, InputType) {}
