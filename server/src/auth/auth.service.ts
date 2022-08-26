import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { SigninAuthDto } from './dto/signin-auth.dto';


@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser(dto: CreateAuthDto) {
    try {
      const user = await this.prisma.user.create({
        data: {
         ...dto
        }
      })
        // delete the password
        delete user.password;
        // return the saved user
        return user
    } catch (error) {
      if(error instanceof PrismaClientKnownRequestError){
          if(error.code === 'P2002'){
              throw new ForbiddenException('Credentials Taken')
          }
      }
  }

  }

  async getUser(dto: SigninAuthDto) {
     // find the user by email
     const user = await this.prisma.user.findUnique({
      where:{
          email: dto.email
      },
  })
  // if not exist throw exception
  if(!user) throw new ForbiddenException('Credentials Incorrect')
  // if yes, compare password
  // if password not correct throw exception
  if(user.password !== dto.password) throw new ForbiddenException('Credentials Incorrect')
  delete user.password
  return user
  }


  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
