import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateMentorDto {
    @IsString()
    @IsNotEmpty()
    name       :string

    @IsEmail()
    @IsNotEmpty()
    email      :string

    @IsString()
    linkedIn   :string

    @IsString()
    github     :string

    @IsString()
    education  :string

    @IsString()
    @IsNotEmpty()
    experience :string

    @IsString()
    work       :string

    @IsNumber()
    @IsNotEmpty()
    fees      :number

    @IsNumber()
    @IsNotEmpty()
    mentees   :number
}
