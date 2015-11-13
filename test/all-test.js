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
            assert.ok(parsePhp(null, 'null'));
            assert.ok(parsePhp(undefined, 'null'));
        });

        it('should return "True"/"False" when boolean', function () {
            assert.ok(parsePhp(true, 'true'));
            assert.ok(parsePhp(false, 'false'));
        });

        it('should return number when number', function () {
            assert.ok(parsePhp(0x0810, 'number'));
            assert.ok(parsePhp(new Number(0x0810), 'number'));
        });

        it('should return number when Date', function () {
            assert.ok(parsePhp(new Date(1987, 7, 10), 'date'));
        });

        it('should return number when Function', function () {
            var fun = function(){};
            fun.toString = function(){
                return 'FUNC0x0810';
            };
            assert.ok(parsePhp(fun, 'function'));
        });

        it('should return string when String', function () {
            assert.ok(parsePhp("'\"[]150&*^#$\\", 'string'));
        });

        it('should return string when RegExp', function () {
            assert.ok(parsePhp(/^\[\.\*\^\$\\\]\w\d$/img, 'regexp'));
        });

        it('should return array when Array', function () {
            assert.ok(parsePhp([1, false, 'foo'], 'array'));
        });

        it('should return array when Object', function () {
            assert.ok(parsePhp({
                name: 'yanni4night',
                gender: 'male'
            }, 'object'));
        });

        it('should return array when Mixed', function () {
            assert.ok(parsePhp({
                profile: {
                    favs: ['book'],
                    self: {
                        name: 'yanni4night'
                    }
                }
            }, 'mixed'));
        });
    });
});