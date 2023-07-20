import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';
import { NewsDto } from 'src/news.dto/news.dto';

@Injectable()
export class NewsApiService {
    private readonly apiKey: string;

    constructor() {
        dotenv.config();

        this.apiKey = process.env.NEWSAPI_API_KEY;
    }

    async searchNews( keywords: string) : Promise<NewsDto[]> {
        try {
            const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&pageSize=1&page=1&apiKey=${this.apiKey}`;
            const response = await axios.get(url);
            return response.data.articles;
        }

        catch (error) {
            console.log('Error occured while searching news',error);
            throw error;
        }
    }

    async formatNews(news: NewsDto): Promise<NewsDto> {
        const formattedNews = {
            source: news.source,
            author: news.author,
            title: news.title,
            description: news.description,
            url: news.url,
            urlToImage: news.urlToImage,
            publishedAt: news.publishedAt,
            content: news.content
        };
        return formattedNews;
    }
}
