import { Injectable } from '@nestjs/common';
import { NewsDto } from 'src/news.dto/news.dto';
import { NewsApiService } from 'src/news/news-api.service';
import { OpenAiService } from 'src/news/open-ai.service';


@Injectable()
export class NewsService {
    constructor( 
      private readonly newsApiService: NewsApiService,
      private readonly openAiService: OpenAiService,
    ) {}
    
  async searchByKeywords(keywords: string): Promise<NewsDto[]> {
    const newsSearchResponse = await this.newsApiService.searchNews(keywords);
    return newsSearchResponse;
  }

  async pureArticles(articles: NewsDto[]): Promise<string[]> {
    try {
      const editedArticles = await Promise.all(
        articles.map(async (article) => {
          const editedArticle = await this.openAiService.editArticle(article);
          await this.delay(2000); // Introduce a delay between requests
          return editedArticle;
        })
      );
  
      return editedArticles;
    } catch (error) {
      console.log('Error occurred while purifying articles:', error);
      throw error;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

}
