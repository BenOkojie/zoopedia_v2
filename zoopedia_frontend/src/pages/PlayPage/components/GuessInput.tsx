import { useState } from "react";
import { Button } from "../../../components/ui/Button";

export default function GuessInput({
  onSubmit,
  disabled,
}: {
  onSubmit: (guess: string) => void;
  disabled?: boolean;
}) {
  const [value, setValue] = useState("");

  function submit() {
    const guess = value.trim();
    if (!guess) return;
    onSubmit(guess);
    setValue("");
  }

  return (
    <div className="row gap-12">
      <input
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type your answer..."
        disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === "Enter") submit();
        }}
      />
      <Button onClick={submit} disabled={disabled || !value.trim()}>
        {disabled ? "..." : "Submit"}
      </Button>
    </div>
  );
}
