# Standalone Drupal-Friendly Pattern Lab Boilerplate

My personal boilerplate for a standalone Pattern Lab instance that will be a dependency of a Drupal theme.

## Prerequistes

- [`nodejs`](https://nodejs.org)

## First Time Install

`npm install`

`npm start`

Then open [http://localhost:8080](http://localhost:8080) in your browser.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab and this pattern library.

### Watch task

This will watch for changes in the pattern library, compile css, js, and pattern lab.

    npm run watch

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    npm run patterns

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a separate window type:

    npm start
    or
    npm run patterns:server

Then open [http://localhost:8080](http://localhost:8080) in your browser.

### Compiling Sass

Manually generate a new compiled css file, or watch for changes and recompile:

    npm run sass
    npm run sass:watch

### Compiling Js

Manually generate a new compiled javascript file (intended only for the pattern library), or watch for changes and recompile:

    npm run scripts
    npm run scripts:watch

## Other Notes

This project was built using the Drupal fork of Pattern Lab: https://github.com/drupal-pattern-lab/edition-php-drupal-standard

It also uses the inheritance Pattern Lab plugin.
