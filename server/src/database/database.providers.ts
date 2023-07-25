import { ConfigService } from '@nestjs/config'
import { FileEntity } from 'src/files/entities/file.entity'
import { UserEntity } from 'src/users/entities/user.entity'
import { DataSource } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.get<string>('pg.host'),
        port: configService.get<number>('pg.port'),
        username: configService.get<string>('pg.username'),
        password: configService.get<string>('pg.password'),
        database: configService.get<string>('pg.database'),
        entities: [FileEntity, UserEntity],
        // entities: [UserEntity, FileEntity],
        synchronize: true,
      })

      return dataSource.initialize()
    },
  },
]
