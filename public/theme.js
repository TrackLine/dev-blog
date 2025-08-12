(function() {
  const KEY = 'theme';
  const root = document.documentElement;
  function apply(theme) {
    if (theme === 'light') root.setAttribute('data-theme', 'light');
    else root.removeAttribute('data-theme');
  }
  const saved = localStorage.getItem(KEY);
  if (saved) apply(saved);
  function set(theme) { localStorage.setItem(KEY, theme); apply(theme); }
  function current() { return root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'; }

  // Attach to slider
  window.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('theme-toggle');
    if (!checkbox) return;
    checkbox.checked = current() === 'light';
    checkbox.addEventListener('change', () => set(checkbox.checked ? 'light' : 'dark'));
  });
})();


