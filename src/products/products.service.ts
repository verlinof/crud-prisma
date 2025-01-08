import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createProductDto: Prisma.ProductsCreateInput) {
    return this.prisma.products.create({ data: createProductDto });
  }

  async findAll() {
    return this.prisma.products.findMany({
      // where: { sale: false }, //Contoh untuk filter
    });
  }

  async findOne(id: number) {
    return this.prisma.products.findUnique({
      where: { id },
      include: { description: true, tags: true },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductsUpdateInput) {
    return this.prisma.products.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.prisma.products.delete({ where: { id } });
  }
}
