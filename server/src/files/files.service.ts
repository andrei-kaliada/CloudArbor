import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { FileEntity } from './entities/file.entity'
import { FileType } from './files.controller'

@Injectable()
export class FilesService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly repository: Repository<FileEntity>
  ) {}

  findAll(userId: number, fileType: FileType) {
    const qb = this.repository.createQueryBuilder('file')

    qb.where('file.userId = :userId', { userId })

    if(fileType === FileType.PHOTOS){
      qb.andWhere('file.mimetype LIKE :type', { type: '%image%'})
    }

    if(fileType === FileType.TRASH){
      qb.withDeleted().andWhere('file.deletedAt IS NOT NULL')
    }

    return qb.getMany();
  }

  async create(file: Express.Multer.File, userId: number){
    const { filename, originalname, size, mimetype } = file;
    return this.repository.save({
      filename,
      originalName: originalname,
      size,
      mimetype,
      user: { id: userId}
    })
  }

  async delete(userId: number, filesId: string){
    const ids = filesId.split(',');

    const qb = this.repository.createQueryBuilder('file')

    qb.where('id IN (:...ids) AND userId = :userId', {
      ids,
      userId
    })

    return qb.softDelete().execute();
  }
}
