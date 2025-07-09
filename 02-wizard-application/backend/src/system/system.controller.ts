import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { SystemService } from './system.service';
import { CreateSystemDto } from 'src/dto/create-system.dto';
import { UpdateSystemDto } from 'src/dto/update-system.dto';

@Controller('system')
export class SystemController {
  constructor(private readonly systemService: SystemService) {}

  @Post()
  create(@Body() createSystemDto: CreateSystemDto) {
    return this.systemService.create(createSystemDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSystemDto: UpdateSystemDto) {
    return this.systemService.update(id, updateSystemDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.systemService.findById(id);
  }
}
