import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
    @ApiProperty()
    @IsNotEmpty()
  Fullname: string;
  @ApiProperty()
    @IsEmail()
  Email: string;
  @ApiProperty()
  @IsNotEmpty() 
  Password: string;
  @ApiProperty()
  @IsNotEmpty()
  Gender: string;
  @ApiProperty()
  @IsNotEmpty()
  Position: string;
  @ApiProperty()
  @IsNotEmpty()
  Type: string;


  isActive: boolean;
}