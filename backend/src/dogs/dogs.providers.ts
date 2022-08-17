import { CreateDog } from './entity/create.dog';
import { DataSource } from 'typeorm';

export const dogsProviders = [
  {
    provide: 'DOGS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(CreateDog),
    inject: ['NEST001DATASOURCE'],
  },
];
