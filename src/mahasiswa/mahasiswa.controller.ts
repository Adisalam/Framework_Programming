import { Controller, Get } from '@nestjs/common';

@Controller('mahasiswa')    //Dekorator
export class MahasiswaController {
    //menampilkan data atau mengambil data
    @Get()
    getAllMahasiswa():string{
        return "Menampilkan semua data mahasiswa";
    }
}