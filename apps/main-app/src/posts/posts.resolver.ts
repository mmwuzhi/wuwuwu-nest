import { Args, Mutation, Resolver, Subscription } from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions'
import dayjs from 'dayjs'
import { Post } from './models/post.model'
import { Comment } from '../comments/models/comment.model'
import { CommentInput } from '../comments/models/commentInput.model'

const pubSub = new PubSub()
/** subscribe to comment added */
const COMMENT_ADDED = 'commentAdded'

@Resolver(() => Post)
export class PostsResolver {
  @Subscription(() => Comment, {
    name: 'commentAdded',
    filter: (payload: Comment, variables: { keyword: string }) => {
      return payload.content.includes(variables.keyword)
    },
    resolve: (value: Comment): Comment => {
      return { ...value, content: 'super!!!' }
    },
  })
  subscribeToCommentAdded(@Args('keyword') _keyword: string) {
    return pubSub.asyncIterator(COMMENT_ADDED)
  }

  @Mutation(() => Post)
  async addComment(
    @Args('comment', { type: () => CommentInput }) comment: CommentInput,
  ): Promise<Post> {
    const newComment: Comment = { id: 999, content: comment.content, date: dayjs() }
    pubSub.publish(COMMENT_ADDED, newComment)

    return { id: 123, title: 'test', comments: [newComment] }
  }
}
