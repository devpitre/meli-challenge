import { Module } from '@nestjs/common';
import { MeliService } from './meli.service';

@Module({
  providers: [MeliService],
  exports: [MeliService],
})
export class MeliModule {}
