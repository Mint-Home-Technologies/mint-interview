import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { UpdateCustomerDto } from 'src/dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() dto: CreateCustomerDto) {
    return this.customerService.create(dto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.customerService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCustomerDto) {
    return this.customerService.update(id, dto);
  }

  @Post('/createSystemCustomer')
  createSystemCustomer(@Body() dto: CreateCustomerDto & { systemId: string }) {
    return this.customerService.createSystemCustomer(dto);
  }
}
