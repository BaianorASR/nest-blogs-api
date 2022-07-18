import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDTO } from './DTOs/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() userData: CreateUserDTO) {
    return this.userService.create(userData);
  }
}
