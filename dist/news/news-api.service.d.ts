import { NewsDto } from 'src/news.dto/news.dto';
export declare class NewsApiService {
    private readonly apiKey;
    constructor();
    searchNews(keywords: string): Promise<NewsDto[]>;
    formatNews(news: NewsDto): Promise<NewsDto>;
}
