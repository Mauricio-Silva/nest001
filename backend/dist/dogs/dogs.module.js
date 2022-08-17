"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogsModule = void 0;
const common_1 = require("@nestjs/common");
const database_module_1 = require("./../database.module");
const dogs_controller_1 = require("./dogs.controller");
const dogs_service_1 = require("./dogs.service");
const dogs_providers_1 = require("./dogs.providers");
let DogsModule = class DogsModule {
};
DogsModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [dogs_controller_1.DogsController],
        providers: [...dogs_providers_1.dogsProviders, dogs_service_1.DogsService],
    })
], DogsModule);
exports.DogsModule = DogsModule;
//# sourceMappingURL=dogs.module.js.map