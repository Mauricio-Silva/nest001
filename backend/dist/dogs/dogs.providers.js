"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dogsProviders = void 0;
const create_dog_1 = require("./entity/create.dog");
exports.dogsProviders = [
    {
        provide: 'DOGS_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(create_dog_1.Dog),
        inject: ['NEST001DATASOURCE'],
    },
];
//# sourceMappingURL=dogs.providers.js.map