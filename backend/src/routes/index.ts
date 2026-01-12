import { Router } from 'express';
import puzzleRoutes from './puzzle.routes';
import leaderboardRoutes from './leaderboard.routes';

const router = Router();

router.use('/puzzle', puzzleRoutes);
router.use('/leaderboard', leaderboardRoutes);

export default router;