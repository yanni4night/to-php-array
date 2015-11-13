<?php
/**
  * Copyright (C) 2015 tieba.baidu.com
  * string.php
  *
  * changelog
  * 2015-11-13[12:34:20]:revised
  *
  * @author yinyong02@baidu.com
  * @version 0.1.0
  * @since 0.1.0
  */
?>
<?php

$ret = include 'tmp.php';

echo strcmp('\'"[]150&*^#$\\' , $ret) === 0 ? 1 : 0;

?>