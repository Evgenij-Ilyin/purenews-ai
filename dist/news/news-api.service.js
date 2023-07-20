"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsApiService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const dotenv = require("dotenv");
let NewsApiService = exports.NewsApiService = class NewsApiService {
    constructor() {
        dotenv.config();
        this.apiKey = process.env.NEWSAPI_API_KEY;
    }
    async searchNews(keywords) {
        try {
            const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(keywords)}&pageSize=1&page=1&apiKey=${this.apiKey}`;
            const response = await axios_1.default.get(url);
            return response.data.articles;
        }
        catch (error) {
            console.log('Error occured while searching news', error);
            throw error;
        }
    }
    async formatNews(news) {
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
};
exports.NewsApiService = NewsApiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], NewsApiService);
//# sourceMappingURL=news-api.service.js.map