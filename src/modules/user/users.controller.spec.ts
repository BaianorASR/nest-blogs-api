import { Test, TestingModule } from '@nestjs/testing';

import { MockAllUsers } from '../../../test/mocks/mock-all-users';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue({
        findAll: jest.fn().mockResolvedValue(MockAllUsers),
      })
      .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should be return all users', async () => {
      const users = await controller.findAll();
      expect(users).toEqual(MockAllUsers);
    });
  });
});
