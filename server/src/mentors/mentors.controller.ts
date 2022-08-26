import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MentorsService } from './mentors.service';
import { CreateMentorDto } from './dto/create-mentor.dto';
import { UpdateMentorDto } from './dto/update-mentor.dto';

@Controller('mentors')
export class MentorsController {
  constructor(private readonly mentorsService: MentorsService) {}

  @Post()
  create(@Body() createMentorDto: CreateMentorDto) {
    return this.mentorsService.create(createMentorDto);
  }

  @Get()
  findAll() {
    return this.mentorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mentorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMentorDto: UpdateMentorDto) {
    return this.mentorsService.update(+id, updateMentorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mentorsService.remove(+id);
  }
}
