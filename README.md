## Starter Template

My next.js/react template with some nice files for easy global style changes :)

[Preview here](https://urlicic-starter-template.netlify.app/en).

### Global styling

Edit global.scss for colors, layout, radius, etc

The variables from globals.scss are set and used for all sections through either scss classes or tailwind classes when possible.

ex: border radius is set globally inside globals.scss, and called inside components as tailwind class `rounded-layout`

ex: a lot of layout padding is set with scss classes to be responsive

### Environment variables

For form email automation the following variables must be set:

- API key from SendGrid
  (SENDGRID_API_KEY)

- The email address which appears as sender of email
  (SENDER_EMAIL)

- CC email address attachment for email
  (CC_EMAIL)

### NEW SITE CHECKLIST

- [ ] Change color scheme in global.scss
- [ ] Change section transition svg
- [ ] Add preload font in \_app.tsx
- [ ] Replace stock images
- [ ] Edit automated email info inside netlify/functions
- [ ] Add sendgrip api key
- [ ] Add locale text in de/en
- [ ] Add nextseo info/ localbusiness
