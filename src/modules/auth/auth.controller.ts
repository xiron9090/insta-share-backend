import { Body, Controller, Post } from '@nestjs/common';
import SignInDTO from './dto/sign-in.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@Controller('auth')
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  @Post()
  signIn(@Body() params: SignInDTO) {
    return this.authService.signIn(params)
  }
}
