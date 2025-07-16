import { Module } from "@nestjs/common";
import { PostsController } from "./posts.controller";
import { PostsService } from "./providers/posts.service";
import { UsersModule } from "src/users/users.module";

@Module({
    controllers: [PostsController],
    providers: [PostsService],
    imports: [UsersModule],
    // Always import the Module, the service is practically included
})
export class PostsModule {}