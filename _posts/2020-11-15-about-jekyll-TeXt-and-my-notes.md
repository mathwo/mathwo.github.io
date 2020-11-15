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

### Install jekyll-text theme

Add following line to Gemfile:

```
gem "jekyll-text-theme"
```

And change theme in _config.yml file:

```
theme: jekyll-text-theme
```

STOP HERE: this is not easy. Quite a lot changes need to be done. Seems Gem add theme is not simple. I will leave this for futural action.

---

### Generate anchor for each header

https://blog.briandrupieski.com/generate-anchors-in-jekyll-blog-post

---

### favicon creation

I use [InkScape](https://inkscape.org/) to draw simple icon and save as SVG, then use [some online converter website](https://cloudconvert.com/svg-to-ico) to convert it to ico file.

---

### Upload large PDF files

[Git Large File Storage](https://git-lfs.github.com/) has to be used if file size is larger than 100MB for GitHub. The trick is, after installing git-lfs program, all git lfs commands needs to be run at repo root directory:

```
git lfs install
git lfs track "*.pdf"
git add .gitattibutes
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

Comment out padding-top line and padding_bottom line for .items--divided class in _item.scss.
