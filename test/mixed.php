<?php
/**
  * Copyright (C) 2015 tieba.baidu.com
  * mixed.php
  *
  * changelog
  * 2015-11-13[13:02:52]:revised
  *
  * @author yinyong02@baidu.com
  * @version 0.1.0
  * @since 0.1.0
  */
?><?php
$ret = include 'tmp.php';

echo isset($ret) && is_array($ret) && isset($ret['profile']) && is_array($ret['profile']) && isset($ret['profile']['favs']) && is_array($ret['profile']['favs']) && isset($ret['profile']['favs'][0]) && is_string($ret['profile']['favs'][0]) && !strcmp('book', $ret['profile']['favs'][0]) && isset($ret['profile']['self']) && is_array($ret['profile']['self']) && isset($ret['profile']['self']['name']) && is_string($ret['profile']['self']['name']) && !strcmp('yanni4night', $ret['profile']['self']['name']) ? 1 : 0;
?>