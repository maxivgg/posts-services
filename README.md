# posts-services

This repository contains an application for the posts microservices.

## How To Run

1. You can follow the [Getting Started with Atlas](https://docs.atlas.mongodb.com/getting-started/) guide, to learn how to create a free Atlas account, create your first cluster and get your Connection String to the database.
   Then, set the Atlas URI connection parameter in `.env` to your Connection String:

```
DB_URL=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
```

2. Start the Express server:

```
npm install
npm run dev
```

## Endpoints

GET /api/post
