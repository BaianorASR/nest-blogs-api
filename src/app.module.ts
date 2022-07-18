/* eslint-disable @typescript-eslint/ban-ts-comment */
import { join } from 'path';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT, 10),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,

      autoLoadEntities: true,
      logging: true,
      synchronize: false,
      entities: [join(__dirname, '**', '*.entity.{ts,js}')],
    }),
    UserModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
