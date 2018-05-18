# React vs. Ember: Introduction

This is the first post in a series which aims to objectively discuss some differences and
similarities between how the React-based projects and Ember projects solve the same problems.
The comparison is going to utilize a best-practice approach within
both ecosystems with a focus maintainability, allowing ease of collaboration in large teams via
typescript, and some recommended architectural patterns that best fit the ecosystem.

What this series is not is a subjective comparison of why an individual or company should choose
React (and it's ecosystem) over Ember or vice-a-versa. There are some major diffrences that make React
difficult to compare to Ember, as React is a single library, and Ember is a framework consisting of multiple
libraries.

This series will assume some general single-page-app and modern ecmascript knowledge from the readers so that the content
can focus on the problem being solved for that particular blog post. Each post will include (and embed) runnable
code samples to demonstrate the implementation(s) in the grander scheme of an app.

###  Notes and caveats

While the goal is to remain totally subjective between React (and it's ecosystem) and Ember, some opinions are required within each in order to make the comparison easier. Many of these opinionated implementation details won't matter for the content of the blog series, but will be present in the linked example code. There will be a separate post down the road about project structure in various scenarios.


----------------------------------------------------

The code in this repo provides runnable examples of code throughout a blogging series comparing react (and it's ecosystem) with ember.

The structure is the following:

```
 - blog-topic/
   - react/
     - everything needed to run a react project
   - ember/
     - everything needed to run an ember project

```
each react/ember folder will have a `README.md` which explains which files are of relevance for the specific blog topic.


------------------------------------------------------
Markdown to HTML Conversion: https://www.browserling.com/tools/markdown-to-html
