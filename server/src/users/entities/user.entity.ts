import { FileEntity } from 'src/files/entities/file.entity'
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  fullName: string

  @OneToMany(() => FileEntity, (file) => file.user)
  files: FileEntity[]
}
