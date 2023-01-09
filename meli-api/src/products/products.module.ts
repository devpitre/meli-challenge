import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MeliModule } from '@resources/meli-api/meli.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [MeliModule],
})
export class ProductsModule {}
