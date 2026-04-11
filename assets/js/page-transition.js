document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const isAnchor = href.startsWith("#");
    const isMailto = href.startsWith("mailto:");
    const isTel = href.startsWith("tel:");
    const isJavascript = href.startsWith("javascript:");
    const isDownload = link.hasAttribute("download");

    const absoluteUrl = new URL(link.href, window.location.href);
    const isExternal = absoluteUrl.origin !== window.location.origin;
    const opensNewTab = link.getAttribute("target") === "_blank";

    if (
      isAnchor ||
      isMailto ||
      isTel ||
      isJavascript ||
      isDownload ||
      isExternal ||
      opensNewTab
    ) {
      return;
    }

    link.addEventListener("click", e => {
      e.preventDefault();

      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = absoluteUrl.href;
      }, 300);
    });
  });
});

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains("dark-mode");

  if (isDark) {
    root.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  } else {
    root.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  }
}

window.addEventListener("pageshow", () => {
  document.body.classList.remove("fade-out");
  document.body.classList.add("fade-in");
});
