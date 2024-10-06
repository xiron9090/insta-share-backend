import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateSessionDto from './dto/create-session.dto';

@Injectable()
export class SessionService {
  constructor(private readonly prismaService: PrismaService) { }
  create(session: CreateSessionDto) {
    return this.prismaService.session.create({ data: session })
  }
}
