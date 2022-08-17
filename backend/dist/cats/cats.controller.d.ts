import { CatsService } from './cats.service';
import { CreateCatDTO } from './dto/cats.dto';
import { CreateCat } from './entity/create.cat';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    showMessage(): string;
    findAll(): Promise<CreateCat[]>;
    findCat(id: string): any;
    createNewCat(cat: CreateCatDTO): string;
    updateCat(id: string, cat: CreateCatDTO): any;
    deleteCat(id: string): string;
}
