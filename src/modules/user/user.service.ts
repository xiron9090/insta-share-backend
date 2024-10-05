import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import CreateUserDTO from './dto/create-user.dto';
import mangmentPassword from 'src/common/utils/hash-password';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }
  findByEmail(email: string) {
    return this.prismaService.user.findUnique({ where: { email }, })
  }
  async create(user: CreateUserDTO) {
    const passwordHash = await mangmentPassword(user.password).hash();
    return this.prismaService.user.create({
      data: { ...user, password: passwordHash, },
      select: {
        name: true,
        id: true,
        updatedAt: true,
        createdAt: true,
        emailVerified: true,
        image: true,
        email: true,

      }
    })
  }
  delete(id: string) {
    return this.prismaService.user.delete({ where: { id } })
  }
}
