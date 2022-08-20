import { Dog } from './entity/create.dog';
import { DogsService } from './dogs.service';
export declare class DogsController {
    private dogsService;
    constructor(dogsService: DogsService);
    showMessage(): string;
    findAll(): Promise<Dog[]>;
    findDog(id: string): Promise<Dog>;
    createDog(dog: Dog): string;
    updateDog(id: string, dog: Dog): Promise<Dog>;
    deleteDog(id: string): string;
}
