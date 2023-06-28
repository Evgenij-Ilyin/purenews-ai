import { Injectable } from '@nestjs/common';
import { NewsApiService } from 'src/news-api/news-api.service';
import { OpenAiService } from 'src/open-ai/open-ai.service';

@Injectable()
export class NewsService {
    constructor(
        private readonly openAiService: OpenAiService,
        private readonly newsApiService: NewsApiService,
      ) {}
    
    
}
