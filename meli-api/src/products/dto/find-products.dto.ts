import { Author } from '@entities/author';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../entities/product.entity';

export class FindProductsDto {
  @ApiProperty({ required: false, type: () => Author })
  author: Author;

  @ApiProperty({ required: false, type: [String] })
  categories: string[];

  @ApiProperty({ required: false, type: [Product] })
  items: Product[];
}
