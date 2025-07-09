import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Customer, CustomerSchema } from 'src/schemas/customer.schema';
import { System, SystemSchema } from 'src/schemas/system.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: System.name, schema: SystemSchema },
    ]),
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
