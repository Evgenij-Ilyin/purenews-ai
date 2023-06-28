import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NewsModule } from './news/news.module';
import { NewsApiService } from './news-api/news-api.service';
import { OpenAiService } from './open-ai/open-ai.service';
import { NewsModule } from './news/news.module';

@Module({
  imports: [NewsModule],
  controllers: [AppController],
  providers: [AppService, NewsApiService, OpenAiService],
})
export class AppModule {}
