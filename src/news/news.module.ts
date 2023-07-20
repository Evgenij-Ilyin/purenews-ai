import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsApiService } from 'src/news/news-api.service';
import { OpenAiService } from './open-ai.service';


@Module({
  controllers: [NewsController],
  providers: [
    NewsService,
    NewsApiService,
    OpenAiService,
  ]
})
export class NewsModule {}
