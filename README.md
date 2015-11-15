# to-php-array

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]

Parse json to php

# usage

In global:

    npm install to-php-array -g

    $to-php-array -f my.json -o out.php -i 2 -e utf8

Or:

    require('to-php-array')({json:[1,2]}, 4);

# help

    $to-php-array --help

# test

    npm test


[npm-url]: https://npmjs.org/package/to-php-array
[npm-image]: http://img.shields.io/npm/v/to-php-array.svg
[travis-url]: https://travis-ci.org/yanni4night/to-php-array
[travis-image]: http://img.shields.io/travis/yanni4night/to-php-array.svg