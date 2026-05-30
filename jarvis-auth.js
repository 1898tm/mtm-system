// MTM Auth — passthrough for local and hosted use
// No authentication required for single-user personal system
window.MTM = window.MTM || {};
window.MTM.auth = { authenticated: true, user: 'michael', name: 'Michael T. Moore' };
window.JARVIS_AUTH = window.MTM.auth; // backwards compat
