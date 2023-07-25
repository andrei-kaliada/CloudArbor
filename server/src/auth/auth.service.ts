import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CreateUserDto } from 'src/users/dto/create-user.dto'
import { UserEntity } from 'src/users/entities/user.entity'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email)
    if (user && user.password === password) {
      const { password, ...rest } = user
			const payload = {sub: rest.id, username: rest.fullName}
      return {access_token: await this.jwtService.signAsync(payload)}
    }

    return null
  }

  async registration(userDto: CreateUserDto) {
    try {
      const findUser = await this.userService.findByEmail(userDto.email)

      if (findUser) {
        throw new UnauthorizedException(
          `User with email ${findUser.email} already exists`
        )
      }

      const user = await this.userService.createUser(userDto)

      const payload = { sub: user.id, username: user.fullName }
      return { access_token:this.jwtService.sign(payload) }
    } catch (error) {
      throw new ForbiddenException(`${error}`)
    }
  }

	async login(user: UserEntity){
		const payload = {id: user.id}

		return {
			access_token: this.jwtService.sign(payload)
		}
	}
}
