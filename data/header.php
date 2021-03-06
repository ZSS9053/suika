<?php
header("Content-Type:text/html;charset=UTF-8");
?>
  <div class="main">
      <div id="top-header">
        <a href='index.html' class="home"><i class="fa fa-home"></i>  西瓜家首页</a>
        <ul class="user">
          <li class="isLogin uname" style="display:none;">
            <a href="">uname <span class="fa fa-angle-down"></span></a>
          </li>
          <li class="isLogin msg" style="display:none;">
            <a href="">消息</a>
          </li>
          <li class="isLogin" style="display:none;">
            <a href="">我的收藏 <span class="fa fa-angle-down"></span></a>
          </li>
          <li class="notLogin">
            <a href="login.html">   登录 </a>
            <a href="register.html"> 注册</a>
          </li>
          <li>
            <a href="404.html"><i class="fa fa-list-ul"></i> 我的订单</a>
          </li>
          <li>
            <a href="javascript:;" data-handle="cart" class="hCart"><i class="fa fa-shopping-cart header-cart"></i> 购物车</a>
          </li>
          <li>
            <a href="404.html" class="hService">客户服务 <i class="fa fa-angle-down"></i></a>
          </li>
        </ul>
        <div class="cart-card">
          <p>购物车里没有商品!</p>
        </div>
        <ul class="user-service">
          <li>消费者服务</li>
          <li>规则中心</li>
        </ul>
      </div>
      <div class="header-middle">
        <div id="header-middle" class="clear">
          <div id="logo">
            <a href="index.html">
              <img src="img/logo.png">
            </a>
          </div>
          <div id="search-div">
            <input type="text" id="search" placeholder="在这里输入您想要的"/>
            <div class="search" onclick="window.open('product_list.html','_blank');">搜索</div>
            <i class="fa fa-search search-ico"></i>
          </div>
          <div class="newUserTips">
            <a href="register.html">
              <img src="img/170906_4i69efg2cg9cli60a0kb9df254bi2_440x180.png" alt="">
            </a>
          </div>
        </div>
      </div>
      <div id="header-bottom">
        <ul id="nav" class="clear">
          <li class="lf">
            <a href="index.html">首页</a>
          </li>
          <li class="lf">
            <a href="product_list.html">所有商品</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">新品上新</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">连衣裙</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">衬衫/雪纺</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">针织衫</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">当季外套</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">裤装</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">T恤</a>
            <i></i>
          </li>
          <li class="lf">
            <a href="404.html">超值搭配购</a>
            <i></i>
          </li>
        </ul>
        <div id="cutLine">
          <p>欢迎光临西瓜家，我们将每周一/周四10点准时上新</p>
        </div>
      </div>
    </div>