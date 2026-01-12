import { Modal } from "../../../components/ui/Modal";
import { Button } from "../../../components/ui/Button";

export default function EndGameModal({
  open,
  status,
  guessesUsed,
  livesLeft,
  canLeaderboard,
}: {
  open: boolean;
  status: "IN_PROGRESS" | "WON" | "LOST";
  guessesUsed: number;
  livesLeft: number;
  canLeaderboard: boolean;
}) {
  const title = status === "WON" ? "You won!" : "Game over";
  const subtitle =
    status === "WON"
      ? `Nice. You finished with ${livesLeft} lives left.`
      : "Come back tomorrow for a new puzzle.";

  return (
    <Modal open={open} title={title}>
      <div className="stack gap-12">
        <p className="subtitle">{subtitle}</p>

        <div className="stack gap-6">
          <div className="row centerBetween">
            <span className="mutedSmall">Guesses used</span>
            <strong>{guessesUsed}</strong>
          </div>
          <div className="row centerBetween">
            <span className="mutedSmall">Lives left</span>
            <strong>{livesLeft}</strong>
          </div>
        </div>

        {!canLeaderboard ? (
          <p className="mutedSmall">
            Sign in to appear on leaderboards and save your streak.
          </p>
        ) : (
          <p className="mutedSmall">You’re eligible for leaderboards.</p>
        )}

        <div className="row gap-12">
          <Button
            variant="secondary"
            onClick={() => navigator.clipboard.writeText("Zoopedia — I played today!")}
          >
            Share
          </Button>
          <Button onClick={() => (window.location.href = "/")}>Done</Button>
        </div>
      </div>
    </Modal>
  );
}
