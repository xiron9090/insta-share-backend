import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { PrismaClientKnownRequestError, PrismaClientValidationError } from '@prisma/client/runtime/library';

@Injectable()
export class ErrorHandlerService {
  private readonly logger = new Logger(ErrorHandlerService.name);
  handleError(exception: any): HttpException {
    this.logger.error('Catching exception', exception)
    if (exception instanceof HttpException) {
      return new HttpException(exception.getResponse(), exception.getStatus())
    }
    return new HttpException('Internal server error', HttpStatus.INTERNAL_SERVER_ERROR)

  }
  handleValidationErro(exception: any): HttpException {
    this.logger.warn('Validation error', exception);
    const messages = exception.map((err: any) => {
      return Object.values(err.constraints).join(', ')
    }).join('; ')
    return new HttpException({ message: messages, error: 'Bad request' }, HttpStatus.BAD_REQUEST)
  }
  handlePrismaErrors(exception: PrismaClientKnownRequestError): HttpException {
    this.logger.error('Prisma error');
    if (exception.code === 'P2002') {
      return new HttpException('Single constraint error: A record with this field already exists', HttpStatus.CONFLICT)
    }
    return new HttpException("Database error", HttpStatus.INTERNAL_SERVER_ERROR)

  }
}
