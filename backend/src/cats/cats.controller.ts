import { CatsService } from './cats.service';
import { Cat } from './entity/create.cat';
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
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get('/:id')
  findCat(@Param('id') id: string): Promise<Cat> {
    return this.catsService.findOne(id);
  }

  @Post()
  createCat(@Body() cat: Cat): string {
    this.catsService.create(cat);
    return 'A New Cat was Created';
  }

  @Put('/:id')
  updateCat(@Param('id') id: string, @Body() cat: Cat): Promise<Cat> {
    return this.catsService.update(id, cat);
  }

  @Delete('/:id')
  deleteCat(@Param('id') id: string): string {
    this.catsService.remove(id);
    return 'The Cat was Removed';
  }
}
