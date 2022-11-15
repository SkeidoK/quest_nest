import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);
    return;
  }
}
