import { Cat } from './entity/create.cat';
import { DataSource } from 'typeorm';
export declare const catsProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<Cat>;
    inject: string[];
}[];
