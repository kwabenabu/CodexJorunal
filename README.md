# Codex Journal

## Setup

1. Copy `.env.example` to `.env` in the project root and fill in your MongoDB connection string.
2. Install dependencies:
   ```bash
   npm run install:all
   ```
3. Start the development servers:
   ```bash
   npm start
   ```

The backend will connect to the URI defined in `MONGODB_URI`. If that variable is not set, it will fall back to a local MongoDB instance at `mongodb://localhost:27017/codex-journal`.
