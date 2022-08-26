import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';

@Injectable()
export class MentorsService {
  constructor(private prisma: PrismaService){}
  
  async create(createMentorDto: CreateMentorDto) {
    try {
      const mentor = await this.prisma.mentor.create({
        data: {
          ...createMentorDto
        },
      })
      return mentor
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }

  async findAll() {
    try {
      const mentor = await this.prisma.mentor.findMany()
      return mentor
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }


  async findOne(id: string) {
    try {
      const mentor = await this.prisma.mentor.findFirst({
        where: {
          id: id
        }
      })
      return mentor
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }

  async update(id: string, updateMentorDto: UpdateMentorDto) {
    try {
      const mentor = await this.prisma.mentor.update({
        where: {
          id: id,
        },
        data: {
          ...updateMentorDto
        }
      })
      return mentor
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
      const mentor = await this.prisma.mentor.delete({
        where: {
          id: id,
        }
      })
      return mentor
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }
}
