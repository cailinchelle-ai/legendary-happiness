(function(){
  if (!window.__OLC_AUTOMATED_TEST || window.__OLC_AUTOMATED_TEST_PAGE !== 'news') return;
  window.addEventListener('DOMContentLoaded', function () {
    const log = (...args) => console.log('[OLC news Test]', ...args);
    try {
      const readMore = document.querySelector('.news-post a') || document.querySelector('a');
      if (!readMore) { log('No read-more links found'); return; }
      log('Clicking read-more link:', readMore.textContent || readMore.href);
      // intercept navigation
      if (window.location && typeof window.location.assign === 'function') {
        window.__olc_real_assign = window.location.assign.bind(window.location);
        window.location.assign = function (url) { window.__OLC_LAST_NAV = url; log('navigation prevented to', url); };
      }
      readMore.click();
      setTimeout(()=>{
        if (window.__OLC_LAST_NAV) log('Navigation would have gone to', window.__OLC_LAST_NAV);
        else log('No navigation detected after clicking read-more');
        if (window.__olc_real_assign) window.location.assign = window.__olc_real_assign;
      },200);
    } catch (err) { log('Automated test error:', err); }
  });
})();
