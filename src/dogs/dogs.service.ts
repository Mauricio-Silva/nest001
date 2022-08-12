import { CreateDogDTO } from './dto/dogs.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  private readonly dogs: CreateDogDTO[] = [];

  create(dog: CreateDogDTO) {
    this.dogs.push(dog);
  }

  findAll(): CreateDogDTO[] {
    return this.dogs;
  }
}
