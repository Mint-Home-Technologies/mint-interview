import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { System, SystemDocument } from 'src/schemas/system.schema';
import { CreateSystemDto } from 'src/dto/create-system.dto';
import { UpdateSystemDto } from 'src/dto/update-system.dto';

@Injectable()
export class SystemService {
  constructor(
    @InjectModel(System.name)
    private systemModel: Model<SystemDocument>,
  ) {}

  async create(createSystemDto: CreateSystemDto): Promise<System> {
    const created = new this.systemModel(createSystemDto);
    return created.save();
  }

  async update(id: string, updateSystemDto: UpdateSystemDto): Promise<System> {
    const updated = await this.systemModel.findByIdAndUpdate(
      id,
      updateSystemDto,
      {
        new: true,
      },
    );

    if (!updated) {
      throw new NotFoundException(`System with ID ${id} not found`);
    }

    return updated;
  }

  async findById(id: string): Promise<System> {
    const system = await this.systemModel.findById(id).exec();
    if (!system) {
      throw new NotFoundException(`System with ID ${id} not found`);
    }
    return system;
  }
}
