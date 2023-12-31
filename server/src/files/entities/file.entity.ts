import { UserEntity } from 'src/users/entities/user.entity'
import {
  BaseEntity,
  Column,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('file')
export class FileEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  filename: string

  @Column()
  originalName: string

  @Column()
  size: number

  @Column()
  mimetype: string

  @ManyToOne(() => UserEntity, (user) => user.files)
  user: UserEntity

  @DeleteDateColumn()
  deletedAt?: Date
}
