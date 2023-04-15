import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ClientsModule, Transport } from '@nestjs/microservices'
import { CalcController } from './calc/calc.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'CALC_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.MAIN_HOST,
          port: 8888,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'LOG_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.MAIN_HOST,
          port: 9999,
        },
      },
    ]),
  ],
  controllers: [AppController, CalcController],
  providers: [AppService],
})
export class AppModule {}
