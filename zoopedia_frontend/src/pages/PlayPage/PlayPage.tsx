import { useMemo, useState } from "react";
import { Card } from "../../components/ui/Card";
import { Skelenton as Skeleton } from "../../components/ui/Skelenton";
import { usePuzzle, useSubmitGuess } from "../../hooks/usePuzzle";
import Lives from "./components/Lives";
import HintList from "./components/HintList";
import GuessInput from "./components/GuessInput";
import EndGameModal from "./components/EndGameModal";
import { useAuth } from "../../app/providers/AuthProvider";

export default function PlayPage() {
  const { isAuthenticated } = useAuth();

  const puzzleQuery = usePuzzle();
  const submitGuess = useSubmitGuess();

  const [timerStart] = useState(() => Date.now());
  const elapsed = useMemo(() => {
    const ms = Date.now() - timerStart;
    const s = Math.floor(ms / 1000);
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${m}:${String(r).padStart(2, "0")}`;
  }, [timerStart, puzzleQuery.dataUpdatedAt]); // refresh-ish

  const puzzle = puzzleQuery.data;

  const isLoading = puzzleQuery.isLoading;
  const isSubmitting = submitGuess.isPending;

  const status = puzzle?.status ?? "IN_PROGRESS";
  const showEndModal = status === "WON" || status === "LOST";

  return (
    <div className="stack gap-16">
      {/* Header row */}
      <div className="gameHeader">
        <div className="brandMini">Zoopedia</div>
        <div className="profilePill" title={isAuthenticated ? "Account" : "Guest"}>
          <span className="profileDot" />
          <span className="mutedSmall">{isAuthenticated ? "Signed in" : "Guest"}</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="row centerBetween">
        <Lives value={puzzle?.lives_left ?? 0} />
        <div className="mutedSmall">⏱ {elapsed}</div>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="stack gap-16">
          <Card>
            <Skeleton lines={2} />
          </Card>
          <Card>
            <Skeleton lines={3} />
          </Card>
          <Card>
            <Skeleton lines={1} />
          </Card>
        </div>
      ) : puzzle ? (
        <div className="stack gap-16">
          <Card title="💡 Hints">
            <HintList hints={puzzle.hints_unlocked} />
          </Card>

          <Card title="🦁 Your Guesses">
            <div className="stack gap-8">
              {puzzle.guesses.length === 0 ? (
                <p className="muted">No guesses yet.</p>
              ) : (
                puzzle.guesses
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((g, idx) => (
                    <div key={`${g}-${idx}`} className="guessRow">
                      <span className="guessText">{g}</span>
                      <span className="mutedSmall">Guess #{puzzle.guesses.length - idx}</span>
                    </div>
                  ))
              )}
            </div>
          </Card>

          <Card title="Your Guess">
            <GuessInput
              disabled={isSubmitting || showEndModal}
              onSubmit={(guess) => submitGuess.mutate({ guess })}
            />
            {submitGuess.isError ? (
              <p className="errorText">Couldn’t submit guess. Try again.</p>
            ) : null}
          </Card>

          <EndGameModal
            open={showEndModal}
            status={puzzle.status}
            guessesUsed={puzzle.guesses.length}
            livesLeft={puzzle.lives_left}
            canLeaderboard={isAuthenticated}
          />
        </div>
      ) : (
        <Card>
          <p className="errorText">Failed to load puzzle.</p>
        </Card>
      )}
    </div>
  );
}
