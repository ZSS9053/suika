<?php
/**
* 接收客户端提交的uname，验证此用户名是否已经存在。
* 若不存在，则返回{"code":200, "msg":"non-exists"}
* 若存在，则返回{"code":201, "msg":"exists"}
*/
header("Content-Type:application/json;CHARSET=UTF-8");
@$uname=$_REQUEST['uname'] or die('{"code":401,"msg":"uname required"}');
require_once('../init.php');
$sql="SELECT COUNT(*) FROM user WHERE uname='$uname'";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($result);
if($row[0]>0){ //用户名已经存在
  echo '{"code":201, "msg":"exists"}';
}else{    //用户名不存在
  echo '{"code":200, "msg":"non-exists"}';
}
