import { ApiProperty } from "@nestjs/swagger";
import { Account } from "@prisma/client";

class AccountModel implements Account {
  @ApiProperty()
  userId: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  provider: string;
  @ApiProperty()
  providerAccountId: string;
  @ApiProperty()
  refresh_token: string;
  @ApiProperty()
  access_token: string;
  @ApiProperty()
  expires_at: number;
  @ApiProperty()
  token_type: string;
  @ApiProperty()
  scope: string;
  @ApiProperty()
  id_token: string;
  @ApiProperty()
  session_state: string;
  @ApiProperty({ required: false, nullable: true })
  createdAt: Date;
  @ApiProperty({ required: false, nullable: true })
  updatedAt: Date;

}
export default AccountModel
