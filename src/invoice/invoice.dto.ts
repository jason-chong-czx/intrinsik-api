import { Prop, Schema } from '@nestjs/mongoose';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

@Schema()
export class CreateInvoiceDTO {
  @IsNotEmpty()
  @IsString()
  userid: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  invoiceid: string;

  @Prop({ required: true })
  @IsNotEmpty()
  @IsDate()
  invoiceDate: Date;

  @Prop({ required: true })
  @IsNotEmpty()
  isPaid: boolean;
}
