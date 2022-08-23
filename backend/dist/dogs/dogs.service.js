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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let DogsService = class DogsService {
    constructor(dogsRepository) {
        this.dogsRepository = dogsRepository;
    }
    create(dog) {
        this.dogsRepository.save(dog);
    }
    async findAll() {
        return this.dogsRepository.find();
    }
    async findOne(dogId) {
        return this.dogsRepository.findOne({
            where: {
                id: dogId,
            },
        });
    }
    remove(dogId) {
        this.dogsRepository.delete({ id: dogId });
    }
    async update(dogId, dog) {
        this.dogsRepository.update({
            id: dogId,
        }, {
            name: dog.name,
            age: dog.age,
        });
        return this.findOne(dogId);
    }
};
DogsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DOGS_REPOSITORY')),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_1.Repository !== "undefined" && typeorm_1.Repository) === "function" ? _a : Object])
], DogsService);
exports.DogsService = DogsService;
//# sourceMappingURL=dogs.service.js.map