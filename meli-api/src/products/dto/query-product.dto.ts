import { ApiProperty } from '@nestjs/swagger';

export class QueryProductDto {
  @ApiProperty({ required: true })
  q: string;
}
