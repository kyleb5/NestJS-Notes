import { Controller, Delete, Get, Patch, Post, Put, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.services';
import { ApiOperation, ApiQuery, ApiTags, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService, // Injecting UsersService to use its methods
  ) {}

  // Define the route for the users controller
  @Get("/:id?")
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application'
  })
  @ApiResponse({
    status: 200,
    description: "Users fetched based on the query",
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: "The number of entires returned per query",
    example: 10
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description: "The number of entires returned per query",
    example: 1
  })
  public getUsers(
    @Param() getUsersParamsDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), /* If no limit is given by client NestJS will give it a value of 10 by default */ ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) { 
    // Use @Param to access route parameters like { id: '1231231', optional: 'hello', test: 'tawtraw' }
    // GET http://localhost:3000/users/1231231/hello/tawtraw
    // The required paramerts are id and test, while optional is not required
    return this.usersService.findAll(getUsersParamsDto, limit, page);
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
