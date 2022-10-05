import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { UsersCreateDto } from './dto/users-create.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post()
  create(@Body() userData: UsersCreateDto) {
    return this.usersService.create(userData);
  }

  @Patch(':id')
  update(@Body() userData: UsersCreateDto, @Param('id') id: string) {
    return this.usersService.update(id, userData);
  }
}
