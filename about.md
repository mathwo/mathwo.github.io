---
layout: article
titles:
  # @start locale config
  en      : &EN       About
  en-GB   : *EN
  en-US   : *EN
  en-CA   : *EN
  en-AU   : *EN
  zh-Hans : &ZH_HANS  关于
  zh      : *ZH_HANS
  zh-CN   : *ZH_HANS
  zh-SG   : *ZH_HANS
  zh-Hant : &ZH_HANT  關於
  zh-TW   : *ZH_HANT
  zh-HK   : *ZH_HANT
  ko      : &KO       소개
  ko-KR   : *KO
  fr      : &FR       À propos
  fr-BE   : *FR
  fr-CA   : *FR
  fr-CH   : *FR
  fr-FR   : *FR
  fr-LU   : *FR
  # @end locale config
key: page-about
permalink: /about/
---

![TeXt Theme](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/TeXt-home.jpg)

TeXt is a super customizable Jekyll theme for personal site, team site, blog, project, documentation, etc. Similar to iOS 11 style, it has large and prominent titles, round buttons and cards.

```javascript
(() => console.log('Hello, World!'))();
```

## Features

- Responsive
- Semantic HTML
- Skins
- Highlight Theme
- Internationalization
- Search
- Table of contents
- Authors
- Additional styles (alert, tag, image, icon, button, grid, etc)
- Extensions (audios, videos, slides, demos)
- Markdown enhancements ([MathJax](https://www.mathjax.org/), [mermaid](https://mermaidjs.github.io/), [chartjs](http://www.chartjs.org/))
- Sharing ([AddToAny](https://www.addtoany.com/), [AddThis](https://www.addthis.com/))
- Comments ([Disqus](https://disqus.com/), [Gitalk](https://gitalk.github.io/), [Valine](https://valine.js.org/en/))
- Pageview ([LeanCloud](https://leancloud.cn/))
- Analytics ([Google Analytics](https://analytics.google.com/analytics/web/))
- RSS ([jekyll-feed](https://github.com/jekyll/jekyll-feed))

## Skins

TeXt has 6 built-in skins, you can also set up your own skin.

| `default` | `dark` | `forest` |
| --- |  --- | --- |
| ![Default](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_default.jpg) | ![Dark](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_dark.jpg) | ![Forest](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_forest.jpg) |

| `ocean` | `chocolate` | `orange` |
| --- |  --- | --- |
| ![Ocean](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_ocean.jpg) | ![Chocolate](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_chocolate.jpg) | ![Orange](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/skins_orange.jpg) |

### Highlight Theme

TeXt use [Tomorrow](https://github.com/chriskempson/tomorrow-theme) as the highlight theme.

| `tomorrow` | `tomorrow-night` | `tomorrow-night-eighties` | `tomorrow-night-blue` | `tomorrow-night-bright` |
| --- |  --- | --- | --- |  --- |
| ![Tomorrow](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow.png) | ![Tomorrow Night](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night.png) | ![Tomorrow Night Eighties](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night-eighties.png) | ![Tomorrow Night Blue](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night-blue.png) | ![Tomorrow Night Bright](https://raw.githubusercontent.com/kitian616/jekyll-TeXt-theme/master/screenshots/highlight_tomorrow-night-bright.png) |

This is my workout page for math, in almost daily updating.

It used to be a section of my OneNote notes but I would like to share with the people when necessary, especially with Brady and Justina.

It took me some time to find a good platform to settle it down.

I need easy image-pasting so [typora](https://typora.io/) is used for typing the math contents and vscode is used for general editor. It's pity that vscode cannot preview all Latex contents.

[geogebra](https://www.geogebra.org/classic?lang=en) is used for all graph editing. Desktop version of Geogebra is also used since it has more keyboard shortcuts that web version in browser.

I tried to host this blog on GitLab with Hugo SSG but there was some path issue for CSS. I also tried on Wordpress.com. Wordpress is a good match with local [boostnote](https://boostnote.io/) editor but I have to purchase business plan to install Latex plugin on wordpress.com. I had to give it up.

Jekyll is old and huge with ruby installation but it is clear and easy to start with. Changing theme is not an easy task for Jekyll. I plan to switch to [jekyll-TeXt theme](https://github.com/kitian616/jekyll-TeXt-theme) in the future.

I follow the approach to append posts and keep home page fixed, and add anchors to all headers. It's a special way to make it some like Single-Page.

More technical details are accumulated in [About Jekyll Doc and My Notes]({% post_url 2020-11-11-jekyll-doc-and-my-notes %}).

That's all about it so far.
