import { Test, TestingModule } from '@nestjs/testing'
import { CalcServiceController } from './calc-service.controller'
import { CalcServiceService } from './calc-service.service'

describe('CalcServiceController', () => {
  let calcServiceController: CalcServiceController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalcServiceController],
      providers: [CalcServiceService],
    }).compile()

    calcServiceController = app.get<CalcServiceController>(CalcServiceController)
  })
})
