<?php
/**
* 接收客户端提交的信息,注册用户
* 注册成功,返回''
*/
header('Content-Type:application/json;CHARSET=UTF-8');
require_once('../init.php');
@$uname=$_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd=$_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');
$sql="INSERT INTO user(uname,upwd,avatar) VALUES('$uname','$upwd','img/avatar.jpg')";
$result=mysqli_query($conn,$sql);
if($result&&mysqli_affected_rows($conn)>0){
  $uid=mysqli_insert_id($conn);
  echo '{"code":200, "msg":"register succ", "uid":'.$uid.'}';
}
