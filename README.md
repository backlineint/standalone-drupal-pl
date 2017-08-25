# Standalone Drupal-Friendly Pattern Lab Boilerplate

My personal boilerplate for a standalone Pattern Lab instance that will be used as an external dependency of a Drupal theme.

## Prerequistes

- [`composer`](https://getcomposer.org/)
- [`nodejs`](https://nodejs.org)

## First Time Install

`composer install`

If asked to  merge or replace with the contents of the pattern-lab/drupal-twig-components package, select r for replace.

If asked to update the config option styleguideKitPath, select Y for yes.

`npm install`

To view your pattern library for the first time run:

`npm start`

This will generate the front-end for Patern Lab and then you can open [http://localhost:8080](http://localhost:8080) in your browser.

## Helpful Commands

These are some helpful commands you can use on the command line for working with Pattern Lab and this pattern library.

### Watch task

This will watch for changes in the pattern library, compile css, js, and pattern lab and also run PHP's built-in web server so you may view your pattern library.

    npm run watch

### Generate Pattern Lab

To generate the front-end for Pattern Lab type:

    npm run patterns

### Start a server to view Pattern Lab

You can use PHP's built-in web server to review your Pattern Lab project in a browser. In a separate window type:

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

This project was built using the [Drupal fork of the Drupal Edition of Pattern Lab](https://github.com/drupal-pattern-lab/edition-php-drupal-standard)

It also uses the [Data Inheritance Pattern Lab plugin](https://github.com/pattern-lab/plugin-php-data-inheritance).
