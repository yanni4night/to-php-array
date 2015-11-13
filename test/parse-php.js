/**
 * Copyright (C) 2015 yanni4night.com
 * parse-php.js
 *
 * changelog
 * 2015-11-11[18:36:02]:revised
 *
 * @author yanni4night@baidu.com
 * @version 0.1.0
 * @since 0.1.0
 */

var toPHP = require('../');

module.exports = function (variable, checker, indent) {
    var phpCode = toPHP(variable, indent);
    require('fs').writeFileSync(__dirname + '/tmp.php', '<?php return ' + phpCode + ';?>');
    var ret = require('child_process').execSync('php ' + __dirname + '/' + checker + '.php').toString();
    return ret === '1';
};