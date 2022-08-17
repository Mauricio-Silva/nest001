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
exports.DogsController = void 0;
const dogs_dto_1 = require("./dto/dogs.dto");
const dogs_service_1 = require("./dogs.service");
const common_1 = require("@nestjs/common");
let DogsController = class DogsController {
    constructor(dogsService) {
        this.dogsService = dogsService;
    }
    showMessage() {
        return 'The Dog is on the Table';
    }
    findAll() {
        return this.dogsService.findAll();
    }
    findDog(id) {
        return this.dogsService.findOne(id);
    }
    createNewDog(dog) {
        this.dogsService.create(dog);
        return 'A New Dog was Created';
    }
    update(id, dog) {
        return this.dogsService.update(id, dog);
    }
    delete(id) {
        this.dogsService.remove(id);
        return 'The Dog was Removed';
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], DogsController.prototype, "showMessage", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], DogsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "findDog", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dogs_dto_1.CreateDogDTO]),
    __metadata("design:returntype", String)
], DogsController.prototype, "createNewDog", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dogs_dto_1.CreateDogDTO]),
    __metadata("design:returntype", void 0)
], DogsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], DogsController.prototype, "delete", null);
DogsController = __decorate([
    (0, common_1.Controller)('dogs'),
    __metadata("design:paramtypes", [dogs_service_1.DogsService])
], DogsController);
exports.DogsController = DogsController;
//# sourceMappingURL=dogs.controller.js.map