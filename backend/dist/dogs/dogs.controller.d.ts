import { CreateDogDTO } from './dto/dogs.dto';
import { DogsService } from './dogs.service';
export declare class DogsController {
    private dogsService;
    constructor(dogsService: DogsService);
    showMessage(): string;
    findAll(): CreateDogDTO[];
    findDog(id: string): CreateDogDTO[];
    createNewDog(dog: CreateDogDTO): string;
    update(id: string, dog: CreateDogDTO): CreateDogDTO[];
    delete(id: string): string;
}
