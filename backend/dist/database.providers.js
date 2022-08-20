"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const create_dog_1 = require("./dogs/entity/create.dog");
const create_cat_1 = require("./cats/entity/create.cat");
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
                entities: [create_cat_1.Cat, create_dog_1.Dog],
                synchronize: true,
                logging: true,
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map