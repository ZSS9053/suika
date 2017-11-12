<?php
/**
* 接收客户端提交的登录信息：name、pwd，执行登录验证；
* 登录失败：'{"code":201, "msg":"uname or upwd err"}'
* 登录成功：{"code":200, "msg":"check passed"}
*/
header("Content-Type:application/json;CHARSET=UTF-8");
session_start();
require_once("../init.php");
@$uname=$_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
@$upwd=$_REQUEST['upwd'] or die('{"code":402,"msg":"upwd required"}');
$sql="SELECT * FROM user WHERE uname='$uname' AND upwd='$upwd'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_assoc($result);
if($row){
  $_SESSION["uid"]=$row["uid"];
  $_SESSION["uname"]=$row["uname"];
  echo '{"code":200, "msg":"check passed"}';
}else{
  echo '{"code":201, "msg":"uname or upwd err"}';
}