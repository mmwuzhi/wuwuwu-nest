import { Scalar, CustomScalar } from '@nestjs/graphql'
import { Kind, ValueNode } from 'graphql'
import dayjs, { Dayjs } from 'dayjs'

@Scalar('Date', () => Dayjs)
export class DateScalar implements CustomScalar<number, Dayjs> {
  description = 'Date custom scalar type'

  parseValue(value: unknown): Dayjs {
    if (typeof value === 'string' || typeof value === 'number') {
      return dayjs(value)
    } else {
      throw new TypeError(`${value} must be a string or a number`)
    }
  }

  serialize(value: Dayjs): number {
    return value.valueOf()
  }

  parseLiteral(ast: ValueNode): Dayjs {
    if (ast.kind === Kind.INT) {
      return dayjs(ast.value)
    }
    return null
  }
}
