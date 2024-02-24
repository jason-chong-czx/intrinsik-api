import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUserById(id: string): Promise<User | null> {
    return this.userModel.findOne({ id }).exec();
  }

  async createUser(id: string, password: string): Promise<User> {
    const user = new this.userModel({ id, password });
    return user.save();
  }
}
