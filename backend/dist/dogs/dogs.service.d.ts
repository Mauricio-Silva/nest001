import { Repository } from 'typeorm';
import { Dog } from './entity/create.dog';
export declare class DogsService {
    private dogsRepository;
    constructor(dogsRepository: Repository<Dog>);
    create(dog: Dog): void;
    findAll(): Promise<Dog[]>;
    findOne(dogId: string): Promise<Dog>;
    remove(dogId: string): void;
    update(dogId: string, dog: Dog): Promise<Dog>;
}
