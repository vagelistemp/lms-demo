// Dark mode before the first paint. src/store/themeStore.js keeps the choice in the cookie sphy_theme; this plain
// (non-module) script runs while index.html is still parsing, so a dark page is marked dark before the stylesheet's
// light background or the bundle can show. The store then takes over.
(function () {
  try {
    if (document.cookie.split('; ').indexOf('sphy_theme=dark') !== -1) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.style.colorScheme = 'dark'
    }
  } catch (e) { /* stays light */ }
})()
