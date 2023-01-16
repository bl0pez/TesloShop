import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';

import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  // Importamos el modulo de TypeOrm para que sepa que vamos a usar la entidad Product
  imports: [
    TypeOrmModule.forFeature([Product]),
  ],
})
export class ProductsModule {}
