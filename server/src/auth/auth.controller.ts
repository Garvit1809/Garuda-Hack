import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { SigninAuthDto } from './dto/signin-auth.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/signup")
  signup(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.createUser(createAuthDto);
  }
  
  @Post("/signin")
  signin(@Body() createAuthDto: SigninAuthDto) {
    return this.authService.getUser(createAuthDto);
  }

}
