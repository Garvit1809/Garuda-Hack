import { Injectable } from '@nestjs/common';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';

@Injectable()
export class MentorsService {
  create(createMentorDto: CreateMentorDto) {
    return 'This action adds a new mentor';
  }

  findAll() {
    return `This action returns all mentors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentor`;
  }

  update(id: number, updateMentorDto: UpdateMentorDto) {
    return `This action updates a #${id} mentor`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentor`;
  }
}
