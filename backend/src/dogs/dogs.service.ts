import { CreateDogDTO } from './dto/dogs.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDog } from './entity/create.dog';

@Injectable()
export class DogsService {
  constructor(
    @Inject('DOGS_REPOSITORY')
    private dogsRepository: Repository<CreateDog>,
  ) {}

  private dogs: CreateDogDTO[] = [];

  create(dog: CreateDogDTO) {
    this.dogs.push(dog);
  }

  findAll(): CreateDogDTO[] {
    return this.dogs;
  }

  findOne(id: string) {
    return this.dogs.filter((obj: CreateDogDTO) => obj.id === id);
  }

  remove(id: string) {
    const dogs_remove = this.dogs.filter((obj: CreateDogDTO) => obj.id !== id);
    this.dogs = dogs_remove;
  }

  update(id: string, createDogDTO: CreateDogDTO) {
    this.dogs.map((obj: CreateDogDTO) => {
      if (obj.id === id) {
        obj.name = createDogDTO.name;
        obj.age = createDogDTO.age;
      }
    });
    return this.findOne(id);
  }
}
