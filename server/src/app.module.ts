import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from './database/database.module'
import { PrismaService } from './database/prisma.service'
import { AdminModule } from './core/admin/admin.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, AdminModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
