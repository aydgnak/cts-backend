import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @Length(2, 16)
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsBoolean()
  @IsOptional()
  is_active: boolean;

  @IsBoolean()
  @IsOptional()
  is_verified: boolean;
}
