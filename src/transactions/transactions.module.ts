import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { TransactionRepository } from 'src/repositories/transaction.repository';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsService } from 'src/products/services/products.service';
import { ProductRepository } from 'src/repositories/product.repository';
import { ProductQuantityRepository } from 'src/repositories/product-quantity.repository';
import { ProductQuantityService } from 'src/products/services/products.quantity.service';

@Module({
  controllers: [TransactionsController],
  providers: [
    { provide: 'PRODUCT_SERVICE_INTERFACE', useClass: ProductsService },
    {
      provide: 'PRODUCT_QUANTITY_SERVICE_INTERFACE',
      useClass: ProductQuantityService,
    },
    { provide: 'TRANSACTION_SERVICE_INTERFACE', useClass: TransactionsService },
    { provide: 'PRODUCT_REPOSITORY_INTERFACE', useClass: ProductRepository },
    {
      provide: 'PRODUCT_QUANTITY_REPOSITORY_INTERFACE',
      useClass: ProductQuantityRepository,
    },
    {
      provide: 'TRANSACTION_REPOSITORY_INTERFACE',
      useClass: TransactionRepository,
    },
    PrismaService,
  ],
})
export class TransactionsModule {}
