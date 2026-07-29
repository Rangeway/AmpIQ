/* AmpIQ, shared, dependency-free behavior. */
(function () {
  "use strict";

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll("[data-user][data-domain]").forEach(function (el) {
    var address = el.getAttribute("data-user") + "@" + el.getAttribute("data-domain");
    el.setAttribute("href", "mailto:" + address);
    if (!el.dataset.keepText) el.textContent = address;
  });

  var header = document.querySelector("[data-site-header]");
  if (header) {
    var isScrolled = null;
    var ticking = false;
    var updateHeader = function () {
      ticking = false;
      var next = window.scrollY > 24;
      if (next !== isScrolled) {
        header.classList.toggle("site-header--scrolled", next);
        isScrolled = next;
      }
    };
    updateHeader();
    window.addEventListener("scroll", function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateHeader);
      }
    }, { passive: true });
  }

  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-mobile-menu]");
  if (toggle && menu) {
    var setMenu = function (open) {
      toggle.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", function () { setMenu(!menu.classList.contains("open")); });
    menu.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", function () { setMenu(false); }); });
    window.addEventListener("keydown", function (event) { if (event.key === "Escape") setMenu(false); });
  }
})();
