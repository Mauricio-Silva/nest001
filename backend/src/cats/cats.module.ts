import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
// import { DatabaseModule } from './../database.module';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
// import { catsProviders } from './cats.providers';
import { Cat } from './entity/create.cat';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])], // DatabaseModule
  controllers: [CatsController],
  providers: [CatsService], // [...catsProviders, CatsService]
})
export class CatsModule {}
