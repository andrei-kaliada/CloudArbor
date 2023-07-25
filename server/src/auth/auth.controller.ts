import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common'
import { ApiBody, ApiTags } from '@nestjs/swagger'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { AuthService } from './auth.service'
import { LocalAuthGuard } from './guards/local.guards'

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Post('register')
  @ApiBody({ type: CreateUserDto })
  async registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto)
  }
}
