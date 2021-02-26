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

Add two lines on overflow-x and overflow-y from _sass\components\_article-content.scss line 205:

```css
  table {
    display: block;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden !important;
    border-collapse: collapse;
  }
```

---

### 02/25/2021

#### Resolve rake version due to security risk

```
Dependabot can't update vulnerable dependencies without a lockfile
The currently installed version can't be determined.

To resolve the issue add a supported lockfile (Gemfile.lock or gems.locked).

View logs or learn more about troubleshooting Dependabot errors.

1 rake vulnerability found in jekyll-text-theme.gemspec 10 hours ago
Remediation
Upgrade rake to version 12.3.3 or later. For example:

spec.add_dependency "rake", ">= 12.3.3"
or…
spec.add_development_dependency "rake", ">= 12.3.3"
Always verify the validity and compatibility of suggestions with your codebase.
```

Revised to update rake version and run "bundle install".
