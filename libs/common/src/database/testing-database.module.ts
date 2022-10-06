import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeORMConfig } from './database.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return TypeORMConfig['test'];
      },
    }),
  ],
})
export class TestingDatabaseModule {}
