<?php
/**
  * Copyright (C) 2015 tieba.baidu.com
  * object.php
  *
  * changelog
  * 2015-11-13[12:58:42]:revised
  *
  * @author yinyong02@baidu.com
  * @version 0.1.0
  * @since 0.1.0
  */
?><?php
$ret = include 'tmp.php';

echo isset($ret) && is_array($ret) && strcmp($ret['name'], 'yanni4night') + strcmp($ret['gender'], 'male') === 0 ? 1 : 0;

?>