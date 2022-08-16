import { CreateDogDTO } from './dogs/dto/dogs.dto';
import { CreateCatDTO } from './cats/dto/cats.dto';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'NEST001_DATABASE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'nest001-mysql',
        port: 3306,
        username: 'root',
        password: 'admin',
        database: 'nest001database',
        entities: [CreateCatDTO, CreateDogDTO],
        synchronize: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
