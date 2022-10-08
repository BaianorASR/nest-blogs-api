import 'dotenv/config';

import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { User } from '@app/database/entities';

const defaultConfig: MysqlConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  logging: false,
};

export const TypeORMConfig: Record<string, MysqlConnectionOptions> = {
  dev: {
    ...defaultConfig,
  },
  prod: {
    ...defaultConfig,
  },
  test: {
    ...defaultConfig,
    synchronize: false,
    host: process.env.DB_HOST_TEST,
    port: +process.env.DB_PORT_TEST,
    username: process.env.DB_USER_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
  },
};
