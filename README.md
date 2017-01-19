# Material Flow

Yet Another Material Design Blog Theme.

[DEMO](http://keyin.me)


## Install
### Dependencies
```bash
cd /your_blog_dir/
npm i -S hexo-generator-search hexo-generator-feed hexo-renderer-less hexo-autoprefixer
```
### Downloading
```bash
cd /your_blog_dir/themes/
git clone https://github.com/stkevintan/hexo-theme-material-flow material-flow
```

Change the value of `theme` to material-flow in your global `_config.yml`.


## Settings
There are 3 configuration places you should concerned:

### `_config.yml`  
The global config of your site.
```yaml
# Hexo Configuration
## Docs: https://hexo.io/docs/configuration.html
## Source: https://github.com/hexojs/hexo/

# Site
title: World of Forks
subtitle: My world
description: A blog of Kevin Tan
keywords:
  - blog
  - stkevintan
  - IT
  - Web Front End
  - Kevin Tan
  - kevinsfork
author: Kevin Tan
avatar: images/avatar.jpg # the avatar image in the sidebar
favicon: images/favicon.ico
language: zh-CN
timezone: Asia/Shanghai

# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: http://keyin.me
root: /
permalink: :year/:month/:day/:title/
permalink_defaults:

## ....


disqus_shortname: your_disqus_shortname
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: material-flow

# if your search is enable && search service is 'hexo'
search:
  path: search.xml
  field: post

# Generator json content
jsonContent:
  meta: false
  keywords: false
  pages:
    title: true
    slug: false
    date: false
    updated: false
    comments: false
    path: false
    link: false
    permalink: true
    excerpt: false
    keywords: false
    text: true
    raw: false
    content: false
  posts:
    title: true
    slug: false
    date: false
    updated: false
    comments: false
    path: false
    link: false
    permalink: true
    excerpt: false
    keywords: false
    text: true
    raw: false
    content: false
    categories: false
    tags: false

# auto prefixer
autoprefixer:
  exclude:
    - '*.min.css'
  browsers:
    - 'last 2 versions'

# rss
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content:
```

## `source/_data/`
The global config file's location. Following 3 configuration files are this theme used:
### `links.yml` 
Defines the entries of your friend link, eg:
```yaml
- name: blog1
  url: https://xxxx.com
- name: blog2
  url: http://xxx.com/
- name: blog3
  url: http://xxx.io/
```

### `menu.yml` 
Defines the navigation menu of your site's header, eg:
```yaml
- name: Home
  slug: home
  url: /
- name: Archives
  slug: archives
  url: /archives
- name: About
  slug: about
  url: /about
```

### `widgets.yml`
Defines the widget to show on your site's sidebar, eg:
```yaml
- about
- friendly-links
- categories
- tagcloud
```


## `themes/material-flow/_config.yml` 
The theme config file.
```yaml
# Search
search: 
  enable: true
  service: hexo # google/hexo/algolia/azure/baidu
  # google 
  google_api_key:
  google_engine_id:
  # algolia
  algolia_app_id:
  algolia_api_key:
  algolia_index_name:
  # azure
  azure_service_name:
  azure_index_name:
  azure_query_key:
  # baidu
  baidu_api_id:


# Less
less:
  compress: true

# use url, not username
social:
- slug: email
  url: #mailto:stkevintan@zju.edu.cn
- slug: github
  url: https://github.com/stkevintan
- slug: twitter
  url: https://twitter.com/kevinsfork
- slug: rss
	url: /atom.xml
```



## Enjoy ;)