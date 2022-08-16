// cSpell:ignore typeorm
import { CreateCatDTO } from './cats/dto/cats.dto';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'test',
        entities: [CreateCatDTO],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
