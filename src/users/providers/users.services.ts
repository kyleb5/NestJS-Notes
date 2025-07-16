import { Injectable } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";

@Injectable()
export class UsersService {

    public findAll(
        getUsersParamsDto: GetUsersParamDto,
        limit: number,
        page: number
    ) {
        return [
            {
                fristname: 'John',
                email: 'john@doe.com',
            },
            {
                firstName: 'Alice',
                email: 'alice@doe.com'
            },
        ];
    }


    /*
    Find user by ID
    */

    public findOneById(id: string) {
        return {
            id: '123',
            firstnmae: 'Alice',
            email: 'jyle@gmail.com',
        }
    }

}