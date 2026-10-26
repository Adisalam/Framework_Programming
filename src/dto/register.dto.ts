import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty({ message: 'username tidak boleh kosong' })
    readonly username: string;

    @IsNotEmpty({ message: 'email tidak boleh kosong' })
    readonly email: string;

    @IsNotEmpty({ message: 'password tidak boleh kosong' })
    readonly password: string;
}