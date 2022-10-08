import { Repository } from 'typeorm';

import { User } from '@app/database/entities';
import { TestingDatabaseModule } from '@app/database/testing-database.module';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { AppModule } from '../../app.module';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let repository: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestingDatabaseModule],
      providers: [],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should be return all users', async () => {
      const result = await service.findAll();
      expect(result).toEqual([]);
    });
  });

  describe('create', () => {
    afterAll(async () => {
      await repository.clear();
    });

    it('should be create a user', async () => {
      const result = await service.create({
        email: 'email@email.com',
        password: 'password',
        displayName: 'displayName',
        image: 'image',
      });

      expect(result).toBeInstanceOf(User);
      expect(result.email).toEqual('email@email.com');
      expect(result.password).toEqual('password');
      expect(result.displayName).toEqual('displayName');
      expect(result.image).toEqual('image');
    });

    it('should be throw an error when email is already in use', async () => {
      let error;
      try {
        await service.create({
          email: 'email@email.com',
          password: 'password',
          displayName: 'displayName',
          image: 'image',
        });
      } catch (e) {
        error = e;
      }

      expect(error).toBeDefined();
      expect(error.message).toContain('Duplicate entry');
    });
  });
});
