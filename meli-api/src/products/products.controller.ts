import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { QueryProductDto } from './dto/query-product.dto';
import { FindProductsDto } from './dto/find-products.dto';
import { FindProductDto } from './dto/find-product.dto';

@Controller('products')
@ApiTags('Products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOkResponse({ type: [FindProductsDto] })
  findAll(@Query() query: QueryProductDto) {
    return this.productsService.findAll(query);
  }

  @Get(':id')
  @ApiOkResponse({ type: FindProductDto })
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
}
