import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { PrismaService } from './database/prisma.service'
import { AdminModule } from './core/admin/admin.module';

@Module({
  imports: [DatabaseModule, AdminModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
