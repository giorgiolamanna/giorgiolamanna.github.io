/* =========================================================
   Giorgio La Manna — Portfolio
   main.js
   ========================================================= */
(function () {
  'use strict';

  // ---------- Anno corrente in footer ----------
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Header scrolled state ----------
  var header = document.getElementById('siteHeader');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 24) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav ----------
  var toggle = document.getElementById('navToggle');
  var nav = document.querySelector('.nav');
  function closeMenu() {
    nav.classList.remove('is-open');
    if (header) header.classList.remove('is-menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      if (header) header.classList.toggle('is-menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (nav.classList.contains('is-open')) closeMenu();
      });
    });
    // Chiudi se la viewport torna desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 980 && nav.classList.contains('is-open')) closeMenu();
    });
  }

  // ---------- Active nav link ----------
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-list a');
  function setActiveLink() {
    var fromTop = window.scrollY + 120;
    var current = '';
    sections.forEach(function (sec) {
      if (sec.offsetTop <= fromTop && sec.offsetTop + sec.offsetHeight > fromTop) {
        current = sec.id;
      }
    });
    navLinks.forEach(function (a) {
      var href = a.getAttribute('href') || '';
      a.classList.toggle('is-active', href === '#' + current);
    });
  }
  window.addEventListener('scroll', setActiveLink, { passive: true });

  // ---------- Reveal on scroll ----------
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------- Lightbox ----------
  var lightbox = document.getElementById('lightbox');
  var lbImage = document.getElementById('lbImage');
  var lbCaption = document.getElementById('lbCaption');
  var lbClose = document.getElementById('lbClose');

  function openLightbox(src, caption) {
    if (!lightbox) return;
    lbImage.src = src;
    lbImage.alt = caption || '';
    lbCaption.textContent = caption || '';
    lightbox.hidden = false;
    requestAnimationFrame(function () {
      lightbox.classList.add('is-open');
    });
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    setTimeout(function () {
      lightbox.hidden = true;
      lbImage.src = '';
      document.body.style.overflow = '';
    }, 250);
  }
  document.querySelectorAll('.work-zoom').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openLightbox(btn.getAttribute('data-img'), btn.getAttribute('data-title'));
    });
  });
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

})();
