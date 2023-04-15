import { Module } from '@nestjs/common'
import { CalcServiceController } from './calc-service.controller'
import { CalcServiceService } from './calc-service.service'

@Module({
  imports: [],
  controllers: [CalcServiceController],
  providers: [CalcServiceService],
})
export class CalcServiceModule {}
