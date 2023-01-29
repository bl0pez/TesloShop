import { IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  // Transformar de string a number
  @Type(() => Number) // Obcional si ponemos el enableImplicitConversion en true
  limit?: number;

  @IsOptional()
  //Valores minimos
  @Min(0)
  // Transformar de string a number
  @Type(() => Number) // Obcional si ponemos el enableImplicitConversion en true
  offset?: number;
}
