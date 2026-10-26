import { Module } from '@nestjs/common';
import { MahasiswaController } from './mahasiswa.controller.js'; // Import mahasiswa controller
import { AuthController } from './auth.controller.js'; // Import auth controller

@Module({
  controllers: [MahasiswaController, AuthController], // <-- Daftarkan di sini
})
export class MahasiswaModule {}