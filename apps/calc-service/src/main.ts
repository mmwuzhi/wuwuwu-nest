import { NestFactory } from '@nestjs/core'
import { CalcServiceModule } from './calc-service.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CalcServiceModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 8888,
    },
  })
  await app.listen()
}
bootstrap()
