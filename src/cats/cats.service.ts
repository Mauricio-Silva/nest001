import { CreateCatDTO } from './dto/cats.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: CreateCatDTO[] = [];

  create(cat: CreateCatDTO) {
    this.cats.push(cat);
  }

  findAll(): CreateCatDTO[] {
    return this.cats;
  }
}
