import { CreateCatDTO } from './dto/cats.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: CreateCatDTO[] = [];

  create(cat: CreateCatDTO) {
    this.cats.push(cat);
  }

  findAll(): CreateCatDTO[] {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats.filter((obj: CreateCatDTO) => obj.id === id);
  }

  Remove(id: number) {
    const cats_remove = this.cats.filter((obj: CreateCatDTO) => obj.id !== id);
    this.cats = cats_remove;
  }

  Update(id: number, createCatDTO: CreateCatDTO) {
    // return this.cats.map((obj: CreateCatDTO) => {});
  }
}
