import { Test, TestingModule } from '@nestjs/testing'
import { LogServiceController } from './log-service.controller'
import { LogServiceService } from './log-service.service'

describe('LogServiceController', () => {
  let logServiceController: LogServiceController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LogServiceController],
      providers: [LogServiceService],
    }).compile()

    logServiceController = app.get<LogServiceController>(LogServiceController)
  })
})
