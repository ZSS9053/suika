<?php
header("Content-Type:application/json;charset=utf-8");
require_once("init.php");
$sql='SELECT pic,url FROM banner';
$result=mysqli_query($conn,$sql);
$rows=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($rows);