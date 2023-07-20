import { NewsService } from './news.service';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    search(keywords: string): Promise<any>;
    depoliticizeNews(keywords: string): Promise<string[]>;
}
