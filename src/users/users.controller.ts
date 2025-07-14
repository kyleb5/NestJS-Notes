import { Controller, Delete, Get, Patch, Post, Put, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  // Define the route for the users controller
  @Get("/:id?")
  public getUsers(
    @Param() getUsersParamsDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), /* If no limit is given by client NestJS will give it a value of 10 by default */ ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) { 
    // Use @Param to access route parameters like { id: '1231231', optional: 'hello', test: 'tawtraw' }
    // GET http://localhost:3000/users/1231231/hello/tawtraw
    // The required paramerts are id and test, while optional is not required
    console.log(getUsersParamsDto, 'getUsersParamsDto');
    return 'You sent a get request to users endpoint';
  }

  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto) {
    console.log(createUserDto instanceof CreateUserDto, 'createUserDto is instance of CreateUserDto');
    return 'You sent a post request to users endpoint';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto
  }
}
