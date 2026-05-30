// MM System — PIN Authentication
// Runs on every page load. Redirects to lock screen if not authenticated.
(function () {
  var AUTH_KEY = 'mtm_authed';
  var AUTH_VAL = 'mm2026ok';
  var path = window.location.pathname;

  // Never lock the lock page itself
  if (path.indexOf('lock') !== -1) return;

  // Authenticated — set globals and continue
  if (sessionStorage.getItem(AUTH_KEY) === AUTH_VAL) {
    window.MTM = window.MTM || {};
    window.MTM.auth = { authenticated: true, user: 'MM' };
    window.JARVIS_AUTH = window.MTM.auth;
    return;
  }

  // Not authenticated — redirect to lock screen
  var dest = encodeURIComponent(path + window.location.search);
  window.location.replace('/lock.html?r=' + dest);
})();
