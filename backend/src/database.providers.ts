import { Dog } from './dogs/entity/create.dog';
import { Cat } from './cats/entity/create.cat';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'NEST001DATASOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'animals',
        entities: [Cat, Dog],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
