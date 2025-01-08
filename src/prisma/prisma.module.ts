import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

//Dibuat global agar tidak perlu memanggil berulang-ulang di module lain
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
