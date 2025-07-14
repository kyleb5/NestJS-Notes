import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class PatchUserDto extends PartialType(CreateUserDto) {
    // This class inherits all properties from CreateUserDto
    // and makes them optional for patching user data.
    // No additional properties are needed here.
 }