const storageKey = "theme-preference"

const theme = {
  value: getColorPreference(),
}

export function onToggle() {
  theme.value = theme.value === "light" ? "dark" : "light"
  setPreference()
}

function getColorPreference() {
  if (typeof window !== "undefined") {
    let val = localStorage.getItem(storageKey)
    if (!val) {
      val = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    }
    return val
  }
  return "light"
}

function setPreference() {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

function reflectPreference() {
  document.firstElementChild.setAttribute("data-theme", theme.value)
  document
    .querySelector("#theme-switch")
    ?.setAttribute("aria-label", theme.value)
}

if (typeof window !== "undefined") {
  reflectPreference()

  window.onload = () => {
    reflectPreference()
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches: isDark }) => {
      theme.value = isDark ? "dark" : "light"
      setPreference()
    })
}
