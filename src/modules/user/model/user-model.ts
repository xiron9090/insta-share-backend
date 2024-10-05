import { ApiProperty } from "@nestjs/swagger";
import { User } from "@prisma/client";

class UserModel implements User {
  @ApiProperty()
  name: string;
  @ApiProperty()
  id: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  emailVerified: Date;
  @ApiProperty()
  image: string;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

}
export default UserModel
