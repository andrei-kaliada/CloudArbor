import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({
    default: 'user3@mail.com',
  })
  email: string

  @ApiProperty({
    default: 'Alan Wake',
  })
  fullName: string

  @ApiProperty({
    default: '123',
  })
  password: string
}
