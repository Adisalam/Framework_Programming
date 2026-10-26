import { IsNotEmpty } from 'class-validator';

export class ResetPasswordDto {
    @IsNotEmpty({ message: 'code password tidak boleh kosong' })
    readonly codePassword: string;

    @IsNotEmpty({ message: 'password baru tidak boleh kosong' })
    readonly newPassword: string;
}