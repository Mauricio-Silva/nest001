import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
// import { DatabaseModule } from './../database.module';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
// import { dogsProviders } from './dogs.providers';
import { Dog } from './entity/create.dog';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])], // DatabaseModule
  controllers: [DogsController],
  providers: [DogsService], // [...dogsProviders, DogsService]
})
export class DogsModule {}
