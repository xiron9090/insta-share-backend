import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { SessionModule } from '../session/session.module';
import { AccountModule } from '../account/account.module';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [UserModule, SessionModule, AccountModule, JwtModule.register({
    global: true,
    secret: "ddd",
    signOptions: { expiresIn: '60s' }
  })]
})
export class AuthModule { }
