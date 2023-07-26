import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    default: 'test@mail.com',
  })
  email: string;

  @ApiProperty({
    default: 'Alan Wake',
  })
  fullName: string;

  @ApiProperty({
    default: '123456',
  })
  password: string;
}
