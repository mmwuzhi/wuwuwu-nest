import { Controller, Get, Inject, Query } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'
import { Observable } from 'rxjs'

@Controller('calc')
export class CalcController {
  constructor(@Inject('CALC_SERVICE') private calcClient: ClientProxy) {}

  @Get()
  calc(@Query('num') str): Observable<number> {
    const numArr = str.split(',').map((item) => parseInt(item))

    return this.calcClient.send('sum', numArr)
  }
}
