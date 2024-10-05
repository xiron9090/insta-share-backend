import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword, MinLength } from "class-validator";

class SignInDTO {
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @IsStrongPassword({ minLength: 8, minSymbols: 1, minNumbers: 1, minUppercase: 1 })
  @ApiProperty()
  password: string;
}
export default SignInDTO
