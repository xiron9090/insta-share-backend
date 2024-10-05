import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import CreateUserDTO from './dto/create-user.dto';

@Controller('user')
@ApiTags("user")
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Post()
  create(@Body() user: CreateUserDTO) {
    return this.userService.create(user)
  }
}
