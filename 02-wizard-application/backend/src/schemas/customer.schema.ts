import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  givenName: string;

  @Prop()
  familyName: string;

  @Prop()
  phone: string;

  @Prop({
    validate: {
      validator: (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: (props) => `${props.value} is not a valid email!`,
    },
  })
  email: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
