import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateAccountDTO from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) { }
  async getUserByAccount(provider_providerAccountId: any) {
    return this.prisma.account.findUnique({ where: { provider_providerAccountId }, })
  }
  createAccount(account: CreateAccountDTO) {
    return this.prisma.account.create({ data: account })
  }
}
