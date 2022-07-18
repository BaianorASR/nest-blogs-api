import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateUserDTO } from './DTOs/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() userData: CreateUserDTO) {
    return this.userService.create(userData);
  }

  @Patch(':id')
  update(@Body() userData: CreateUserDTO, @Param('id') id: string) {
    return this.userService.update(id, userData);
  }
}
