(function(){
  if (!window.__OLC_AUTOMATED_TEST || window.__OLC_AUTOMATED_TEST_PAGE !== 'home') return;
  window.addEventListener('DOMContentLoaded', function () {
    const log = (...args) => console.log('[OLC home Test]', ...args);
    try {
      const form = document.querySelector('.booking-search');
      if (!form) { log('No booking-search form found'); return; }
      const inputs = form.querySelectorAll('input');
      // fill in reasonable values
      const today = new Date();
      const inDate = new Date(); inDate.setDate(today.getDate()+2);
      const outDate = new Date(); outDate.setDate(today.getDate()+4);
      if (inputs[0]) inputs[0].value = inDate.toISOString().slice(0,10);
      if (inputs[1]) inputs[1].value = outDate.toISOString().slice(0,10);
      if (inputs[2]) inputs[2].value = '2';
      log('Filled booking-search fields');

      // prevent actual navigation / submission
      const oldSubmit = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function(){ log('Intercepted submit'); };

      // dispatch submit
      form.dispatchEvent(new Event('submit', {bubbles:true, cancelable:true}));
      log('Submitted booking-search form (intercepted)');

      // restore
      HTMLFormElement.prototype.submit = oldSubmit;
    } catch (err) { log('Automated test error:', err); }
  });
})();
