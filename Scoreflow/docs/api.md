# API Integration (balldontlie)

Primary API for this project:
- Docs: `https://nba.balldontlie.io/?shell#nba-api`
- Base URL: `https://api.balldontlie.io/v1`

## Authentication

Send API key in request header:

```http
Authorization: YOUR_API_KEY
```

## MVP Endpoints

- `GET /players`
- `GET /games`
- `GET /stats`
- `GET /teams` (optional)

## Local Environment

Create `.env.local`:

```bash
VITE_BALLDONTLIE_API_KEY=your_api_key_here
VITE_BALLDONTLIE_BASE_URL=https://api.balldontlie.io/v1
```

`src/services/nbaApi.js` should read these env vars and provide fallback to mock data when API fails.
