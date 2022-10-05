/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UsersModule } from './modules/user/users.module';
import { CategoryModule } from './modules/category/category.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'baianor',
      password: 'baianor',
      database: 'BlogsApi',
      autoLoadEntities: true,
      entities: [__dirname + '/../**/*.entity.ts'],
      logging: true,
      synchronize: true,
      migrations: ['./typeorm/migrations/**/*.ts'],
    }),
    UsersModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
