(function(){
  if (!window.__OLC_AUTOMATED_TEST || window.__OLC_AUTOMATED_TEST_PAGE !== 'accomodations') return;
  window.addEventListener('DOMContentLoaded', function () {
    const log = (...args) => console.log('[OLC accomodations Test]', ...args);
    try {
      // Intercept navigation
      if (window.location && typeof window.location.assign === 'function') {
        window.__olc_real_assign = window.location.assign.bind(window.location);
        window.location.assign = function (url) { window.__OLC_LAST_NAV = url; log('navigation prevented to', url); };
      }

      // Find booking links (anchor.cta-button)
      const links = Array.from(document.querySelectorAll('a.cta-button'));
      if (!links.length) { log('No booking links found'); return; }
      const link = links.find(a => a.getAttribute('onclick') && a.getAttribute('onclick').includes('setBookingUnit')) || links[0];
      log('Clicking booking link:', link.href);
      link.click();

      setTimeout(() => {
        const raw = sessionStorage.getItem('bookingData');
        if (raw) log('bookingData set:', raw);
        else log('bookingData not set');
        if (window.__olc_real_assign) window.location.assign = window.__olc_real_assign;
      }, 200);
    } catch (err) { log('Automated test error:', err); }
  });
})();
