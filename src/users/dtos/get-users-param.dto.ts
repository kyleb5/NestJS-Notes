import { IsOptional, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetUsersParamDto {
    @ApiPropertyOptional({
        description: "Get user with a specific id",
        example: 1234,
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number) // Ensures that the value is transformed to a number
    id?: number;

}