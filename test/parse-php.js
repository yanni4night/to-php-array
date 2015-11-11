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

function compare(a,b){

}

module.exports = function () {
    var phpCode = toPHP.apply(null, arguments);
    require('fs').writeFileSync('tmp.php', '<?php return ' + phpCode + ';?>');
    var ret = JSON.parse(require('child_process').execSync('php ' + __dirname + '/echo.php'));
    console.log(ret);
    return ret;
};