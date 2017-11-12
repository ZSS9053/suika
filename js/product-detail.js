$(()=>{
  //动态加载左侧下面小图片,模态框下侧图片
  var picList=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg','images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg','images/10.jpg']
  var html="",html2="",len=picList.length;
  for(var i=0;i<picList.length;i++){
    var p=picList[i];
    html+=`<li class="img-item" data-toggle="img-item-${i}" style="background:url(${p});background-size:100%"></li>`;
    html2+=`<li class="img-item" data-toggle="img-item-${i}" style="background-image: url(${p});"></li>`;
  }
  //设置左边上标大图
  var w=97*picList.length,w2=147*picList.length;
  $('.piv-album .album-ul').html(html).css("width",w);
  $('.now-img').css({
    'background':`url(${picList[0]}) no-repeat`,
    "background-size":"100%"
  });
  //设置进入左侧小图区域时左右按钮状态
  $('.piv-album').hover(()=>{
    $('.piv-album .btn-next,.piv-album .btn-prev').toggleClass('opa1')
  })
  //设置左侧小图区域左右按钮鼠标移入移出效果
  $('.piv-album .btn-next,.piv-album .btn-prev').hover((e)=>{
    $(e.target).toggleClass('opa2');
  })
  //设置进入左侧上边图片区域中间的search按钮状态
  $('.piv-preview').hover(()=>{
    $('.zoom-in').toggleClass('opa')
    $('.piv-preview .btn-next,.piv-preview .btn-prev').toggleClass('opa')
  })
  
  //模态框 close按钮鼠标移入移出效果
  $('.btn-close').hover(function(){
    $(this).toggleClass('opa3')
  })
  //模态框隐藏显示设置
  $('.zoom-in').click(function(){
    $('#detail-show').css("display","block");
    $('#detail-show .album-ul').html(html2).css("width",w2);
    var index=parseInt($('.now-img').attr('data-toggle').slice(8));
    $('.zoom-box img').attr("src",picList[index]).attr('data-toggle','img-'+index);
    $('.img-desc span').html(`${index+1}/${picList.length}:`)
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active');
  })
  $('.btn-close').click(function(){
    $('#detail-show').css("display","none");
  })
  $('.detail-show-bg').click(function(){
    $('#detail-show').css("display","none");
  })
  //图片列表滑动效果
  $('.piv-album .album-ul').on('mouseenter','.img-item',function(){
    var index=$(this).attr("data-toggle").slice(9);
    $('.now-img').css({
      'background':`url(${picList[index]}) no-repeat`,
      "background-size":"100%"
    });
  })
  $('#detail-show .album-ul').on('click','.img-item',function(){
    var index=parseInt($(this).attr("data-toggle").slice(9));
    $('.zoom-box img').attr("src",picList[index]);
    $('.img-desc span').html(`${index+1}/${picList.length}:`)
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active');
  })
  //右侧大图下一张按钮
  $('.piv-preview .btn-next').click(function(){
    var index=parseInt($('.now-img').attr('data-toggle').slice(8));
    if(index<len-1){
      index++;
    }else{
      index=0
    }
    $('.now-img').attr('data-toggle',`now-img-${index}`);
    $('.now-img').css({
      'background':`url(${picList[index]}) no-repeat`,
      "background-size":"100%"
    });
    if(index%4===0){
      $('.piv-album .album-ul').css("left",-index*97);
    }
  })
  //右侧大图上一张按钮
  $('.piv-preview .btn-prev').click(function(){
    var index=parseInt($('.now-img').attr('data-toggle').slice(8));
    if(index>0){
      index--;
    }else{
      index=len-1;
    }
    $('.now-img').attr('data-toggle',`now-img-${index}`);
    $('.now-img').css({
      'background':`url(${picList[index]}) no-repeat`,
      "background-size":"100%"
    });
    if((index+1)%4===0){
      $('.piv-album .album-ul').css("left",-(index-3)*97);
    }
  })
  //右侧图片列表下一页按钮
  $('.piv-album .btn-next').click(function(){
    var oldLeft=$('.piv-album .album-ul').css("left").slice(0,-2);
    if(parseInt(-oldLeft/97/4)<(parseInt(len/4-1))){
      var newLeft=oldLeft-97*4;
      $('.piv-album .album-ul').css("left",newLeft);
    }
  })
  //右侧图片列表上一页按钮
  $('.piv-album .btn-prev').click(function(){
    var oldLeft=parseInt($('.piv-album .album-ul').css("left").slice(0,-2));
    if(parseInt(-oldLeft/97/4)>0){
      var newLeft=oldLeft+97*4;
      $('.piv-album .album-ul').css("left",newLeft);
    }
  })
  //模态框大图下一张按钮
  $('.zoom-view .btn-next').click(function(){
    var index=parseInt($('.zoom-box img').attr('data-toggle').slice(4));
    if(index<len-1){
      index++;
    }else{
      index=0
    }
    $('.zoom-box img').attr("src",picList[index]).attr('data-toggle','img-'+index);
    $('.img-desc span').html(`${index+1}/${picList.length}:`)
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active');
    if(index%6===0){
      $('#detail-show .album-ul').css("left",-index*147);
    }
  })
  //模态框大图上一张按钮
  $('.zoom-view .btn-prev').click(function(){
    var index=parseInt($('.zoom-box img').attr('data-toggle').slice(4));
    if(index>0){
      index--;
    }else{
      index=len-1;
    }
    $('.zoom-box img').attr("src",picList[index]).attr('data-toggle','img-'+index);
    $('.img-desc span').html(`${index+1}/${picList.length}:`);
    $(`#detail-show [data-toggle=img-item-${index}]`).addClass('active').siblings().removeClass('active')
    if((index+1)%6===0){
      $('#detail-show .album-ul').css("left",-(index-5)*147);
    }else if(index==len-1){
      var i=index%6;
      $('#detail-show .album-ul').css("left",-(index-i)*147);
    }
  })
})