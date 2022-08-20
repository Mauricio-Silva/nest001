import { Cat } from './entity/create.cat';
import { Repository } from 'typeorm';
export declare class CatsService {
    private catsRepository;
    constructor(catsRepository: Repository<Cat>);
    create(cat: Cat): void;
    findAll(): Promise<Cat[]>;
    findOne(catId: string): Promise<Cat>;
    remove(catId: string): void;
    update(catId: string, cat: Cat): Promise<Cat>;
}
