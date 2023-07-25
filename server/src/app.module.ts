import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { FileEntity } from './files/entities/file.entity'
import { FilesModule } from './files/files.module'
import { UserEntity } from './users/entities/user.entity'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot({autoLoadEntities: true}),
    UsersModule,
    FilesModule,
    // DatabaseModule,
    TypeOrmModule.forRoot({
      // autoLoadEntities: true,
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // entities: [__dirname + './**/**/*.entity{.ts,.js}'],
      entities: [FileEntity, UserEntity],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
