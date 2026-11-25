import { useState } from "react";
import { getTheme, toggleTheme, type Theme } from "../../lib/theme";

export function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme>(getTheme);
  let next: Theme;

  if (theme === "dark") {
    next = "light";
  } else {
    next = "dark";
  }

  return (
    <button
      type="button"
      className="btn-outline"
      onClick={() => setThemeState(toggleTheme())}
    >
      Switch to {next} mode
    </button>
  );
}
