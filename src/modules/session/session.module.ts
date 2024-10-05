import { Module } from '@nestjs/common';
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SessionController],
  providers: [SessionService],
  imports: [PrismaModule],
  exports: [SessionService]
},)
export class SessionModule { }
