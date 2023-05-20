import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Controller('articles')
export class ArticlesController {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>
  ) {}

  @Post()
  create(@Body() article: Article) {
    return this.articlesRepository.save(article);
  }

  @Get()
  findAll() {
    return this.articlesRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.articlesRepository.findOneBy({id})
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() article: Article) {
    return this.articlesRepository.update({id}, article)
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.articlesRepository.delete({id})
  }
}
