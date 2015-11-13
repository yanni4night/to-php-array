/**
 * Copyright (C) 2015 yanni4night.com
 * to-php-array.js
 *
 * changelog
 * 2015-11-11[18:17:51]:revised
 *
 * @author yanni4night@baidu.com
 * @version 0.1.0
 * @since 0.1.0
 */

function repeat(str, n) {
    var ret = str;
    for (var i = 0; i < n - 1; ++i) {
        ret += str;
    }
    return ret;
}

function js2php(obj, indent) {
    indent = +indent || 4;

    if (indent < 0) {
        indent = 0;
    }

    var indentSpace = repeat(' ', indent);
    var nextIndext = indent + 4;

    if (null === obj || undefined === obj) {
        return 'NULL';
    } else if (true === obj) {
        return 'True';
    } else if (false === obj) {
        return 'False';
    } else if (obj.constructor === Number) {
        return Number(obj);
    } else if (obj.constructor === Date) {
        return +obj / 1e3 | 0;
    } else if (obj.constructor === RegExp) {
        return js2php(obj.source, indent);
    } else if (obj.constructor === String) {
        return '\'' + obj.replace(/\\/mg,'\\\\').replace(/'/mg, '\\\'') + '\'';
    } else if (Array.isArray(obj)) {
        var ret = [];
        for (var i = 0; i < obj.length; ++i) {
            if (js2php(obj[i])) {
                ret.push(js2php(obj[i], nextIndext));
            }
        }
        return 'array(\n' + indentSpace + ret.join(',\n' + indentSpace) + '\n' + ')';
    } else if ('function' === typeof obj) {
        return '';
    } else {
        ret = [];
        for (var e in obj) {
            if (js2php(obj[e])) {
                ret.push('\'' + e + '\' => ' + js2php(obj[e], nextIndext));
            }
        }

        return 'array(\n' + indentSpace + ret.join(',\n' + indentSpace) + '\n' + ')';
    }
}

module.exports = js2php;