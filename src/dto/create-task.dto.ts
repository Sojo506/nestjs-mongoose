import { IsString, IsBoolean, IsOptional, IsNotEmpty } from "class-validator"

// this is an interface basically 
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsBoolean()
  @IsOptional()
  done?: boolean
}