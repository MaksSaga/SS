import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class AppService {
  getHello() {
    console.log('server started')
  }
}
