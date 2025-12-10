// Automated test script for OLC booking flow
// Only runs if window.__OLC_AUTOMATED_TEST is set
(function(){
  if (!window.__OLC_AUTOMATED_TEST) return;
  window.addEventListener('DOMContentLoaded', function () {
    const log = (...args) => console.log('[OLC Test]', ...args);
    try {
      const select = document.getElementById('accommodation');
      const checkin = document.getElementById('checkin');
      const checkout = document.getElementById('checkout');
      const guests = document.getElementById('guests');
      const submitBtn = document.getElementById('submitBookingBtn');
      const form = document.querySelector('.booking-form');
      // 1. Fill fields with valid data
      select.value = 'cedar';
      checkin.value = (function(){let d=new Date();d.setDate(d.getDate()+2);return d.toISOString().slice(0,10);})();
      checkout.value = (function(){let d=new Date();d.setDate(d.getDate()+3);return d.toISOString().slice(0,10);})();
      guests.value = '2';
      log('Filled form fields.');
      // 2. Trigger input events to update validation
      ['input','change'].forEach(evt => {
        select.dispatchEvent(new Event(evt, {bubbles:true}));
        checkin.dispatchEvent(new Event(evt, {bubbles:true}));
        checkout.dispatchEvent(new Event(evt, {bubbles:true}));
        guests.dispatchEvent(new Event(evt, {bubbles:true}));
      });
      // 3. Submit the form (should open dialog, not submit yet)
      form.dispatchEvent(new Event('submit', {bubbles:true, cancelable:true}));
      log('Form submitted, dialog should be open.');
      // 4. Wait a moment, then confirm in dialog
      setTimeout(() => {
        const dialog = document.getElementById('confirmDialog');
        if (dialog && dialog.open) {
          log('Dialog is open. Confirming booking...');
          // Find the confirm button and click it
          const confirmBtn = dialog.querySelector('.confirm');
          if (confirmBtn) {
            confirmBtn.click();
            log('Clicked confirm. If form action is valid, page will navigate.');
          } else {
            log('Confirm button not found in dialog.');
          }
        } else {
          log('Dialog did not open as expected.');
        }
      }, 500);
    } catch (err) {
      log('Automated test error:', err);
    }
  });
})();
