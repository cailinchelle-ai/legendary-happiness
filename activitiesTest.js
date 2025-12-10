(function(){
  if (!window.__OLC_AUTOMATED_TEST || window.__OLC_AUTOMATED_TEST_PAGE !== 'activities') return;
  window.addEventListener('DOMContentLoaded', function () {
    const log = (...args) => console.log('[OLC activities Test]', ...args);
    try {
      // Intercept navigation to avoid leaving the page
      if (window.location && typeof window.location.assign === 'function') {
        window.__olc_real_assign = window.location.assign.bind(window.location);
        window.location.assign = function (url) { window.__OLC_LAST_NAV = url; log('navigation prevented to', url); };
      }

      // Find booking buttons (our page uses .cta-button on activity cards)
      const buttons = Array.from(document.querySelectorAll('button.cta-button'));
      if (!buttons.length) {
        log('No booking buttons found');
        return;
      }

      // Prefer a button that calls bookActivity
      let btn = buttons.find(b => b.getAttribute('onclick') && b.getAttribute('onclick').includes('bookActivity')) || buttons[0];
      log('Clicking booking button:', btn.textContent || btn.outerHTML);
      btn.click();

      // Give the onclick handler a moment
      setTimeout(() => {
        const raw = sessionStorage.getItem('bookingData');
        if (raw) log('bookingData set:', raw);
        else log('bookingData not set');

        // restore assign
        if (window.__olc_real_assign) window.location.assign = window.__olc_real_assign;
      }, 200);
    } catch (err) {
      log('Automated test error:', err);
    }
  });
})();
