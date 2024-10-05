import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccountController } from './account.controller';

@Module({
  providers: [AccountService],
  imports: [PrismaModule],
  controllers: [AccountController],
  exports: [AccountService]
})
export class AccountModule { }
