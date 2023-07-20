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
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const news_api_service_1 = require("./news-api.service");
const open_ai_service_1 = require("./open-ai.service");
let NewsService = exports.NewsService = class NewsService {
    constructor(newsApiService, openAiService) {
        this.newsApiService = newsApiService;
        this.openAiService = openAiService;
    }
    async searchByKeywords(keywords) {
        const newsSearchResponse = await this.newsApiService.searchNews(keywords);
        return newsSearchResponse;
    }
    async pureArticles(articles) {
        try {
            const editedArticles = await Promise.all(articles.map(async (article) => {
                const editedArticle = await this.openAiService.editArticle(article);
                await this.delay(2000);
                return editedArticle;
            }));
            return editedArticles;
        }
        catch (error) {
            console.log('Error occurred while purifying articles:', error);
            throw error;
        }
    }
    delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
};
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [news_api_service_1.NewsApiService,
        open_ai_service_1.OpenAiService])
], NewsService);
//# sourceMappingURL=news.service.js.map