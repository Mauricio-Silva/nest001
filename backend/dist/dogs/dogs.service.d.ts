import { CreateDogDTO } from './dto/dogs.dto';
import { Repository } from 'typeorm';
import { CreateDog } from './entity/create.dog';
export declare class DogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<CreateDog>);
    private dogs;
    create(dog: CreateDogDTO): void;
    findAll(): CreateDogDTO[];
    findOne(id: string): CreateDogDTO[];
    remove(id: string): void;
    update(id: string, createDogDTO: CreateDogDTO): CreateDogDTO[];
}
