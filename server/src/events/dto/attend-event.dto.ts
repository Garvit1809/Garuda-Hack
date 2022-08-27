import { IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator"

export class AttendEventDto {
    @IsString()
    @IsNotEmpty()
    id        :string

    @IsString()
    @IsNotEmpty()
    userId        :string
}
