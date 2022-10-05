import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersCreateDto } from './dto/users-create.dto';
import { UsersUpdateDto } from './dto/users-update.dto';
import { User } from '../../typeorm/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findAll() {
    try {
      const users = await this.usersRepository.find();
      return users;
    } catch (e) {
      throw e;
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.usersRepository
        .findOneByOrFail({ id })
        .catch(() => {
          throw new NotFoundException('User not found.');
        });

      return user;
    } catch (e) {
      throw e;
    }
  }

  async create(userData: UsersCreateDto) {
    try {
      const user = this.usersRepository.create(userData);
      return this.usersRepository.save(user);
    } catch (e) {
      throw e;
    }
  }

  async update(id: string, userData: UsersUpdateDto) {
    try {
      const user = await this.findOne(id);
      this.usersRepository.merge(user, userData);
      return this.usersRepository.save(user);
    } catch (e) {
      throw e;
    }
  }
}
