import { Injectable } from '@nestjs/common'

@Injectable()
export class CalcServiceService {
  getHello(): string {
    return 'Hello World!'
  }
}
