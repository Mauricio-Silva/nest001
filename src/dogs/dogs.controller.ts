import { CreateDogDTO } from './dto/dogs.dto';
import { DogsService } from './dogs.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  showMessage(): string {
    return 'The Dog is on the Table';
  }

  @Get('/list')
  findAll(): CreateDogDTO[] {
    return this.dogsService.findAll();
  }

  @Get('/findV1/:id')
  getOneV1(@Param() params: any): string {
    return `Finding a Dog with id  ${params.id}`;
  }

  @Get('/findV2/:id')
  getOneV2(@Param('id') id: number): string {
    return `Finding a Dog with id ${id}`;
  }

  @Post()
  create(@Body() dog: CreateDogDTO): string {
    return `Creating a new Dog with ${dog.age} year old named ${dog.name}`;
  }

  @Post('/new')
  createNewDog(@Body() dog: CreateDogDTO): void {
    return this.dogsService.create(dog);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() dog: CreateDogDTO): string {
    return `Updating a Dog of id ${id} with a new name (${dog.name}) and age (${dog.age})`;
  }

  @Delete('/:id')
  delete(@Param('id') id: number): string {
    return `Deleting a Dog with id ${id}`;
  }
}
