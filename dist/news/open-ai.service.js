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
exports.OpenAiService = void 0;
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const axios_1 = require("axios");
const news_api_service_1 = require("./news-api.service");
let OpenAiService = exports.OpenAiService = class OpenAiService {
    constructor(newsApiService) {
        this.apiUrl = 'https://api.openai.com/v1/chat/completions';
        this.model = "gpt-3.5-turbo";
        dotenv.config();
        this.apiKey = process.env.OPENAI_API_KEY;
        this.newsApiService = newsApiService;
    }
    async editArticle(article) {
        try {
            const formattedNews = await this.newsApiService.formatNews(article);
            const prompt = "Make the following article as less political as possible, if not, then try to make neutral alternative";
            const messages = [
                { role: 'system', content: prompt },
                { role: 'user', content: formattedNews.content },
            ];
            const response = await axios_1.default.post(this.apiUrl, {
                model: this.model,
                messages,
                temperature: 1
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.apiKey}`
                }
            });
            const editedArticle = response.data.choices[0].message.content;
            return editedArticle;
        }
        catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                console.log('Error response from API:', error.response.data.error);
            }
            console.error('Error occurred while editing the article:', error);
            throw error;
        }
    }
};
exports.OpenAiService = OpenAiService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [news_api_service_1.NewsApiService])
], OpenAiService);
//# sourceMappingURL=open-ai.service.js.map