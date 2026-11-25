export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function getTheme(): Theme {
  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  } else {
    return "light";
  }
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage can be blocked (private mode); the theme still applies for this visit
  }
}

export function toggleTheme(): Theme {
  const theme = getTheme();
  let next: Theme;
  if (theme === "dark") {
    next = "light";
  } else {
    next = "dark";
  }
  setTheme(next);
  return next;
}
