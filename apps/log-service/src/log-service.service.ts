import { Injectable } from '@nestjs/common'

@Injectable()
export class LogServiceService {
  getHello(): string {
    return 'Hello World!'
  }
}
