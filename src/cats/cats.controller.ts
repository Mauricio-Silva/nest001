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
    return 'The Cat is on the Table';
  }

  @Get('/list')
  findAll(): CreateCatDTO[] {
    return this.catsService.findAll();
  }

  @Get('/findV1/:id')
  getOneV1(@Param() params: any): string {
    return `Finding a Cat with id ${params.id}`;
  }

  @Get('/findV2/:id')
  getOneV2(@Param('id') id: number): string {
    return `Finding a Cat with id ${id}`;
  }

  @Get('/:id')
  findCat(@Param('id') id: number) {
    return this.catsService.findOne(id);
  }

  @Post()
  createNewCat(@Body() cat: CreateCatDTO): void {
    return this.catsService.create(cat);
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() cat: CreateCatDTO): void {
    return this.catsService.Update(id, cat);
  }

  @Delete('/:id')
  delete(@Param('id') id: number): string {
    this.catsService.Remove(id);
    return 'The Cat was removed';
  }
}
