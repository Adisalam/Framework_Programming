import { IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsNotEmpty({ message: 'username atau email tidak boleh kosong' })
    readonly identifier: string;

    @IsNotEmpty({ message: 'password tidak boleh kosong' })
    readonly password: string;
}