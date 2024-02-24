import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Invoice extends Document {
  @Prop({ required: true })
  userid: string;

  @Prop({ required: true })
  invoiceid: string;

  @Prop({ required: true })
  invoiceDate: Date;

  @Prop({ required: true })
  isPaid: boolean;
}

export const UserSchema = SchemaFactory.createForClass(Invoice);
