#!/usr/bin/env node

/**
 * Copyright (C) 2015 yanni4night.com
 * cli.js
 *
 * changelog
 * 2015-11-13[14:08:59]:revised
 *
 * @author yanni4night@gmail.com
 * @version 0.1.0
 * @since 0.1.0
 */

var program = require('commander');
var fs = require('fs');
var path = require('path');
var toPhpArray = require('../');

program
    .version('1.0.0')
    .option('-f, --file [file]', 'Add JSON file')
    .option('-o, --output [output]', 'Output PHP file')
    .option('-e, --encoding [encoding]', 'File charset')
    .option('-i, --indent [indent]', 'Indent')
    .parse(process.argv);

var inputFile;

var encoding = program.encoding || 'utf-8';
var indent = +program.indent || 4;
var output = program.output;

if (!(inputFile = program.file)) {
    console.error('Input file is required');
    process.exit(-1);
}

if (!/^\//.test(inputFile)) {
    inputFile = path.join(process.cwd(), inputFile);
}

var jsonContent = fs.readFileSync(inputFile, {
    encoding: encoding
});

var json = JSON.parse(jsonContent);

var phpCode = '<?php\n return ' + toPhpArray(json, indent) + ';\n?>';

if (output) {
    fs.writeFileSync(output, phpCode, {
        encoding: encoding
    });
} else {
    console.log(phpCode);
}