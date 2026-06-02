/* AmpIQ — shared behavior. Kept small and dependency-free. */
(function () {
  "use strict";

  /* Dynamic copyright year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* Email links assembled from parts so no literal address sits in the HTML.
     This dodges Cloudflare Email Address Obfuscation rewriting it to
     "[email protected]". Markup carries data-user and data-domain only. */
  document.querySelectorAll("[data-user][data-domain]").forEach(function (el) {
    var addr = el.getAttribute("data-user") + "@" + el.getAttribute("data-domain");
    el.setAttribute("href", "mailto:" + addr);
    if (!el.dataset.keepText) {
      el.textContent = addr;
    }
  });

  /* Nav glass-on-scroll */
  var nav = document.querySelector(".nav");
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Mobile fullscreen menu */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("open"));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* Scroll reveal. Position-based rather than IntersectionObserver so it is
     immune to fast scrolling and anchor jumps (which can skip observer
     callbacks and leave sections permanently hidden). Reveals anything in or
     above the viewport, on load and on scroll. */
  var reveals = [].slice.call(document.querySelectorAll(".reveal"));
  if (reveals.length) {
    var ticking = false;
    var revealVisible = function () {
      ticking = false;
      var line = window.innerHeight * 0.88;
      for (var i = reveals.length - 1; i >= 0; i--) {
        var el = reveals[i];
        if (el.getBoundingClientRect().top < line) {
          el.classList.add("visible");
          reveals.splice(i, 1);
        }
      }
    };
    var onScroll = function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(revealVisible);
      }
    };
    revealVisible();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("load", revealVisible);
  }
})();
