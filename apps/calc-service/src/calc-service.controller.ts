import { Controller } from '@nestjs/common'
import { MessagePattern } from '@nestjs/microservices'

@Controller()
export class CalcServiceController {
  @MessagePattern('sum')
  sum(numArr: number[]): number {
    return (numArr ?? []).reduce((a, b) => a + b, 0)
  }
}
