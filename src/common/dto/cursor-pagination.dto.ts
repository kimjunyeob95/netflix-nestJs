import { IsArray, IsInt, IsOptional, IsString } from "class-validator";

export class CursorPaginationDto {
    @IsInt()
    @IsOptional()
    // id_52,likeCount_20
    cursor: string;

    @IsArray()
    @IsString({
        each: true
    })
    @IsOptional()
    // ['id_DESC', 'likeCount_ASC']
    order: string[] = [];

    @IsInt()
    @IsOptional()
    take: number = 10;
}