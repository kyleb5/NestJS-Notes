import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './providers/users.services';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
  //  UsersService to make it available for injection in other modules
})
export class UsersModule {}
