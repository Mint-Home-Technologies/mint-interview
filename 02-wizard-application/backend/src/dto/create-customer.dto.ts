import { IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  givenName: string;

  @IsOptional()
  @IsString()
  familyName?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
