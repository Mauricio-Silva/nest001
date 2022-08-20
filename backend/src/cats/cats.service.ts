import { Cat } from './entity/create.cat';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY') private catsRepository: Repository<Cat>,
  ) {}

  create(cat: Cat): void {
    this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  async findOne(catId: string): Promise<Cat> {
    return this.catsRepository.findOne({
      where: {
        id: catId,
      },
    });
  }

  remove(catId: string): void {
    this.catsRepository.delete({ id: catId });
  }

  async update(catId: string, cat: Cat): Promise<Cat> {
    this.catsRepository.update(
      {
        id: catId,
      },
      {
        name: cat.name,
        age: cat.age,
      },
    );
    return this.findOne(catId);
  }
}
