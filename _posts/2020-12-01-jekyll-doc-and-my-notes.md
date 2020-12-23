---
title: Blog Tech Notes
date: 2020-12-01 10:10
tags: [tech-note]
---

### Add float "Back to Top" Button

Take [Vanilla BTT](https://github.com/vfeskov/vanilla-back-to-top). Save js to assets/global/ folder and add code to _includes/footer.html:

```html
<script src="/assets/global/vanilla-back-to-top.min.js"></script>
<script>addBackToTop({
  diameter: 32,
  backgroundColor: 'rgb(255, 82, 82)',
  textColor: '#fff'
})</script>
```

It's not perfect - needs two clicks on mobile screen, and cannot scroll to top-left.

---

### Star Rating System

It may use [zetabase](https://zetabase.io/) to create a star rating system, like comment system does.

---

### Add google search to site

Followed this [link](https://medium.com/@YossiEliaz/how-to-make-your-github-pages-website-searchable-by-google-c6f481ca3a19), added meta in _includes/head.html.

---

### Use \tag{number} to number equations

No need to set auto numbering since each post would start with  specified number.

---
