import { Author } from '@entities/author';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

class ItemProduct extends Product {
  @ApiProperty({ type: Number })
  sold_quantity: number;

  @ApiProperty({ type: String })
  description: string;
}

export class FindProductDto {
  @ApiProperty({ required: false, type: () => Author })
  author: Author;

  @ApiProperty({ required: false, type: () => ItemProduct })
  item: ItemProduct;
}
