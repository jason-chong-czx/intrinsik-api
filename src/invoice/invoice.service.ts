import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Invoice } from './invoice.model';
import { CreateInvoiceDTO } from './invoice.dto';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name) private invoiceModel: Model<Invoice>,
  ) {}
  async findAllInvoice(): Promise<Invoice[]> {
    return this.invoiceModel.find().exec();
  }

  async findInvoice(id: string): Promise<Invoice> {
    return this.invoiceModel.findOne({ invoiceid: id }).exec();
  }

  async createInvoice(createDto: CreateInvoiceDTO): Promise<Invoice> {
    const invoice = new this.invoiceModel(createDto);
    return invoice.save();
  }
  async verifyInvoice(id: string): Promise<Invoice> {
    return this.invoiceModel
      .findOneAndUpdate({ invoiceid: id }, { isPaid: true })
      .exec();
  }
}
