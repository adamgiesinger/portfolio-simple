let darkMode = false;

document.querySelector(".darkMode").addEventListener("click", toggleDarkMode);

function toggleDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.body.classList.remove("darkmode");
  } else {
    darkMode = true;
    document.body.classList.add("darkmode");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const mode = getComputedStyle(document.documentElement).getPropertyValue(
    "content"
  );
  if (mode === "dark") {
    document.body.classList.add("darkmode");
    darkMode = true;
  }
});