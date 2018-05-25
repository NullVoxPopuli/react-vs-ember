# React vs. Ember: Introduction

This is the first post in a series which aims to objectively discuss some differences and
similarities between how the React-based projects and Ember projects solve the same problems.
The comparison is going to utilize a best-practice approach within
both ecosystems with a focus maintainability, allowing ease of collaboration in large teams via
typescript, and some recommended architectural patterns that best fit the ecosystem.

What this series is not, is a subjective comparison of why an individual or company should choose
React (and its ecosystem) over Ember or vice-versa. There are some major differences that make React
difficult to compare to Ember, as React is a single library, and Ember is a framework consisting of multiple
libraries.

This series will assume some general single-page-app and modern ECMAScript knowledge from the reader so that the content
can focus on the problem being solved for that particular blog post. Each post will include (and eventually embed) runnable
code samples to demonstrate the implementation(s) in the grander scheme of an app.

###  Notes and caveats

While the goal is to remain totally subjective between React (and its ecosystem) and Ember, some opinions are required within each in order to make the comparison easier. Many of these opinionated implementation details won't matter for the content of the blog series, but will be present in the linked example code. There will be a separate post down the road about project structure in various scenarios.


----------------------------------------------------

## Info About This Repo


The code in this repo provides runnable examples of code throughout a blogging series comparing react (and it's ecosystem) with ember.

The structure is the following:

```
 - blog-topic/
   - react/
     - everything needed to run a react project
   - ember/
     - everything needed to run an ember project

```

Each react/ember folder will have a `README.md` which explains which files are of relevance for the specific blog topic.

Every project directory will contain a `run` file, which can be executed via `./run docker` to auto-build, install dependencies, and run the sample app.


------------------------------------------------------
Markdown to HTML Conversion: https://www.browserling.com/tools/markdown-to-html



---------------------------------------------------------

Wordpress for getting syntax highlighting:

```html
<!-- This is for coloring the code samples -->
<!--
https://www.jsdelivr.com/package/npm/prismjs?path=components&tab=collection
-->


<script
  src="https://cdn.jsdelivr.net/combine/npm/prismjs@1.14.0,npm/prismjs@1.14.0/plugins/line-numbers/prism-line-numbers.min.js,npm/prismjs@1.14.0/plugins/show-language/prism-show-language.min.js,npm/prismjs@1.14.0/components/prism-typescript.min.js,npm/prismjs@1.14.0/components/prism-jsx.min.js,npm/prismjs@1.14.0/components/prism-tsx.min.js,npm/prismjs@1.14.0/components/prism-markup-templating.min.js,npm/prismjs@1.14.0/components/prism-handlebars.min.js"></script>




<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/combine/npm/prismjs@1.14.0/themes/prism.min.css,npm/prismjs@1.14.0/plugins/line-numbers/prism-line-numbers.min.css">


<style>
.main h1, .main h2 {
  margin-bottom: 2rem !important;
}
</style>
```
