import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from 'src/schemas/customer.schema';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { UpdateCustomerDto } from 'src/dto/update-customer.dto';
import { System } from 'src/schemas/system.schema';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
    @InjectModel(System.name) private systemModel: Model<System>,
  ) {}

  async create(createDto: CreateCustomerDto): Promise<Customer> {
    return this.customerModel.create(createDto);
  }

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find();
  }

  async findById(id: string): Promise<Customer> {
    const customer = await this.customerModel.findById(id);
    if (!customer) throw new NotFoundException('Customer not found');
    return customer;
  }

  async update(id: string, updateDto: UpdateCustomerDto): Promise<Customer> {
    const updated = await this.customerModel.findByIdAndUpdate(id, updateDto, {
      new: true,
    });

    if (!updated) {
      throw new NotFoundException(`Customer with id ${id} not found`);
    }

    return updated;
  }

  async createSystemCustomer(
    createDto: CreateCustomerDto & { systemId: string },
  ): Promise<Customer> {
    const { systemId, ...customerData } = createDto;

    const customer = await this.customerModel.create(customerData);

    if (!customer) throw new NotFoundException('Customer failed to create');

    const system = await this.systemModel.findById(systemId);
    if (!system) throw new NotFoundException('System not found');

    system.customerKey = customer._id as string;
    await system.save();

    return customer;
  }
}
