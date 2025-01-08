import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createReviewDto: Prisma.ReviewsCreateInput) {
    return this.prisma.reviews.create({ data: createReviewDto });
  }

  async findAll() {
    return this.prisma.reviews.findMany({
      // where: { sale: false }, //Contoh untuk filter
    });
  }

  async findOne(id: number) {
    return this.prisma.reviews.findUnique({
      where: { id },
      include: { product: true },
    });
  }

  async update(id: number, updateReviewDto: Prisma.ReviewsUpdateInput) {
    return this.prisma.reviews.update({
      where: { id },
      data: updateReviewDto,
    });
  }

  async remove(id: number) {
    return this.prisma.reviews.delete({ where: { id } });
  }
}
