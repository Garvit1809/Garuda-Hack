import { IsBoolean, IsDateString, IsNotEmpty, IsString } from "class-validator"

export class UpdateEventDto {
    @IsString()
    @IsNotEmpty()
    name        :string
  
    @IsString()
    @IsNotEmpty()
    description :string
  
    @IsString()
    @IsNotEmpty()
    location    :string
  
    @IsBoolean()
    @IsNotEmpty()
    online      :boolean
  
    @IsDateString()
    dateStart   :Date
  
    @IsDateString()
    dateEnd     :Date
  
    @IsString()
    @IsNotEmpty()
    content     :string
  
    @IsString()
    @IsNotEmpty()
    eventType   :string
  
    @IsString()
    @IsNotEmpty()
    eventFor    :string
  
    @IsBoolean()
    @IsNotEmpty()
    active      :boolean
  
    @IsString()
    @IsNotEmpty()
    discordLink :string
}
