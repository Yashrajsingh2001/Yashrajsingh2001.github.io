(() => {
  const THEME_KEY = "portfolio-theme";
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const store = {
    get: (k) => {
      try {
        return localStorage.getItem(k);
      } catch {
        return null;
      }
    },
    set: (k, v) => {
      try {
        localStorage.setItem(k, v);
      } catch {
        /* ignore */
      }
    },
  };

  /* ---------- theme ---------- */
  const MOON =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
  const SUN =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
  function applyTheme(theme) {
    root.classList.toggle("dark", theme === "dark");
    $$("[data-theme-toggle]").forEach((btn) => {
      btn.setAttribute(
        "aria-label",
        `Switch to ${theme === "dark" ? "light" : "dark"} mode`
      );
      btn.innerHTML = theme === "dark" ? SUN : MOON;
    });
  }
  const savedTheme = store.get(THEME_KEY);
  applyTheme(savedTheme === "dark" ? "dark" : "light");
  $$("[data-theme-toggle]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const next = root.classList.contains("dark") ? "light" : "dark";
      store.set(THEME_KEY, next);
      applyTheme(next);
    })
  );

  /* ---------- mobile menu ---------- */
  const menuBtn = $("[data-menu-toggle]");
  const menu = $("[data-menu]");
  const OPEN_ICON =
    '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>';
  const CLOSED_ICON = menuBtn ? menuBtn.innerHTML : "";
  function setMenu(open) {
    if (!menuBtn || !menu) return;
    menu.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.innerHTML = open ? OPEN_ICON : CLOSED_ICON;
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", () => setMenu(menu.hidden));
    $$("a", menu).forEach((a) =>
      a.addEventListener("click", () => setMenu(false))
    );
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) setMenu(false);
    });
  }

  /* ---------- reveal on scroll ---------- */
  const reveals = $$("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- parallax cover ---------- */
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const parallax = $("[data-parallax]");
  if (parallax && !reduce) {
    const host = parallax.closest("section");
    const update = () => {
      const r = host.getBoundingClientRect();
      const progress =
        (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      parallax.style.transform = `translate3d(0, ${(-progress * 80).toFixed(1)}px, 0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  }

  /* ---------- work row hover preview ---------- */
  const preview = $("[data-work-preview]");
  if (
    preview &&
    window.matchMedia("(hover: hover) and (min-width: 1024px)").matches
  ) {
    const img = $("img", preview);
    let x = 0,
      y = 0,
      cx = 0,
      cy = 0,
      raf = 0;
    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      preview.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    $$("[data-preview]").forEach((row) => {
      row.addEventListener("mouseenter", (e) => {
        img.src = row.dataset.preview;
        img.alt = "";
        x = cx = e.clientX + 24;
        y = cy = e.clientY - 200;
        preview.style.opacity = "1";
        if (!raf) raf = requestAnimationFrame(tick);
      });
      row.addEventListener("mousemove", (e) => {
        x = e.clientX + 24;
        y = e.clientY - 200;
      });
      row.addEventListener("mouseleave", () => {
        preview.style.opacity = "0";
        cancelAnimationFrame(raf);
        raf = 0;
      });
    });
  }

  /* ---------- work filters ---------- */
  const filters = $$("[data-filter]");
  if (filters.length) {
    filters.forEach((btn) =>
      btn.addEventListener("click", () => {
        const f = btn.dataset.filter;
        filters.forEach((b) => {
          const on = b === btn;
          b.setAttribute("aria-pressed", String(on));
          b.classList.toggle("btn-clay", on);
          b.classList.toggle("border", !on);
          b.classList.toggle("border-border", !on);
          b.classList.toggle("text-foreground-muted", !on);
        });
        $$("[data-card]").forEach((card) => {
          card.hidden = !(f === "all" || card.dataset.category === f);
        });
      })
    );
  }

  /* ---------- contact form -> Gmail compose ---------- */
  const form = $("[data-contact-form]");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const body = `${d.get("message")}\n\n${d.get("name")}\n${d.get("email")}`;
      const url =
        "https://mail.google.com/mail/?view=cm&fs=1&to=yashrajcu@gmail.com" +
        "&su=" +
        encodeURIComponent(`Portfolio message from ${d.get("name")}`) +
        "&body=" +
        encodeURIComponent(body);
      window.open(url, "_blank", "noopener");
      const st = $("[data-form-status]");
      st.textContent = "Gmail opened in a new tab. Press send there to finish.";
      st.hidden = false;
    });
  }
})();
