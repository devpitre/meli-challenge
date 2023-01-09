import { ApiProperty } from '@nestjs/swagger';

class Price {
  @ApiProperty({ type: String })
  currency: string;

  @ApiProperty({ type: Number })
  amount: number;

  @ApiProperty({ type: Number })
  decimals: number;
}

export class Product {
  @ApiProperty({ type: String })
  id: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: () => Price })
  price: Price;

  @ApiProperty({ type: String })
  picture: string;

  @ApiProperty({ type: String })
  condition: string;

  @ApiProperty({ type: Boolean })
  free_shipping: boolean;

  @ApiProperty({ type: String })
  state_name?: string;
}
