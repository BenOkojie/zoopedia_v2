import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from './routes/index';
import { errorHandler } from './middleware/errorHandler';
import { rateLimit } from './middleware/rateLimit';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit);

// Routes
app.use('/api', routes);

// Error handling
app.use(errorHandler);

export default app;