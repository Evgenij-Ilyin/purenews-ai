PureNewsAI description:

Project is built on nestJS and uses two APis: NewsAPI and openai API

The main idea was to create an app, which could depolitize recent news the user is looking for.
Providing the keywords to the Get request's body, this app returns a list of news (number of articles can be changed) which are then sent to openai API in order to edit (ex. description/content) the article. Prompt could be changed as well.
Unfortunately, because of the limitation of NewsAPI, it is impossible to read the full content of an article (aprox 200chars).


Testing for intersted ones:
You should create accounts in NewsAPI and openai API in order to get your api keys. Then you create in a root of an app a file called .env with the following structure:

OPENAI_API_KEY=your_api_key  // here you paste your api keys
NEWSAPI_API_KEY=your_api_key //

In order to start this app: you send `npm run start` in terminal, then you should open postman and send GET request to the following URL: http://localhost:3000/news/pure
With a body (ex. in JSON) which contains only keywords field:
{
    "keywords": "whatever you want to find"
}

