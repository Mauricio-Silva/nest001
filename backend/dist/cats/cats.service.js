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
exports.CatsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let CatsService = class CatsService {
    constructor(catsRepository) {
        this.catsRepository = catsRepository;
    }
    create(cat) {
        this.catsRepository.save(cat);
    }
    async findAll() {
        return this.catsRepository.find();
    }
    findOne(id) {
        return this.cats.filter((obj) => obj.id === id);
    }
    remove(id) {
        const cats_remove = this.cats.filter((obj) => obj.id != id);
        this.cats = cats_remove;
    }
    update(id, createCatDTO) {
        this.cats.map((obj) => {
            if (obj.id === id) {
                obj.name = createCatDTO.name;
                obj.age = createCatDTO.age;
            }
        });
        return this.findOne(id);
    }
};
CatsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('CATS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CatsService);
exports.CatsService = CatsService;
//# sourceMappingURL=cats.service.js.map