$(()=>{
  $.ajax({
    type:"GET",
    url:"data/header.php",
    success:function(html){
      $("#header").html(html);
      var url=location.pathname;
      if(url.indexOf('/index.html')>0){
        $('#nav li:first-child a').addClass('hover');
      }else if(url.indexOf('product_list')>0){
        $('#nav li:nth-child(2) a').addClass('hover');
      }
      $('.hCart').hover(function(){
        $('.cart-card').toggleClass('show');
        console.log(1);
      })
      $('.hService').hover(function(){
        $('.user-service').toggleClass('show');
      })
      if(location.pathname.indexOf('cart.html')>0){
        $('#header-middle,#header-bottom').hide();
      }else if(location.pathname.indexOf('order.html')>0){
        $('#header-bottom').hide();
      }
      $.ajax({
        type:'GET',
        url:'data/user/checkLogin.php',
        success:function(data){
          if(data.uid){
            console.log(data);
            $('.uname a').html(data.uname+' <span class="fa fa-angle-down"></span>');
            $(".isLogin").css("display","inline-block");
            $(".notLogin").css("display","none");
          }
        },
        error:function(){
          alert('网络出现故障');
        }
      })
      //单击购物车事件
      $('[data-handle=cart]').click(function(e){
        e.preventDefault();
        $.ajax({
          type:'GET',
          url:'data/user/checkLogin.php',
          success:function(data){
            if(!data.uid){
              alert('您还未登录');
            }else{
              location="cart.html"
            }
          },
          error:function(){
            alert('网络出现故障');
          }
        })
      })
    },
    error:function(){
      alert("您的网络出现故障,请检查")
    }
  })
  //搜索框显示隐藏
  window.onscroll=function(){
    var h=document.documentElement.clientHeight*0.5;
    if(document.body.scrollTop>=h||document.documentElement.scrollTop>=h){
      if(location.path.indexOf('detail.html')==-1){
        $('.header-middle').css({
          position:'fixed',
          top:-20,
          zIndex:10
        })
      }
    }else{
      $('.header-middle').css({
        position:''
      })
    }
  }
})

