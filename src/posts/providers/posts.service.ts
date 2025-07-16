import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.services";


@Injectable()
export class PostsService {

    // Injecting Users Service

    constructor(
        private readonly usersService: UsersService,
    ){}

    // This service will handle the business logic for posts.
    // It will interact with the database or any other data source.
    // Methods for creating, retrieving, updating, and deleting posts will be defined here.

    public findAll(userId: string) {
        // Users Service
        // Find A User

        const user = this.usersService.findOneById(userId)


        // Return Posts
        return [{
            user: user,
            title: "Hello Wrold",
            content: "Meow"
        },
    {
        user: user,
        title: "Hello World Entry 2",
        content: 'Test Content 2',
    }]
    }


}
