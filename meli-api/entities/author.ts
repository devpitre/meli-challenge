import { ApiProperty } from '@nestjs/swagger';

export class Author {
  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  lastName: string;
}
