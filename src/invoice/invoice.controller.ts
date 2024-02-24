import { Controller, Post, Body, Get } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDTO } from './invoice.dto';
@Controller('invoice')
export class UserController {
  constructor(private readonly service: InvoiceService) {}

  @Post('create')
  async createInvoice(@Body() createDto: CreateInvoiceDTO) {
    try {
      await this.service.createInvoice(createDto);
    } catch (e) {
      return false;
    }
  }

  @Get('getAll')
  async getAllInvoices() {
    try {
      await this.service.findAllInvoice();
    } catch (e) {
      return [];
    }
  }

  @Get('get')
  async getInvoice(@Body() id: string) {
    try {
      await this.service.findInvoice(id);
    } catch (e) {
      return [];
    }
  }

  @Post('verify')
  async verifyInvoice(@Body() id: string) {
    try {
      await this.service.findInvoice(id);
    } catch (e) {
      return [];
    }
  }
}
