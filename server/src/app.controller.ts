import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaService } from './database/prisma.service'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService
  ) {}

  @Get()
  async getHello(): Promise<any> {
    try {
      await this.prismaService.poshta.create({
        data: {
          title: 'new',
          description: 'Нова пошта',
        },
      })

      await this.prismaService.poshta.create({
        data: {
          title: 'ukr',
          description: 'Укрпошта',
        },
      })
    } catch (error) {}
  }
}
