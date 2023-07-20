import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import axios from "axios";
import { NewsApiService } from './news-api.service';
import { NewsDto } from 'src/news.dto/news.dto';

@Injectable()
export class OpenAiService {
    private readonly newsApiService: NewsApiService;
    private readonly apiKey: string;
    private readonly apiUrl: string = 'https://api.openai.com/v1/chat/completions';
    private readonly model: string = "gpt-3.5-turbo";

    constructor(newsApiService: NewsApiService) {
        dotenv.config();
        this.apiKey = process.env.OPENAI_API_KEY;
        this.newsApiService = newsApiService;
    }
    
    async editArticle(article: NewsDto): Promise<string> {
        try {
          const formattedNews = await this.newsApiService.formatNews(article);
          const prompt = "Make the following article as less political as possible, if not, then try to make neutral alternative";
          const messages = [
            { role: 'system', content: prompt },
            { role: 'user', content: formattedNews.content},
          ] 
    
          const response = await axios.post(
            this.apiUrl,
            {
              model: this.model,
              messages,
              temperature: 1
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.apiKey}`
              }
            }
          );
    
          //const editedArticle = JSON.parse(response.data.choices[0].message.content);
          const editedArticle = response.data.choices[0].message.content;
          return editedArticle;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                console.log('Error response from API:', error.response.data.error);
              }
          console.error('Error occurred while editing the article:', error);
          throw error;
        }
    }
}
