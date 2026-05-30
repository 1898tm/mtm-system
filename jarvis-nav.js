// MTM Navigation — injects bottom nav bar into any MTM page
(function () {
  var style = document.createElement('style');
  style.textContent = [
    '.mtm-bottom-nav{position:fixed;bottom:0;left:0;right:0;z-index:999;',
    'background:rgba(0,0,0,.93);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);',
    'border-top:1px solid rgba(255,255,255,.09);',
    'display:flex;justify-content:space-around;align-items:stretch;',
    'padding:.45rem 0 calc(.45rem + env(safe-area-inset-bottom));}',
    '.mtm-nav-item{display:flex;flex-direction:column;align-items:center;justify-content:center;',
    'gap:.18rem;text-decoration:none;color:rgba(255,255,255,.35);flex:1;',
    'padding:.28rem 0;transition:color .15s;font-family:-apple-system,BlinkMacSystemFont,"SF Pro Display",sans-serif;}',
    '.mtm-nav-item:hover{color:rgba(255,214,10,.9);}',
    '.mtm-nav-item.mtm-active{color:rgba(255,214,10,.95);}',
    '.mtm-nav-icon{font-size:1.18rem;line-height:1;}',
    '.mtm-nav-label{font-size:.56rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;}'
  ].join('');
  document.head.appendChild(style);

  var pages = [
    { icon: '⬡',  label: 'MTM',    href: 'mtm-home.html' },
    { icon: '👔', label: 'Style',   href: 'style.html'    },
    { icon: '🧳', label: 'Travel',  href: 'packing.html'  },
    { icon: '💘', label: 'Dating',  href: 'dating.html'   },
    { icon: '🔐', label: 'Vault',  href: 'vault.html'   },
    { icon: '🌍', label: 'MAVTG',  href: 'https://www.mavtg.com', external: true }
  ];

  var current = window.location.pathname.split('/').pop() || 'mtm-home.html';

  var nav = document.createElement('nav');
  nav.className = 'mtm-bottom-nav';
  nav.setAttribute('role', 'navigation');

  pages.forEach(function (p) {
    var a = document.createElement('a');
    a.className = 'mtm-nav-item' + (current === p.href ? ' mtm-active' : '');
    a.href = p.href;
    if (p.external) a.setAttribute('target', '_blank');
    a.innerHTML = '<span class="mtm-nav-icon">' + p.icon + '</span><span class="mtm-nav-label">' + p.label + '</span>';
    nav.appendChild(a);
  });

  // Add bottom padding to body so content clears the nav
  document.body.style.paddingBottom = 'calc(64px + env(safe-area-inset-bottom))';
  document.body.appendChild(nav);
})();
