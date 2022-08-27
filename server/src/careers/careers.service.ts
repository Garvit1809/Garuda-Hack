import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { ObjectId } from 'bson';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { QueryCareerEntity } from './entity/query-career.entity';

@Injectable()
export class CareersService {
  constructor(private prisma: PrismaService){}
  async create(createCareerDto: CreateCareerDto) {
  
    try {
      const career = await this.prisma.career.create({
        data: {
          ...createCareerDto
        }
      })
      return career
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }

  }

  async findAll(query: QueryCareerEntity) {
    if(!query.role){
      try {
        const career = await this.prisma.career.findMany()
        return career
      } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
          if(error.code === 'P2002'){
              throw new ForbiddenException('Something went wrong, please try again later')
          }
        }
      }
    } else {
      try {
        const career = await this.prisma.career.findMany({
          where:{
            role: {
              contains: query.role
            }
          }
        })
        return career
      } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
          if(error.code === 'P2002'){
              throw new ForbiddenException('Something went wrong, please try again later')
          }
        }
      }
    }

  }

  async findOne(id: string) {
    console.log(id)
    try {
      const career = await this.prisma.career.findFirst({
        where: {
          id: id
        }
      })
      return career
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }

  async update(id: string, updateCareerDto: UpdateCareerDto) {
    try {
      const career = await this.prisma.career.update({
        where: {
          id: id,
        },
        data: {
          ...updateCareerDto
        }
      })
      return career
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }

  async remove(id: string) {
    try {
      const career = await this.prisma.career.delete({
        where: {
          id: id,
        }
      })
      return career
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }
}
