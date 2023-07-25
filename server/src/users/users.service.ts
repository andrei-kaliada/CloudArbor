import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  findAll() {
    return this.userRepository.findAndCount()
  }

  findByEmail(email: string) {
    return this.userRepository.findOneBy({
      email,
    })
  }

  findById(id: number) {
    return this.userRepository.findOneBy({ id })
  }

  createUser(user: CreateUserDto) {
    return this.userRepository.save(user)
  }
}
