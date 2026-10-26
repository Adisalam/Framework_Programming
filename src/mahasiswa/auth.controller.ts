import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from '../dto/register.dto.js'; // Sesuaikan letak folder dto

@Controller('auth') // Membuat prefix URL menjadi /auth
export class AuthController {
  
  @Post('register') // Membuat endpoint menjadi /auth/register
  register(@Body() registerDto: RegisterDto) {
    return {
      message: 'Registrasi berhasil!',
      data: registerDto,
    };
  }
}