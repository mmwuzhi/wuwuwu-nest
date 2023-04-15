import { NestFactory } from '@nestjs/core'
import { LogServiceModule } from './log-service.module'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(LogServiceModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: 9999,
    },
  })
  await app.listen()
}
bootstrap()
