import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ArticlesModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
