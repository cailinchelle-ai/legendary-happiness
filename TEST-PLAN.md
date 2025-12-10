# Outdoor Living Centre — Test Plan (Table)

This document converts the previous test plan into a compact, sortable Markdown test table.

| ID | Area | Test Case | Steps | Expected Result | Status |
|---:|------|-----------|-------|-----------------|:-----:|
| 1.1 | Homepage - Quick Booking | Check-in required | Submit homepage form without check-in | Error: "Please select a check-in date." shown in `#homeDateError` | ☐ |
| 1.2 | Homepage - Quick Booking | Check-out required | Submit without check-out | Error: "Please select a check-out date." | ☐ |
| 1.3 | Homepage - Quick Booking | Check-out after check-in | Set check-in >= check-out | Error: "Check-out must be after check-in." | ☐ |
| 1.4 | Homepage - Quick Booking | Max booking length | Select dates >62 days apart | Error: "Booking length must be less than two months." | ☐ |
| 1.5 | Homepage - Quick Booking | Guests required | Submit without guests | Error: "Number of guests must be between 1 and 6." | ☐ |
| 1.6 | Homepage - Quick Booking | Guests below min | Enter 0 guests | Same guests-range error | ☐ |
| 1.7 | Homepage - Quick Booking | Guests above max | Enter 7 guests | Same guests-range error | ☐ |
| 1.8 | Homepage - Quick Booking | Valid quick search | Enter valid dates and guests | Navigates to `OLCbooking.html` and saves `bookingData` in sessionStorage | ☐ |
| 1.9 | Homepage - Quick Booking | Error focus | Submit with multiple errors | First invalid field receives focus | ☐ |

| 2.1 | Accommodations | Available button | View an available unit (data-availability="available") | Button is styled active and clickable | ☐ |
| 2.2 | Accommodations | Unavailable button | View unavailable unit (data-availability="unavailable") | Button is grey, disabled, cursor not-allowed | ☐ |
| 2.3 | Accommodations | Limited availability | View limited unit | Verify current behavior (enabled/disabled as desired) | ☐ |
| 2.4 | Accommodations | Book available unit | Click active Book now | sessionStorage contains unit; navigates to booking page | ☐ |
| 2.5 | Accommodations | Unavailable not clickable | Try to click grey Book now | No navigation; button has `disabled` attribute | ☐ |

| 3.1 | Booking - Accommodation | Accommodation required | Select accommodation mode but leave type empty | `accommodationError` displays message | ☐ |
| 3.2 | Booking - Accommodation | Check-in required | Leave check-in empty, submit | `checkinError` displays message | ☐ |
| 3.3 | Booking - Accommodation | Check-out required | Leave check-out empty, submit | `checkoutError` displays message | ☐ |
| 3.4 | Booking - Accommodation | Guests required | Leave guests empty | `guestsError` shows: "Please enter the number of guests (1-6)." | ☐ |
| 3.5 | Booking - Accommodation | Guests range | Enter 0 or 7+ | Guests error shows range constraint | ☐ |
| 3.6 | Booking - Accommodation | Check-out after check-in | Set invalid dates | Date error shown and fields aria-invalid | ☐ |
| 3.7 | Booking - Accommodation | Max length | Dates >62 days | Booking length error shown | ☐ |
| 3.8 | Booking - Accommodation | Year current | Book in current year | Booking allowed | ☐ |
| 3.9 | Booking - Accommodation | Year +1/+2 | Book in next 1-2 years | Booking allowed | ☐ |
| 3.10 | Booking - Accommodation | Year out-of-range (past) | Book in year < current | `yearError` displays allowed range | ☐ |
| 3.11 | Booking - Accommodation | Year out-of-range (future) | Book in year > current+2 | `yearError` displays allowed range | ☐ |
| 3.12 | Booking - Accommodation | Year UI help | Trigger year error | `yearRangeHelp` displays allowed range | ☐ |
| 3.13 | Booking - Accommodation | Valid booking | Fill valid accommodation details | Confirmation dialog shows details | ☐ |
| 3.14 | Booking - Accommodation | Time in dialog | Confirm accommodation booking | Time shows "N/A" | ☐ |

| 4.1 | Booking - Activity | Activity date required | Leave activity date empty | `activityDateError` shows message | ☐ |
| 4.2 | Booking - Activity | Activity time required | Leave activity time empty | `activityTimeError` shows message | ☐ |
| 4.3 | Booking - Activity | Guests required | Leave guests empty | Guests error shown | ☐ |
| 4.4 | Booking - Activity | Year validation (activity) | Book activity in out-of-range year | Year error shown | ☐ |
| 4.5 | Booking - Activity | Valid activity booking | Select activity and time, fill details | Dialog displays activity, friendly time label, date, guests | ☐ |
| 4.6 | Booking - Activity | Morning time label | Book with 09:00 | Dialog shows "09:00 (Morning)" | ☐ |
| 4.7 | Booking - Activity | Noon time label | Book with 12:00 | Dialog shows "12:00 (Noon)" | ☐ |
| 4.8 | Booking - Activity | Evening time label | Book with 19:00 | Dialog shows "19:00 (Evening)" | ☐ |

