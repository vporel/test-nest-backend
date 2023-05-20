import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { Article } from './article.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Article])],
  controllers: [ArticlesController]
})
export class ArticlesModule {}
