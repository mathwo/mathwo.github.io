---
title: Jekyll-TeXt theme and my notes
tags: TeXt
---

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

## Tips and TroubleShooting

I mainly follow the steps in https://www.kiltandcode.com/2020/04/30/how-to-create-a-blog-using-jekyll-and-github-pages-on-windows/.

The only thing that post missed is:

```
git remote add origin https://github.com/kingvagabond/kingvagabond.github.io.git
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

Solution:

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
    src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
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

I fork the jekyll-TeXt repo and move contents into it to rebuild this blog. I feel it worths as it's much better with quite some features I really like.

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

Then add "Computer Modern" in font-family:

```scss
$base: (
  font-family:            ("Computer Modern", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif),
```

---
