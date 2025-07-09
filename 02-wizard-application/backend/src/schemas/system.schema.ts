import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SystemDocument = System & Document;

@Schema({ timestamps: true })
export class System {
  @Prop({ required: true })
  addressLine1: string;

  @Prop()
  addressLine2: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  zip: number;

  @Prop()
  sqFeet: number;

  @Prop()
  customerKey: string;

  @Prop()
  systemType: string;

  @Prop()
  heatingSystemType: string;

  @Prop()
  electricityProvider: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);
