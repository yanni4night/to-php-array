<?php
/**
  * Copyright (C) 2015 tieba.baidu.com
  * regexp.php
  *
  * changelog
  * 2015-11-13[12:35:54]:revised
  *
  * @author yinyong02@baidu.com
  * @version 0.1.0
  * @since 0.1.0
  */
?>
<?php

$ret = include 'tmp.php';

echo strcmp('^\\[\\.\\*\\^\\$\\\\\\]\\w\\d$' , $ret) === 0 ? 1 : 0;

?>