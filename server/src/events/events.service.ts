import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService){}

  async create(createEventDto: CreateEventDto) {
    try {
      const event = await this.prisma.event.create({
        data: {
          ...createEventDto
        },
      })
      return event
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
      const event = await this.prisma.event.findMany()
      return event
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
      const event = await this.prisma.event.findFirst({
        where: {
          id: id
        }
      })
      return event
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    try {
      const event = await this.prisma.event.update({
        where: {
          id: id,
        },
        data: {
          ...updateEventDto
        }
      })
      return event
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
      const event = await this.prisma.event.delete({
        where: {
          id: id,
        }
      })
      return event
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002'){
            throw new ForbiddenException('Something went wrong, please try again later')
        }
      }
    }
  }
}
