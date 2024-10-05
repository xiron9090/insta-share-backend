import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import AccountModel from './entities/account.entity';
import CreateAccountDTO from './dto/create-account.dto';

@Controller('account')
@ApiTags("account")
export class AccountController {
  constructor(private readonly accountService: AccountService) { }
  @Post()
  @ApiCreatedResponse({ type: AccountModel })
  create(@Body() createAccount: CreateAccountDTO) {
    return this.accountService.createAccount(createAccount)
  }

}
