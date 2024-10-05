import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SessionService } from './session.service';
import CreateSessionDto from './dto/create-session.dto';

@Controller('session')
@ApiTags("session")
export class SessionController {
  constructor(private readonly session: SessionService) { }
  @Post()
  create(@Body() createService: CreateSessionDto) {
    return this.session.create(createService)
  }
}
