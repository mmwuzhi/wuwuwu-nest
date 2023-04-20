import { InputType, OmitType } from '@nestjs/graphql'
import { Comment } from './comment.model'

@InputType()
export class CommentInput extends OmitType(Comment, ['id'] as const, InputType) {}
