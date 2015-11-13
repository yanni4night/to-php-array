<?php
/**
  * Copyright (C) 2015 tieba.baidu.com
  * array.php
  *
  * changelog
  * 2015-11-13[12:57:04]:revised
  *
  * @author yinyong02@baidu.com
  * @version 0.1.0
  * @since 0.1.0
  */
?><?php
$ret = include 'tmp.php';
if(!is_array($ret)) {
    echo 0;
} else {
    echo $ret[0] === 1 && false === $ret[1] && 'foo' === $ret[2] ? 1 : 0;
}
?>