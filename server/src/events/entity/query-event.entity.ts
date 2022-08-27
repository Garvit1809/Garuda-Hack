import {IsOptional, IsString } from "class-validator"

export class QueryEventEntity {
  @IsString()
  @IsOptional()
  name        :string
}
