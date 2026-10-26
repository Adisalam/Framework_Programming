import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateMahasiswaDto } from '../dto/create-mahasiswa-dto.js'; // Sesuaikan path folder DTO Anda

@Controller('mahasiswa')
export class MahasiswaController {

    // Menampilkan data (GET /mahasiswa)
    @Get()
    getAllmahasiswa(): string {
        return "menampilkan semua mahasiswa";
    }

    // Menambah data baru dengan validasi (POST /mahasiswa)
    @Post()
    create(@Body() createMahasiswaDto: CreateMahasiswaDto) {
        return {
            message: "Data mahasiswa berhasil ditambahkan!",
            data: createMahasiswaDto,
        };
    }
}