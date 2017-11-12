"use strict";
$(()=>{
  //页面初始化
  $(()=>{
    $.ajax({
      type:"GET",
      url:"data/header.php",
      success:function(html){
        $("#header").html(html);
        $("#header-bottom").remove();
      },
      error:function(){
        alert("您的网络出现故障,请检查")
      }
    })
  })
  $("#scan_code>img:first-child").mouseenter(function(){
    var $img=$(this);
    $img.next().css("display","block");
    $img.css("left",-130);
  }).mouseleave(function(e){
    var x=this.offsetLeft,x1=e.offsetX,w=this.offsetWidth;
    var $img=$(this),$img2=$img.next();
    if(x1>(x+w)){
      $img2.mouseleave(function(){
        $img2.css("display","none");
        $img.css("left",0);
        $img2.mouseleave=null;
      })
    }else{
      $img2.css("display","none");
      $img.css("left",0);
    }
  });
  $("#login-form>p").on("click","a",function(e){
    e.preventDefault();
    var $a=$(this),tar=$a.attr("href");
    $a.addClass("active").siblings().removeClass("active");
    $(tar).css("display","block").siblings("#form-login,#scan_code").css("display","none");
  })
  //登录请求
  $('#btn').click(function(e){
    e.preventDefault();
    var uname=$("#uname").val(),upwd=$('#upwd').val();
    if(uname==''){
      alert('用户名不能为空');
    }else if(upwd==''){
      alert('密码不能为空');
    }else{
      $.ajax({
        type:"POST",
        url:"data/user/login.php",
        data:{uname:uname,upwd:upwd},
        success:function(data){
          if(data.code==200){
            if(!history.go(-1)){
              location='index.html';
            }
          }else{
            console.log(1);
            alert('用户名或密码错误');
          }
        },
        error:function(){
          alert('网络出现故障')
        }
      })
    }
  })
})