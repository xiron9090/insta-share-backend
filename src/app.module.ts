import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AccountModule } from './modules/account/account.module';
import { AuthModule } from './modules/auth/auth.module';
import { SessionModule } from './modules/session/session.module';
import { VerificationTokenModule } from './modules/verification-token/verification-token.module';
import { UserModule } from './modules/user/user.module';
import { ErrorHandlerService } from './common/services/error-handler/error-handler.service';

@Module({
  imports: [PrismaModule, AccountModule, AuthModule, SessionModule, VerificationTokenModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ErrorHandlerService],
})
export class AppModule { }
