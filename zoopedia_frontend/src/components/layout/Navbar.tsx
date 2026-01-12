import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export default function Navbar() {
  const loc = useLocation();
  const nav = useNavigate();

  // Keep it minimal: show Back on /login and /play
  const showBack = loc.pathname !== "/";

  return (
    <div className="topbar">
      <div className="topbarInner">
        {showBack ? (
          <Button variant="ghost" onClick={() => nav(-1)}>
            ← Back
          </Button>
        ) : (
          <div />
        )}
        <div className="topbarTitle"> </div>
        <div />
      </div>
    </div>
  );
}
