import { CatsService } from './cats.service';
import { Cat } from './entity/create.cat';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    showMessage(): string;
    findAll(): Promise<Cat[]>;
    findCat(id: string): Promise<Cat>;
    createCat(cat: Cat): string;
    updateCat(id: string, cat: Cat): Promise<Cat>;
    deleteCat(id: string): string;
}
