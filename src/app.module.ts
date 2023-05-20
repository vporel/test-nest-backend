import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ArticlesModule } from './articles/articles.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ArticlesModule, DatabaseModule],
  controllers: [AppController]
})
export class AppModule {}
