<?php
header("Content-Type:text/html;charset=UTF-8");
?>
  <div class="main">
    <div id="header-top" class="clear">
      <div id="login" class="clear">
        <div class="rt">
          <div class="user"></div>
          <ul>
            <li class="lf"><a href="login.html">登录</a></li>
            <li class="lf">|</li>
            <li class="lf"><a href="register.html">注册</a></li>
          </ul>
      </div>
      </div>
    </div>
    <div id="header-middle">
      <div id="logo">
        <a href="index.html">
          <img src="img/logo.png">
        </a>
      </div>
      <div class="header-msg">
        <p class="font-sm">每周一/四19：00点</p>
        <p class="font-lg">微淘直播秀</p>
        <p class="font-sm">红包/福利/送/不/停</p>
      </div>
      <input type="text" id="search" placeholder="在这里输入您想要的"/>
      <div class="search" onclick="window.open('product_list.html','_blank');">搜索</div>
      <div id="msg">
        <p class="msg1">快·时·尚·潮·店</p>
        <p class="msg2">
          <span></span>
          <span>收藏店铺</span>
          <span></span>
          <span>即送五元</span>
        </p>
      </div>
    </div>
  </div>