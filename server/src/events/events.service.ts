import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { AttendEventDto } from './dto/attend-event.dto';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { QueryEventEntity } from './entity/query-event.entity';

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

async join(attendEventDto: AttendEventDto){
  try {
    const event = await this.findOne(attendEventDto.id)
    if(event){
      if(event.attendees.length > 0){
        //check if user already joining in
        for(let userId in event.attendees){
          if(attendEventDto.userId === event.attendees[userId]){
            throw new ForbiddenException('You are already participating this')
          }
        }
      } else {
        event.attendees.push(attendEventDto.userId)
          const updateEvent = await this.prisma.event.update({
            where:{
              id: event.id
            },
            data:{
             attendees: event.attendees
            }
          })
          return updateEvent
      }

    }
  } catch (error) {
    if(error instanceof PrismaClientKnownRequestError){
      if(error.code === 'P2002'){
          throw new ForbiddenException('Something went wrong, please try again later')
      }
    }
    else {
      throw new ForbiddenException(error.response)
    }
  }
  }

 async findAll(query: QueryEventEntity) {
    if(!query.name){
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
    } else {
      try {
        const event = await this.prisma.event.findMany({
          where:{
            name: {
              contains: query.name
            }
          }
        })
        return event
      } catch (error) {
        if(error instanceof PrismaClientKnownRequestError){
          if(error.code === 'P2002'){
              throw new ForbiddenException('Something went wrong, please try again later')
          }
        }
        else {
          throw new ForbiddenException(error.response)
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
      else {
        throw new ForbiddenException(error.response)
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
      else {
        throw new ForbiddenException(error.response)
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
      else {
        throw new ForbiddenException(error.response)
      }
    }
  }
}
