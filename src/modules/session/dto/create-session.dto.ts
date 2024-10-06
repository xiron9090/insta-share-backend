import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUUID } from "class-validator";
import CreateDto from "../../../common/dto/create.dto";

class CreateSessionDto extends CreateDto {
  @ApiProperty()
  @IsString()
  sessionToken: string;
  @IsString()
  @IsUUID()
  @ApiProperty()
  userId: string;
  @IsString()
  @ApiProperty()
  expires: string;
}
export default CreateSessionDto
