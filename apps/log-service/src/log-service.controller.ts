import { Controller } from '@nestjs/common'
import { EventPattern } from '@nestjs/microservices'

@Controller()
export class LogServiceController {
  @EventPattern('log')
  log(text: string): void {
    console.log(text)
  }
}
