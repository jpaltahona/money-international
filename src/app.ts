import express from 'express';
import router from './routes';

// initializations
const app = express();

app.set('port', process.env.PORT || 4000);

// routes
router(app);

export default app;
