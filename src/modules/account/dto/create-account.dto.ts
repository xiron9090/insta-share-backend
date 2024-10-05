import { IsDate, IsNotEmpty, IsString, IsUUID } from "class-validator";
import CreateDto from "src/common/dto/create.dto";

class CreateAccountDTO extends CreateDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @IsString()
  @IsNotEmpty()
  type: string;
  provider: string;
  @IsString()
  @IsNotEmpty()
  providerAccountId: string;
  @IsString()
  @IsNotEmpty()
  refresh_token: string;
  @IsString()
  @IsNotEmpty()
  access_token: string;
  @IsString()
  @IsNotEmpty()
  @IsDate()
  expire_at: Date;
  @IsString()
  @IsNotEmpty()
  scope: string;
  @IsString()
  @IsNotEmpty()
  id_token: string;
  @IsString()
  @IsNotEmpty()
  session_state: string
}
export default CreateAccountDTO;
