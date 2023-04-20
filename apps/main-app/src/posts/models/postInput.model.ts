import { InputType, OmitType } from '@nestjs/graphql'
import { Post } from './post.model'

@InputType()
export class PostInput extends OmitType(Post, ['id'] as const, InputType) {}
