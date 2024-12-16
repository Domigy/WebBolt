import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDto {
@IsNotEmpty()
@IsString()
  name: string
  @IsNotEmpty()
    @IsString()
  username: string
  @IsNotEmpty()
@IsString()
  email: string
  @IsNotEmpty()
@IsString()
  location: string
  @IsNotEmpty()
@IsStrongPassword()
  password: string
}
