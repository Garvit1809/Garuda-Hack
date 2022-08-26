import { ObjectId } from "bson"
import { IsArray, IsNotEmpty, IsString } from "class-validator"

export class CreateCareerDto {
    
    @IsString()
    @IsNotEmpty()
    companyName      :string

    @IsString()
    companyImageLink :string

    @IsString()
    companyWebsite   :string

    @IsString()
    companyVision    :string

    @IsString()
    @IsNotEmpty()
    role             :string

    @IsString()
    roleDescription  :string

    @IsArray()
    skills           :string[]

    @IsString()
    jobType          :string

    @IsString()
    jobLocation      :string

    @IsString()
    @IsNotEmpty()
    userId         :string

}
