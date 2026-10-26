import { IsNotEmpty } from 'class-validator';

export class CreateMahasiswaDto {
    @IsNotEmpty({ message: 'nama tidak boleh kosong' })
    readonly nama: string; 

    @IsNotEmpty({ message: 'nim tidak boleh kosong' })
    readonly nim: string; // Fixed from 'author' to 'nim' to match your message

    @IsNotEmpty({ message: 'jurusan tidak boleh kosong' })
    readonly jurusan: string;
}