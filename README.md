# Talk: Every Author as First Author

This repository contains slides for our (humorous) talk
“**Every Author as First Author**”
at [SIGTBD 2023](http://sigtbd.csail.mit.edu/)
held April 7, 2023 in Cambridge, Massachusetts.

See [the corresponding paper](https://github.com/edemaine/author-stack-paper).

## [View Slides](https://edemaine.github.io/author-stack-talk/)

[![Title slide](title_slide.jpg)](https://edemaine.github.io/author-stack-talk/)

## Technology: reveal.js + KaTeX + Pug + Stylus + CoffeeScript

This repository uses the
[reveal-pug-talk template](https://github.com/edemaine/reveal-pug-talk)
to make slides by combining the following technology (all free and open source):

* [reveal.js](https://revealjs.com/): a flexible HTML presentation framework,
  extendable by plugins and themes.  Here we use:
  * [Chalkboard](https://github.com/rajgoel/reveal.js-plugins/tree/master/chalkboard):
    enables live drawing annotation on the slides (using pen or touch or mouse)
  * [Merriweather](https://fonts.google.com/specimen/Merriweather) font
  * [KaTeX](https://katex.org): a library for translating LaTeX math into HTML
* [Pug](https://pugjs.org/): a concise indentation-based notation for HTML,
  which makes it easier to express reveal.js slides,
  and to mix together other languages, such as the following
* [Stylus](https://stylus-lang.com/): a concise indentation-based notation
  for CSS (styling of HTML)
* [CoffeeScript](https://coffeescript.org/): an indentation-based language
  that compiles to JavaScript
* [Gulp](https://gulpjs.com/): a tool that builds the Pug code into HTML

## Structure

Here's an overview of the individual files and what they do:

* [`gulpfile.coffee`](gulpfile.coffee): Definitions of `build` and `watch`
  rules that run Pug on `index.pug` and compile other `.coffee` files to `.js`.
* [`index.pug`](index.pug): Top-level Pug file that calls all other files.
  Defines the top-level structure of the document, but has no slides.
* [`slides.pug`](slides.pug): Slides and specific animations are defined here.
* [`index.styl`](index.styl): Custom reveal.js styling,
  and specific styling for the slides and author stacks
  (see `.stack` rule in particular).
* [`stack.coffee`](stack.coffee): Convert `class="autostack"` spans with
  semicolon-separated names into necessary HTML for author stacks.

<!-- Add any .coffee, images, etc. files here, if desired -->

## Build Instructions

To build the slides HTML (`index.html`) from the source files:

1. Install [NodeJS](https://nodejs.org/) if you haven't already.
2. Clone the repository
3. Run the following:

   ```sh
   npm install
   npm run build
   ```

If you're live-editing source files and want `index.html` to continually build
and update, use the following command:

```sh
npm run watch
```

To assemble just the needed files into a `dist` directory
(as defined by `deploySet` in `gulpfile.coffee`),
use the following command:

```sh
npm run dist
```

To deploy these files to GitHub Pages, use the following command:

```sh
npm run deploy
```
