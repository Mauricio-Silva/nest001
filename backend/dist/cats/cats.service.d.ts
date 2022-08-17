import { Cat } from './entity/create.cat';
import { CreateCatDTO } from './dto/cats.dto';
import { Repository } from 'typeorm';
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: Repository<Cat>);
    create(cat: Cat): void;
    findAll(): Promise<Cat[]>;
    findOne(id: string): any;
    remove(id: string): void;
    update(id: string, createCatDTO: CreateCatDTO): any;
}
