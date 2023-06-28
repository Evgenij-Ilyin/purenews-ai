import { Controller, Post, Body } from '@nestjs/common';
import { NewsApiService } from 'src/news-api/news-api.service';
import { OpenAiService } from 'src/open-ai/open-ai.service';

@Controller('news')
export class NewsController {
    constructor(
        private readonly openAiService: OpenAiService,
        private readonly newsApiService: NewsApiService,
      ) {}
    
      @Post('search')
      async search(@Body('prompt') prompt: string): Promise<any> {
        // 
      }
}
