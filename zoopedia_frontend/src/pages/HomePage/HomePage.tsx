import { useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import { Button } from "../../components/ui/Button";

export default function HomePage() {
  const nav = useNavigate();

  return (
    <div className="stack gap-24">
      <Hero />
        
      <div className="stack gap-12">
        <Button size="lg" onClick={() => nav("/play")}>
          Play Game
        </Button>
        <Button size="lg" variant="secondary" onClick={() => nav("/login")}>
          Login
        </Button>
      </div>

      <div className="muted center">
        <p>Daily game • New hints each guess • Limited lives</p>
      </div>
    </div>
  );
}
