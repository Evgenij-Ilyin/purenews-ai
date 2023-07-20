import { NewsDto } from 'src/news.dto/news.dto';
import { NewsApiService } from 'src/news/news-api.service';
import { OpenAiService } from 'src/news/open-ai.service';
export declare class NewsService {
    private readonly newsApiService;
    private readonly openAiService;
    constructor(newsApiService: NewsApiService, openAiService: OpenAiService);
    searchByKeywords(keywords: string): Promise<NewsDto[]>;
    pureArticles(articles: NewsDto[]): Promise<string[]>;
    private delay;
}
