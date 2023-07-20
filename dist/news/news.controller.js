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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsController = void 0;
const common_1 = require("@nestjs/common");
const news_service_1 = require("./news.service");
let NewsController = exports.NewsController = class NewsController {
    constructor(newsService) {
        this.newsService = newsService;
    }
    async search(keywords) {
        const searchResults = await this.newsService.searchByKeywords(keywords);
        return searchResults;
    }
    async depoliticizeNews(keywords) {
        try {
            const searchResults = await this.newsService.searchByKeywords(keywords);
            const editedArticles = await this.newsService.pureArticles(searchResults);
            return editedArticles;
        }
        catch (error) {
            console.log('Error occured while depoliticizing news:', error);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Body)('keywords')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)('pure'),
    __param(0, (0, common_1.Body)('keywords')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NewsController.prototype, "depoliticizeNews", null);
exports.NewsController = NewsController = __decorate([
    (0, common_1.Controller)('news'),
    __metadata("design:paramtypes", [news_service_1.NewsService])
], NewsController);
//# sourceMappingURL=news.controller.js.map