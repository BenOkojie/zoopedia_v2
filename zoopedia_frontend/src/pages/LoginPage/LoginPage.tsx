import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { useAuth } from "../../app/providers/AuthProvider";

export default function LoginPage() {
  const nav = useNavigate();
  const { loginMock } = useAuth();
  const [email, setEmail] = useState("");

  function submit() {
    if (!email.trim()) return;
    loginMock(email.trim());
    nav("/play");
  }

  return (
    <div className="stack gap-16">
      <div className="center stack gap-8">
        <h1 className="title">Login</h1>
        <p className="subtitle">Mock login for now. Swap to real auth later.</p>
      </div>

      <Card>
        <div className="stack gap-12">
          <label className="field">
            <span>Email</span>
            <input
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <div className="row gap-12">
            <Button variant="secondary" onClick={() => nav("/")}>
              Back
            </Button>
            <Button onClick={submit}>Continue</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
