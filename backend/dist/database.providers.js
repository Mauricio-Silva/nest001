"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const dogs_dto_1 = require("./dogs/dto/dogs.dto");
const cats_dto_1 = require("./cats/dto/cats.dto");
const typeorm_1 = require("typeorm");
exports.databaseProviders = [
    {
        provide: 'NEST001DATASOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'admin',
                database: 'animals',
                entities: [cats_dto_1.CreateCatDTO, dogs_dto_1.CreateDogDTO],
                synchronize: true,
                logging: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map