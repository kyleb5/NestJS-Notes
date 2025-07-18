import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

@Injectable()
export class UsersService {
    constructor(
        // Injecting Auth Service
        @Inject(forwardRef(()=> AuthService))
        private readonly authService: AuthService
    ){}

    public findAll(
        getUsersParamsDto: GetUsersParamDto,
        limit: number,
        page: number
    ) {
        const isAuth = this.authService.isAuth();
        console.log(isAuth);

        // Auth Service
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