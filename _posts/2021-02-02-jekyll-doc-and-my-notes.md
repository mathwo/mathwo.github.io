---
date: 2021-02-02 07:57
category:
author:
tags: []
summary:
---

### 02/03/2021

#### Align equation blocks to left: [Here](https://stackoverflow.com/questions/12707094/how-to-change-padding-of-math-in-mathjax?lq=1)

```javascript
MathJax.Hub.Config({
    displayAlign: "left",
    displayIndent: "2em"
});
```
---

### 02/21/2021

#### Remove vertical scrollbar for table:

Add two lines on overflow-x and overflow-y from _article-content.scss line 205:

```css
  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden !important;
    border-collapse: collapse;
  }
```
