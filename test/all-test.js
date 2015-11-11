/**
 * Copyright (C) 2015 tieba.baidu.com
 * all-test.js
 *
 * changelog
 * 2015-11-11[18:28:06]:revised
 *
 * @author yinyong02@baidu.com
 * @version 0.1.0
 * @since 0.1.0
 */
var assert = require('assert');

var parsePhp = require('./parse-php');

describe('to-php-array', function () {
    describe('#parse', function () {
        it('should return "NULL" when null or undefined', function () {
            assert.ok(parsePhp(null));
            assert.ok(parsePhp(undefined));
        });

        it('should return "True"/"False" when boolean', function () {
            assert.ok(parsePhp(true));
            assert.ok(parsePhp(false));
        });

        it('should return number when number', function () {
            assert.ok(parsePhp(1.2));
            assert.ok(parsePhp(new Number(0x0810)));
        });
    });
});