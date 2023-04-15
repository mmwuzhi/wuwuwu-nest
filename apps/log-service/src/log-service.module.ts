import { Module } from '@nestjs/common'
import { LogServiceController } from './log-service.controller'
import { LogServiceService } from './log-service.service'

@Module({
  imports: [],
  controllers: [LogServiceController],
  providers: [LogServiceService],
})
export class LogServiceModule {}
