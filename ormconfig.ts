import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'BlogsApi',
  entities: ['src/**/*.entity.ts'],
  logging: true,
  synchronize: false,
  migrations: ['src/typeorm/migrations/**/*.ts'],
});
