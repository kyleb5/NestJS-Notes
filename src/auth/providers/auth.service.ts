import { Injectable, forwardRef, Inject } from "@nestjs/common"
import { UsersService } from "src/users/providers/users.services";

@Injectable()
export class AuthService {
        constructor(
            // Injecting UserService
            @Inject(forwardRef(()=> UsersService))
            private readonly usersService: UsersService
            
        ){} 
    public login(email: string, password: string, id: string) {
        const user = this.usersService.findOneById('1234');
        // Checks if user exists in database or not
        // login
        // token
        return "SAMPLE_TOKEN";


    }

    public isAuth() {
        return true;
    }
}