| 5.1 | Activities Page | Time dropdown options | Open activity time select | Options: "09:00 (Morning)", "12:00 (Noon)", "19:00 (Evening)" | ☐ |
| 5.2 | Activities Page | Select activity & time | Choose time then book | sessionStorage contains activity and time; navigates to booking | ☐ |
| 5.3 | Activities Page | Booking data persistence | Land on booking page | Form pre-fills and sessionStorage matches expected keys | ☐ |
| 5.4 | Activities Page | All cards have selects | Inspect all activity cards | Each card has a working time select | ☐ |

| 6.1 | Multi-Activity | Add multiple activities | Add two different activities (date/time) | Both appear in summary table | ☐ |
| 6.2 | Multi-Activity | Prevent duplicates | Re-add same activity/date/time | Duplicate prevented; error shown | ☐ |
| 6.3 | Multi-Activity | Summary counter | Add multiple sessions | "Added Sessions" shows correct count (no stray chars) | ☐ |
| 6.4 | Multi-Activity | Year validation | Add activity with out-of-range year | Year error shown | ☐ |
| 6.5 | Multi-Activity | Remove activity | Add then remove activity | Item removed and counter updated | ☐ |

| 7.1 | Error UI | Errors in divs (no browser popups) | Submit with empty fields | Errors show in error divs; no browser tooltips | ☐ |
| 7.2 | Error UI | Message clarity | Trigger each validation | Messages are descriptive and field-specific | ☐ |
| 7.3 | Error UI | aria-invalid attr | Submit with errors | Invalid fields have `aria-invalid="true"` | ☐ |
| 7.4 | Error UI | Error clearing | Fix fields after errors and resubmit | Previous errors clear before new validation | ☐ |

| 8.1 | Confirmation Dialog | Dialog opens on valid submit | Submit valid booking | Dialog shows all booking details | ☐ |
| 8.2 | Confirmation Dialog | Accommodation content | Confirm accommodation booking | Shows unit, check-in/out, guests, time = N/A | ☐ |
| 8.3 | Confirmation Dialog | Activity content | Confirm activity booking | Shows activity, date, friendly time, guests | ☐ |
| 8.4 | Confirmation Dialog | Dialog buttons | Inspect dialog controls | Confirm and Cancel buttons present and functional | ☐ |
| 8.5 | Confirmation Dialog | Cancel behavior | Click Cancel in dialog | Dialog closes; form data preserved | ☐ |
| 8.6 | Confirmation Dialog | Confirm behavior | Click Confirm in dialog | Booking submitted or success flow triggers | ☐ |

| 9.1 | sessionStorage | Homepage to booking | Submit quick search | sessionStorage contains expected bookingData | ☐ |
| 9.2 | sessionStorage | Accommodations to booking | Click Book now on a unit | sessionStorage contains unit and guests | ☐ |
| 9.3 | sessionStorage | Activities to booking | Select activity/time | sessionStorage contains activity/time keys | ☐ |
| 9.4 | sessionStorage | Prefill booking page | Navigate to booking page | Form prefills from sessionStorage | ☐ |

| 10.1 | Responsive & A11y | Homepage desktop layout | Open on desktop | Content left, image right, side-by-side | ☐ |
| 10.2 | Responsive & A11y | Mobile responsiveness | View at 375px width | Layout stacks, no overflow | ☐ |
| 10.3 | Responsive & A11y | Keyboard navigation | Tab through form | All interactive elements reachable | ☐ |
| 10.4 | Responsive & A11y | Screen reader checks | Run screen reader | Labels, errors announced appropriately | ☐ |

| 11.1 | Cross-browser | Chrome | Run major tests in Chrome | Pass/Fail per case | ☐ |
| 11.2 | Cross-browser | Firefox | Run major tests in Firefox | Pass/Fail per case | ☐ |
| 11.3 | Cross-browser | Edge | Run major tests in Edge | Pass/Fail per case | ☐ |
| 11.4 | Cross-browser | Safari | Run major tests in Safari (if available) | Pass/Fail per case | ☐ |

---

### Notes & How to use this table
- Use the `Status` column to mark each test as `✅` (pass) or `❌` (fail) as you run them.
- For automated test runners (Playwright), map each table row ID to a spec name.
- If you want, I can also export this table into a CSV file or generate Playwright test skeletons for the highest-priority tests.

---

_Generated: converted to a table layout for easier scanning and test-tracking._
