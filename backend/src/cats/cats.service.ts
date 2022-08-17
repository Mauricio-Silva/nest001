import { Cat } from './entity/create.cat';
import { CreateCatDTO } from './dto/cats.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: Repository<Cat>,
  ) {}

  create(cat: Cat) {
    this.catsRepository.save(cat);
  }

  async findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: string) {
    return this.cats.filter((obj: CreateCatDTO) => obj.id === id);
  }

  remove(id: string) {
    const cats_remove = this.cats.filter((obj: CreateCatDTO) => obj.id != id);
    this.cats = cats_remove;
  }

  update(id: string, createCatDTO: CreateCatDTO) {
    this.cats.map((obj: CreateCatDTO) => {
      if (obj.id === id) {
        obj.name = createCatDTO.name;
        obj.age = createCatDTO.age;
      }
    });
    return this.findOne(id);
  }
}
