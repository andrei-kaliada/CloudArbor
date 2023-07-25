import { Controller, Get, Request } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { UsersService } from './users.service'

@Controller('users')
@ApiTags('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  // @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getMe(@Request() req){
   console.log('req:', req.user);
   return req.user;
  }
  
}
