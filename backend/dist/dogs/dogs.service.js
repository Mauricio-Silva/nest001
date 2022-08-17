"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let DogsService = class DogsService {
    constructor(dogsRepository) {
        this.dogsRepository = dogsRepository;
        this.dogs = [];
    }
    create(dog) {
        this.dogs.push(dog);
    }
    findAll() {
        return this.dogs;
    }
    findOne(id) {
        return this.dogs.filter((obj) => obj.id === id);
    }
    remove(id) {
        const dogs_remove = this.dogs.filter((obj) => obj.id !== id);
        this.dogs = dogs_remove;
    }
    update(id, createDogDTO) {
        this.dogs.map((obj) => {
            if (obj.id === id) {
                obj.name = createDogDTO.name;
                obj.age = createDogDTO.age;
            }
        });
        return this.findOne(id);
    }
};
DogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DOGS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DogsService);
exports.DogsService = DogsService;
//# sourceMappingURL=dogs.service.js.map