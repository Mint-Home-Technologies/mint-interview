import { IsString, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateSystemDto {
  @IsString()
  addressLine1: string;

  @IsOptional()
  @IsString()
  addressLine2?: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsNumber()
  zip: number;

  @IsOptional()
  @IsNumber()
  sqFeet?: number;

  @IsOptional()
  @IsString()
  customerKey?: string;

  @IsOptional()
  @IsString()
  systemType?: string;

  @IsOptional()
  @IsString()
  heatingSystemType?: string;

  @IsOptional()
  @IsString()
  electricityProvider?: string;
}
