import { Module } from '@nestjs/common'
import { DateScalar } from './scalars/date.sclar'

@Module({
  providers: [DateScalar],
})
export class CommonModule {}
