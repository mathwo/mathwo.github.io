---
title: Blog Tech Notes
date: 2020-11-11 07:47
tags: []
---

### Installation

(1) Local run needs [ruby 2.6 installed on PC](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.6.7-1/rubyinstaller-devkit-2.6.7-1-x64.exe)

(2) Open ruby cmd.exe, and run "gem install bundler:2.1.4"

(3) Run "bundle install"

(4) Run "bundle exec jekyll serve --incremental"

### Jekyll Documentation

You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/

### Tips and TroubleShooting

I mainly follow the steps in https://www.kiltandcode.com/2020/04/30/how-to-create-a-blog-using-jekyll-and-github-pages-on-windows/.

The only thing that post missed is:

```
git remote add origin https://github.com/mathwo/mathwo.github.io.git
```

---

### Command to run jekyll locally and automatically update posts and preview all drafts (but you may need Ctrl-F5 to force cleaning Chrome cache) and change default port 4000

```
jekyll serve --livereload --drafts --port 4001
```

and after installing jekyll-TeXt theme:

```
bundle exec jekyll serve --incremental
```

---

### Following error reported from command line when running "jekyll serve --livereload --trace"

```
Unable to load the EventMachine C extension; To use the pure-ruby reactor, require 'em/pure_ruby'
```

**Solution:**

https://github.com/oneclick/rubyinstaller2/issues/96

```
gem uninstall eventmachine
gem install eventmachine --platform ruby
```

---

### Front Matter and VSCode Extensions:

https://insujang.github.io/2019-09-28/jekyll-vscode/

