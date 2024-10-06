import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import SignInDTO from './dto/sign-in.dto';
import mangmentPassword from '../../common/utils/hash-password';
import { SessionService } from '../session/session.service';
import { AccountService } from '../account/account.service';
import SignUpDTO from './dto/sign-up.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly session: SessionService, private readonly accountService: AccountService, private readonly jwtService: JwtService) { }
  async signIn(params: SignInDTO) {
    const user = await this.userService.findByEmail(params.email);
    if (await mangmentPassword(user.password).compare(params.password)) {
      throw new UnauthorizedException()
    }
    const jwt = { sub: user.id, username: user.name, }
    const session = await this.session.create({
      userId: user.id, sessionToken: this.jwtService.sign(jwt),
      expires: new Date().toISOString(),
    })
    const account = await this.accountService.getUserByAccount("ddd")
    return {
      user, account, session,
    }

  }
  async signUp(data: SignUpDTO) {


  }
}
