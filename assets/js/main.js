(() => {
  const anchorOffset = 80;
  const scrollToAnchor = (hash, behavior = 'auto') => {
    const id = decodeURIComponent(hash.replace(/^#/, ''));
    const target = id && document.getElementById(id);
    if (!target) return;
    window.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - anchorOffset),
      behavior,
    });
  };
  const restoreAnchorPosition = () => {
    if (window.location.hash) scrollToAnchor(window.location.hash);
  };
  window.addEventListener('load', () => requestAnimationFrame(restoreAnchorPosition), {
    once: true,
  });
  window.addEventListener('hashchange', () =>
    requestAnimationFrame(() => scrollToAnchor(window.location.hash, 'smooth')),
  );

  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const getSavedTheme = () => {
    try {
      return window.localStorage.getItem('theme');
    } catch {
      return null;
    }
  };
  const applyTheme = (theme, save = false) => {
    const dark = theme === 'dark';
    root.dataset.theme = theme;
    themeColor?.setAttribute('content', dark ? '#132027' : '#155e75');
    if (themeToggle) {
      themeToggle.setAttribute('aria-pressed', String(dark));
      themeToggle.setAttribute('aria-label', `Switch to ${dark ? 'light' : 'dark'} mode`);
      themeToggle.querySelector('.theme-toggle-label').textContent = dark
        ? 'Light mode'
        : 'Dark mode';
      themeToggle.querySelector('.fas').className = dark ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (save)
      try {
        window.localStorage.setItem('theme', theme);
      } catch {
        // Continue without persistence when browser storage is unavailable.
      }
  };
  const getPreferredTheme = () => getSavedTheme() || 'light';
  applyTheme(getPreferredTheme());
  themeToggle?.addEventListener('click', () => {
    applyTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true);
  });
  // History restores retain a page's DOM, so re-read the shared preference on return.
  window.addEventListener('pageshow', () => applyTheme(getPreferredTheme()));
  window.addEventListener('storage', (event) => {
    if (event.key === 'theme') applyTheme(getPreferredTheme());
  });

  const toggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.site-sidebar');
  const groups = [...document.querySelectorAll('.nav-group')];
  const desktopSidebar = window.matchMedia('(min-width: 1001px)');
  const isSubpage = document.querySelector('.brand')?.getAttribute('href')?.startsWith('../');
  const navGroupPages = {
    Publications: isSubpage ? 'publications.html' : 'sites/publications.html',
    Profile: isSubpage ? 'profile.html' : 'sites/profile.html',
  };
  const getSidebarCollapsed = () => {
    try {
      return window.sessionStorage.getItem('sidebar-collapsed') === 'true';
    } catch {
      return false;
    }
  };
  const setSidebarCollapsed = (collapsed) => {
    try {
      window.sessionStorage.setItem('sidebar-collapsed', String(collapsed));
    } catch {
      // Continue without persisting the navigation state when storage is unavailable.
    }
  };

  const closeGroups = () =>
    groups.forEach((group) => {
      group.open = false;
    });
  const setToggleState = (expanded) => {
    toggle?.setAttribute('aria-expanded', String(expanded));
    toggle?.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  };
  const openSidebar = () => {
    if (!sidebar || !toggle) return;
    sidebar.classList.add('open');
    setToggleState(true);
  };
  const closeSidebar = () => {
    if (!sidebar || !toggle) return;
    if (desktopSidebar.matches) {
      document.body.classList.add('sidebar-collapsed');
      setSidebarCollapsed(true);
    } else {
      sidebar.classList.remove('open');
    }
    setToggleState(false);
  };
  const syncSidebarMode = () => {
    if (!sidebar || !toggle) return;
    if (desktopSidebar.matches) {
      sidebar.classList.remove('open');
      document.body.classList.toggle('sidebar-collapsed', getSidebarCollapsed());
      setToggleState(!document.body.classList.contains('sidebar-collapsed'));
    } else {
      document.body.classList.remove('sidebar-collapsed');
      setToggleState(sidebar.classList.contains('open'));
    }
  };
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      if (desktopSidebar.matches) {
        const collapsed = document.body.classList.toggle('sidebar-collapsed');
        setSidebarCollapsed(collapsed);
        setToggleState(!collapsed);
      } else {
        sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
      }
    });
    desktopSidebar.addEventListener('change', syncSidebarMode);
    syncSidebarMode();
  }

  groups.forEach((group) => {
    const summary = group.querySelector('summary');
    summary?.addEventListener('click', (event) => {
      if (!group.open) return;
      const href = navGroupPages[summary.textContent.trim()];
      if (!href) return;
      event.preventDefault();
      closeSidebar();
      window.location.assign(href);
    });
    group.addEventListener('toggle', () => {
      if (group.open)
        groups.forEach((other) => {
          if (other !== group) other.open = false;
        });
    });
  });
  document.querySelectorAll('.site-sidebar .site-nav a').forEach((link) =>
    link.addEventListener('click', () => {
      closeGroups();
      closeSidebar();
    }),
  );
  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.nav-group')) closeGroups();
    const sidebarIsOpen = desktopSidebar.matches
      ? !document.body.classList.contains('sidebar-collapsed')
      : sidebar?.classList.contains('open');
    if (
      sidebarIsOpen &&
      !event.target.closest('.site-sidebar') &&
      !event.target.closest('.menu-toggle')
    )
      closeSidebar();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeGroups();
      closeSidebar();
    }
  });

  const reveal = document.querySelector('[data-email-reveal]');
  if (reveal)
    reveal.addEventListener('click', () => {
      const email = ['clemens.wager', 'donau-uni.ac.at'].join('@');
      const output = document.querySelector('.email-output');
      output.innerHTML = `<a href="mailto:${email}">${email}</a>`;
      reveal.hidden = true;
    });
})();