1. [VScode insider](https://code.visualstudio.com/insiders/) - this is an insider version of VSCode
2. [Docker Jekyll](https://hub.docker.com/r/jekyll/jekyll/) - this is a docker Jekyll image...
3. [jekyll-post plugin](https://marketplace.visualstudio.com/items?itemName=rohgarg.jekyll-post)

---

### MathJax support (this item is bypassed after adapting to TeXt theme)

http://sgeos.github.io/github/jekyll/2016/08/21/adding_mathjax_to_a_jekyll_github_pages_blog.html

This is a bit tricky for new Jekyll versions since it's using Gem based themes and layouts are inside theme now.

First need locate theme minima files by following command in local repo folder:

```
bundle info minima
```

Then create a folder named _layouts and copy all html files from minima subfolder _layouts, then add following code inside post.html:

```
  <style>
    code.has-jax {
      font: inherit;
      font-size: 100%;
      background: inherit;
      border: inherit;
      color: #515151;
    }
  </style>

  <script type="text/javascript" async
    src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/11.4.0/math.js?config=TeX-AMS-MML_HTMLorMML">
    MathJax.Hub.Config({
      tex2jax: {
        inlineMath: [['$','$'], ['\\(','\\)']],
        displayMath: [['$$','$$']],
        processEscapes: true,
        processEnvironments: true,
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
        TeX: { equationNumbers: { autoNumber: "AMS" },
            extensions: ["AMSmath.js", "AMSsymbols.js"] }
      },
      "HTML-CSS": {
        fonts: ["Latin-Modern"]
      }
    });

    MathJax.Hub.Queue(function() {
      // Fix <code> tags after MathJax finishes running. This is a
      // hack to overcome a shortcoming of Markdown. Discussion at
      // https://github.com/mojombo/jekyll/issues/199
      var all = MathJax.Hub.getAllJax(), i;
      for(i = 0; i < all.length; i += 1) {
          all[i].SourceElement().parentNode.className += ' has-jax';
      }
    });

    MathJax.Hub.Config({
      // Autonumbering by mathjax
      TeX: { equationNumbers: { autoNumber: "AMS" } }
    });
  </script>
```

---

### Install jekyll-TeXt theme

I fork the jekyll-TeXt repo and move contents into it to rebuild this blog. I feel it worths as it's much better with quite some features I really like. Note: the MathJax.Hub.Config in jekyll-TeXt theme is not good enough. To use line-break \\ we need display math sign $$. Replace it with above code.

---

### Generate anchor for each header

https://blog.briandrupieski.com/generate-anchors-in-jekyll-blog-post

---

### favicon creation

Follow instruction in [this link](https://tianqi.name/jekyll-TeXt-theme/docs/en/logo-and-favicon) to update logo and favicon.ico.

---

### Upload large PDF files

Note: LFS is not supported for public fork repo of GitHub. Solution: [duplicate the repo](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/duplicating-a-repository) can solve this issue.

[Git Large File Storage](https://git-lfs.github.com/) has to be used if file size is larger than 100MB for GitHub. The trick is, after installing git-lfs program, all git lfs commands needs to be run at repo root directory:

```
git lfs install
git lfs track "*.pdf"
git add .gitattibutes
```

Note: lfs uploading always breaks PDF files. I split PDF files to be smaller than 100MB so LFS can be bypassed. LFS is buggy and do not use it if possible. Use following commands to remove cached files and uninstall lfs.

```
git lfs uninstall
git lfs ls-files
git rm --cached each_file_name_listed
rm .gitattribute
git commit -m "restore files from lfs"
```

---

### Add GitLab repo mirror to be GitLab page site

This step is quite straight forward. Create group in GitLab mirror the github repo and then add a .gitlab-cli.yml on gitlab site and choose Jekyll template. Run a pipeline to deploy the site. Also removed github and email from _includes/footer.html.

---

### Local run for the first time

  ```script
  bundle install
  bundle exec jekyll serve --livereload
  ```

---

### Fix Archive and About link in head

This fix is done by adding following line to Front-matter in about.md

```
permalink=/about/
```

and update the link to /about/ in navigation.yml. Similar to archive.

---

### Remove post introduction in cover page

This feature is good but I don't need it for my cover page. This can be easily done in _layouts\home.html

```
articles:
  data_source: paginator.posts
  article_type: BlogPosting
  show_cover: false
  show_excerpt: false
  show_readmore: false
  show_info: false
```

---

### Home page style tweaking

Comment out padding-top line and padding_bottom line for .items--divided class in _item.scss

---

### Tweak horizontal line

Follow [this link](https://tianqi.name/jekyll-TeXt-theme/docs/en/quick-start) to revise _sass/common/classes/_horizontal-rules.scss file:

```scss
@mixin horizontal-rules() {
  // border-bottom: 1px dashed #8c8b8b;
  border-bottom: 1px dashed $text-color-l;
  &::after {
    content: '\002702';
    display: inline-block;
    position: relative;
    top: 21px;
    left: 40px;
    padding: 0 3px;
    background: #ffffff;
    color: $text-color-l;
    font-size: map-get($base, font-size-h3);
  }
}

.horizontal-rules {
  @include horizontal-rules();
}
```

---

### Home page article list font too large

Change h2 to h4 in includes/artical-list.html:

```html
<header><a href="{{ _article_url }}"><h4 itemprop="headline" class="item__header">{{ _article.title }}</h4></a></header>
```

Similarly，change h1 to h2 in _includes/article_header.html:

```html
<header><h2>{{ _article_title }}</h2></header>
```

---

### Change to Computer Modern font family

Mainly take the font-face code from: https://www.jamiddleton.com/jekyll/update/2019/03/31/jekyll-mathjax-cmuserif-mlblog.html, and add to _sass/common/_variables.scss. Search and download missing files in the code from google.

```scss
@font-face {
    font-family: "Computer Modern";
    src:
        url('/assets/css/cmunrm.otf') format("opentype"),
        url('/assets/css/cmunrm-webfont.eot'),
        url('/assets/css/cmunrm-webfont.eot?#iefix') format("embedded-opentype"),
        url('/assets/css/cmunrm-webfont.svg') format("svg"),
        url('/assets/css/cmunrm-webfont.woff') format("woff"),
        url('/assets/css/cmunrm-webfont.ttf') format("truetype");
}
```

Then add "Computer Modern" in font-family, and change font-size from 1rem to 1.1rem:

```scss
$base: (
  font-family:            ("Computer Modern", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif),
  font-family-code:       (Menlo, Monaco, Consolas, Andale Mono, lucida console, Courier New, monospace),

  font-size-root:         16px,
  font-size-root-sm:      14px,

  font-size-xl:           1.5rem,
  font-size-lg:           1.25rem,
  font-size:              1.1rem,
```

---

### Add Home link in Navigation

This is to add an item in _data/navigation.yml. Do some translation for Home. I geel the title is not so obvious to be clickable and people may need look for Home link.

---

### Add comments to Posts

**Note: This part does not work any more**

Some search and shows [comments.js](https://zetabase.io/comments-js) is a good tool and some [tutorial](https://zetabase.io/blog-post/setting-up-comments-on-jekyll-github-pages).

Just follow the instruction to [sign up zetabase](https://zetabase.io/new-user?ref=commentsjs), then follow the steps to login zetabase and get automatically downloaded copy of comments.html and zetabase-identity-key.json.

Then create a new file named commentjs.html (because there is existing comments.html) in _includes folder. Copy the content of comments.html file that is just downloaded into this new file. Add a line in article-footer.html:

```html
{% include commentjs.html %}
<footer class="article__footer">
```

To clear the format in mobile view, add styles to zp-main, and hide <p> inside div with class zp-inputs as following:

```html
<div id="comments" class="zp-main" style="border:0em; margin-top: 0px; padding-top: 0px">
  <div class="zp-inputs">
      <p style="display:none">
```

Add a border on top:

```html
<div style="max-width: 1024px; margin: auto; border-top: 1px solid #cccccc; margin-top: 60px">
```

**Note: This part does not work any more**

And comments can be managed with instruction at [here](https://zetabase.io/docs/#/comments-js-setup?id=moderation).

---

### Increase blockquote font size

In _sass/common/.article__content.scss:

```scss
  blockquote {
    padding-left: map-get($spacers, 3);
    font-size: map-get($base, font-size);
```
---

### Filter on Tag for Cover Title Pages

Considering each cover title page get longer and longer, I decide to show only a specified collection of cover pages, and each cover page links to a simple index page. Posts are linked to index page by months.

This solution is done by using [collection in Jekyll](https://jekyllrb.com/docs/collections/). And it is configured in _config.yml.

```yml
collections:
  coverpages:
    output: true
    permalink: /:collection/:name
```

and its layout is specified by following code:

```yml
defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: article
      sharing: true
      license: true
      aside:
        toc: true
      show_edit_on_github: true
      show_subscribe: true
      pageview: true
  - scope:
      path: ""
      type: coverpages
    values:
      layout: article
      sharing: false
      license: false
      aside:
        toc: false
      show_edit_on_github: false
      show_subscribe: false
      pageview: false
```

and change _layouts/home.html to use the collection as data_source:

```html
articles:
  data_source: coverpages
  article_type: BlogPosting
  show_cover: false
  show_excerpt: false
  show_readmore: false
  show_info: false
```

Unsolved questions:

- What is the URL link to collection page

---

### Remove comment from index page

_config.yml:

```yml
defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: article
      sharing: true
      license: true
      aside:
        toc: true
      show_edit_on_github: true
      show_subscribe: true
      pageview: true
      show-comment: true
  - scope:
      path: ""
      type: coverpages
    values:
      layout: article
      sharing: false
      license: false
      aside:
        toc: false
      show_edit_on_github: false
      show_subscribe: false
      pageview: false
      show-comment: false
```

and in _includes/article-footer.html:

![image-20201129113702707](/assets/images/2020-11/image-20201129113702707.png)

---

### Liquid Learning Resources

- [Liquid Doc](https://shopify.github.io/liquid/)
- [Liquid Overview](https://www.shopify.com/partners/blog/115244038-an-overview-of-liquid-shopifys-templating-language)
- [Liquid Language Reference](https://shopify.dev/docs/themes/liquid/reference)
- [Liquid Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)
- [Another Shopify Cheat Sheet](http://cheat.markdunkley.com/)
- [Star Rating](https://blog.keirwhitaker.com/blog/create-a-star-rating-system-in-liquid/)

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

**Note: This part does not work any more**

It may use [zetabase](https://zetabase.io/) to create a star rating system, like comment system does.

---

### Add google search to site

* Followed this [link](https://medium.com/@YossiEliaz/how-to-make-your-github-pages-website-searchable-by-google-c6f481ca3a19), added meta in _includes/head.html.
* Follow this [link](https://victor2code.github.io/blog/2019/07/04/jekyll-github-pages-appear-on-Google.html) to add gem to Gemfile and run local serve command.
* Follow this [link](https://yoast.com/help/submit-sitemap-search-engines/) to add sitemap.xml to Google Search Console.
* Follow this [link](https://betterstudio.com/blog/search-console-fails-to-fetch-sitemap/#:~:text=The%20occurrence%20of%20couldn't,status%20couldn't%20fetch%20error.) if the sitemap cannot be fetched.

---

### Use \tag{number} to number equations

No need to set auto numbering since each post would start with  specified number.

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

Revised to update rake version on both dev and master branches. This version update reminds me that, a blog should cut down dependencies to minimum to survive decades.
