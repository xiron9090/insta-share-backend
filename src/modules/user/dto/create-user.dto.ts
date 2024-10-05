import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsStrongPassword } from "class-validator";
import CreateDto from "src/common/dto/create.dto";
import CreateAccountDTO from "src/modules/account/dto/create-account.dto";

class CreateUserDTO extends CreateDto {
  @IsString()
  @ApiProperty()
  name: string;
  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;
  @IsString()
  @IsStrongPassword({ minLength: 8, minSymbols: 1, minNumbers: 1, minUppercase: 1 })
  @ApiProperty()
  password: string;

}
export default CreateUserDTO
