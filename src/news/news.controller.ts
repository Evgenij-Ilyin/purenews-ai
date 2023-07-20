import { Controller, Post, Body, Get } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsDto } from 'src/news.dto/news.dto';

@Controller('news')
export class NewsController {
    constructor(
        private readonly newsService: NewsService,
      ) {}
    
      @Get('search')
      async search(@Body('keywords') keywords: string): Promise<any> {
        const searchResults = await this.newsService.searchByKeywords(keywords);
        return searchResults;
      }

      @Get('pure')
      async depoliticizeNews(@Body('keywords') keywords: string): Promise<string[]> {
        try {
          const searchResults = await this.newsService.searchByKeywords(keywords);
          const editedArticles = await this.newsService.pureArticles(searchResults);
          return editedArticles;

        } catch (error) {
          console.log('Error occured while depoliticizing news:', error);
          throw error;
        }
      }
}
