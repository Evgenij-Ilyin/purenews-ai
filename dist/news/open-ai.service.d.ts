import { NewsApiService } from './news-api.service';
import { NewsDto } from 'src/news.dto/news.dto';
export declare class OpenAiService {
    private readonly newsApiService;
    private readonly apiKey;
    private readonly apiUrl;
    private readonly model;
    constructor(newsApiService: NewsApiService);
    editArticle(article: NewsDto): Promise<string>;
}
