import { CatsService } from './cats.service';
import { CreateCatDTO } from './dto/cats.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  showMessage(): string {
    return 'Listening to a Cat';
  }

  @Get('/list')
  findAll(): CreateCatDTO[] {
    return this.catsService.findAll();
  }

  @Get('findV1/:id')
  getOneV1(@Param() params: any): string {
    return `Finding a Cat with id ${params.id}`;
  }

  @Get('findV2/:id')
  getOneV2(@Param('id') id: number): string {
    return `Finding a Cat with id ${id}`;
  }

  @Post()
  create(@Body() cat: CreateCatDTO): string {
    return `Creating a new Cat with ${cat.age} year old named ${cat.name}`;
  }

  @Post('/new')
  createNewCat(@Body() cat: CreateCatDTO): void {
    return this.catsService.create(cat);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cat: CreateCatDTO): string {
    return `Updating a Cat with id ${id} with a new name (${cat.name}) and age (${cat.age})`;
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return `Deleting a Cat with id ${id}`;
  }
}
