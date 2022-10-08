import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UsersCreateDto {
  @MinLength(8)
  @IsString()
  @IsNotEmpty()
  public displayName: string;

  @IsEmail()
  @IsNotEmpty()
  public email: string;

  @MinLength(6)
  @IsString()
  @IsNotEmpty()
  public password: string;

  @IsString()
  @IsNotEmpty()
  public image: string;
}
