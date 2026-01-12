import { Router } from 'express';
import { getPuzzle, submitGuess } from '../controllers/puzzle.controller';
import { authOptional } from '../middleware/authOptional';

const router = Router();

router.get('/', authOptional, getPuzzle);
router.post('/guess', authOptional, submitGuess);

export default router;