const menuButton = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-nav');
const openLabel = menuButton.getAttribute('aria-label');

function setMenu(open, restoreFocus = false) {
  menu.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? menuButton.dataset.menuClose : openLabel);
  menuButton.title = menuButton.getAttribute('aria-label');
  menuButton.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  window.lucide?.createIcons({ attrs: { 'aria-hidden': 'true' } });
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => setMenu(menu.hidden));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !menu.hidden) setMenu(false, true);
});
document.addEventListener('click', event => {
  // Lucide replaces the clicked icon; its original event path still identifies the button.
  const path = event.composedPath();
  if (!menu.hidden && !path.includes(menu) && !path.includes(menuButton)) setMenu(false);
});
menu.addEventListener('click', event => {
  if (event.target.closest('a')) setMenu(false);
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) setMenu(false);
});
document.querySelector('#language').addEventListener('change', event => {
  const link = [...document.querySelectorAll('[data-language]')].find(item => item.dataset.language === event.target.value);
  if (link) location.assign(link.href);
});
try { localStorage.setItem('onchainfinity-atelier-language', document.documentElement.lang); } catch { /* Reading does not require storage. */ }
setMenu(false);
