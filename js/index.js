$(()=>{
  /*
  * 轮播效果
  * WIDTH:轮播图片的宽度
  * n:轮播图片数量
  * i:图片正在显示的下标
  * timer:自动轮播定时器序号
  * */
  var WIDTH,n,i=0,timer=null,interval=2000,trans=300;
  var $banner=$("#banner-show"),$die=$("#direction"),$dots;
  //轮播一次的函数
  function moveNext(){
    i++;
    $banner.css("left",-i*WIDTH);
    $dots[i-1].className="";
    if(i==n-1){
      $dots[0].className="hover";
      setTimeout(function(){
        $banner.css('transition',"all 0s linear");
        $banner.css("left",0);
        i=0;
        setTimeout(function(){
          $banner.css('transition',"all .3s linear");
        },100)
      },trans)
    }else{
      $dots[i].className="hover";
    }
  }
  function movePrev(){
    if(i==0){
      $banner.css('transition',"all 0s linear");
      $banner.css('left',-(n-1)*WIDTH);
      i=n-1;
      setTimeout(function(){
        $banner.css('transition',"all .3s linear");
        i--;
        $banner.css('left',-i*WIDTH);
        $dots[i].className="hover";
        $dots[0].className="";
      },100)
    }else{
      i--;
      $banner.css('left',-i*WIDTH);
      $dots[i].className="hover";
      $dots[i+1].className="";
    }
  }
  $.ajax({
    type:"GET",
    url:"data/banner.php",
    success:function(data){
      n=data.length;
      data.push(data[0]);
      var html="";
      var dots='';
      for(var b of data){
        html+=`<a href="${b.url}"><img src="${b.pic}"></a>`;
      }
      for(var j=0;j<n;j++){
        dots+=`<li></li>`
      }
      $banner.html(html);
      // WIDTH=parseInt($("#banner").css("width"));
      // $("#banner-show img").css("width",WIDTH);
      // $banner.css("width",(n+1)*WIDTH);
      html=`<a href="#" class="ck-slide ck-left" data-move="left"></a>
          <a href="#" class="ck-slide ck-right" data-move="right"></a>`;
      $die.html(html);
      $("#banner ul.nav-dot").html(dots)/*.css("width",0.2*WIDTH)*/;
      n++;
      WIDTH=window.innerWidth;
      $dots=$('.nav-dot li');
      $dots[0].className="hover";
      $('[data-move=right]').click(moveNext)
      $('[data-move=left]').click(movePrev)
      for(var j=0;j<n-1;j++){
        (function(){
          var i=j;
          $($dots[i]).click(function(e){
            $banner.css('left',-i*WIDTH);
            $(e.target).addClass("hover").siblings().removeClass('hover');
          })
        })();
      }
    },
    error:function(){
      alert('网络出现故障,请检查');
    }
  });
  //屏幕变化的处理
  window.onresize=function(){
    WIDTH=window.innerWidth;
    $banner.css('transition',"");
    if(i<n){
      $banner.css("left",-i*WIDTH);
    }else{
      $banner.css("left",0);
    }
    setTimeout(function(){
      $banner.css('transition',"all .3s linear");
    },100)
  }
  timer=setInterval(moveNext,interval+trans)
  /*
  * 鼠标移入轮播图暂停
  * */
  $('#banner').mouseover(function(){
    clearInterval(timer);
    timer=null;
  }).mouseout(function(){
    timer=setInterval(moveNext,interval+trans);
  })
  //侧边栏显示隐藏
  window.onscroll=function(){
    var h=document.documentElement.clientHeight*0.5;
    if(document.body.scrollTop>=h||document.documentElement.scrollTop>=h){
      $('#nav-aside').css('display','block');
      $('.header-middle').css({
        position:'fixed',
        top:-20,
        zIndex:10
      })
    }else{
      $('#nav-aside').css('display','none');
      $('.header-middle').css({
        position:''
      })
    }
  }
  //左下弹窗关闭
  $('.close').click(function(e){
    $(this).parent().hide();
  })
  // //单击固定定位购物车事件
  // $('[data-handle=cart]').click(function(e){
  //   e.preventDefault();
  //   $.ajax({
  //     type:'GET',
  //     url:'data/user/checkLogin.php',
  //     success:function(data){
  //       if(!data.uid){
  //         alert('您还未登录');
  //       }else{
  //         location="cart.html"
  //       }
  //     },
  //     error:function(){
  //       alert('网络出现故障');
  //     }
  //   })
  // })
})