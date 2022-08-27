import {IsOptional, IsString } from "class-validator"

export class QueryCareerEntity {
  @IsString()
  @IsOptional()
  role        :string
}
