import { CreateDogDTO } from './dogs/dto/dogs.dto';
import { CreateCatDTO } from './cats/dto/cats.dto';
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
        entities: [CreateCatDTO, CreateDogDTO],
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
