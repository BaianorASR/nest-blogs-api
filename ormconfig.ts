import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'baianor',
  password: 'baianor',
  database: 'BlogsApi',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  logging: true,
  synchronize: false,
  migrations: ['src/typeorm/migrations/**/*.ts'],
});
