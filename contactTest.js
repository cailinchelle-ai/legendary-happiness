(function(){
  if (!window.__OLC_AUTOMATED_TEST || window.__OLC_AUTOMATED_TEST_PAGE !== 'contact') return;
  window.addEventListener('DOMContentLoaded', function () {
    const log = (...args) => console.log('[OLC contact Test]', ...args);
    try {
      const form = document.querySelector('.contact-form');
      if (!form) { log('No contact form found'); return; }
      // fill fields
      const name = document.getElementById('name'); if (name) name.value = 'Test User';
      const email = document.getElementById('email'); if (email) email.value = 'test@example.com';
      const subject = document.getElementById('subject'); if (subject) subject.value = 'Testing';
      const message = document.getElementById('message'); if (message) message.value = 'This is an automated test message.';
      log('Filled contact form');

      // intercept submit
      const oldSubmit = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function(){ log('Intercepted contact form submit'); };
      form.dispatchEvent(new Event('submit', {bubbles:true, cancelable:true}));
      log('Contact form submit dispatched (intercepted)');
      HTMLFormElement.prototype.submit = oldSubmit;

    } catch (err) { log('Automated test error:', err); }
  });
})();
