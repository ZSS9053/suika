$(()=>{
  /*
   *注册表单验证
   * */
  var regName=/^[\u4e00-\u9fa5\w-]{4,20}$/;
  var regPwd=/^(?![a-z0-9]+$)(?![A-Z]+$)[A-Za-z0-9]{6,20}$/;
  function isReg(reg,str){
    return reg.test(str)
  }
  //定义验证函数
  function checkMsg(id,emptyMsg,errMsg,reg){
    $(id).blur(function(){
      var $tar=$(this);
      var $msg=$tar.next();
      var $err=$msg.children(':nth-child(2)');
      var $succ=$msg.children(':first');
      var val=$tar.val();
      if(val==""){
        $err.removeClass('hide').html(emptyMsg).siblings().addClass('hide');
      }else{
        var result=isReg(reg,val);
        if(result){
          if(id=="#uname"){
            $.get('data/user/checkName.php?uname='+val)
              .then((data)=>{
                if(data.code==200){//用户名不存在,可用
                  $succ.removeClass('hide').siblings().addClass('hide');
                }else{//用户名存在
                  $err.removeClass('hide').html('用户名存在').siblings().addClass('hide');
                }
              })
          }else{
            $succ.removeClass('hide').siblings().addClass('hide');
          }
        }else{
          $err.removeClass('hide').html(errMsg).siblings().addClass('hide');
        }
      }
    }).focus(function(){
      $(this).next().children(':nth-child(3)').removeClass('hide').siblings().addClass('hide');
      $(this).attr('placeholder','');
    })
  }
  checkMsg("#uname",'用户名不能为空','用户名格式不正确',regName);
  checkMsg("#upwd",'密码不能为空','密码格式不正确',regPwd);
  $("#checkPwd").focus(function(){
    var $tar=$(this);
    $tar.next().children(':nth-child(3)').removeClass('hide').siblings().addClass('hide');
    $tar.attr('placeholder','');
  }).blur(function(){
    var $msg=$(this).next();
    if($(this).val()==$("#upwd").val()){
      $msg.children(':first').removeClass('hide').siblings().addClass('hide');
    }else{
      $msg.children(':nth-child(2)').removeClass('hide').html('两次密码输入不一致').siblings().addClass('hide');
    }
  })
  //定义点击注册按钮时输入框为空需要提示的消息
  function isBtnAbled($id,msg){
    $id.next().children(':nth-child(2)').removeClass('hide').html(msg).siblings().addClass('hide');
  }
  //单击注册按钮事件
  $('[data-btn=register]').click(function(e){
    e.preventDefault();
    var $uname=$('#uname'),$upwd=$('#upwd'),$checkPwd=$('#checkPwd'),$checkbox=$('[data-type=checkbox]');
    if($uname.val()==''){
      isBtnAbled($uname,'用户名不能为空');
    }else if($upwd.val()==''){
      isBtnAbled($upwd,'密码不能为空');
    }else if($checkPwd.val()==''){
      isBtnAbled($checkPwd,'请再次输入密码');
    }else if(!$checkbox.prop('checked')){
      alert('请阅读并同意《服务协议》');
    }else{
      var succs=$('.msg').children('.succ');
      for(var i=0;i<succs.length;i++){
        if($(succs[i]).is('.hide')){
          var result=false;
          break;
        }
        result=true;
      }
      if(result){
        $.ajax({
          type:'POST',
          url:'data/user/register.php',
          data:{uname:$('#uname').val(),upwd:$('#upwd').val()},
          success:function(data){
            console.log(data.code);
            if(data.code==200){
              alert('注册成功,点击确定跳转登录页');
              setTimeout(function(){
                location='index.html';
              },1000)
            }
          },
          error:function(){
            alert('网络出现故障')
          }
        })
      }
    }
  })
})
