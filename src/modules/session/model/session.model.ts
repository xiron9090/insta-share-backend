import { ApiProperty } from "@nestjs/swagger";
import { Session } from "@prisma/client";

class SessionModel implements Session {
  @ApiProperty()
  sessionToken: string;
  @ApiProperty()
  userId: string;
  @ApiProperty()
  expires: Date;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
export default SessionModel;
