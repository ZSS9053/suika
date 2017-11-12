<?php
header("Content-Type:application/json;charset=utf-8");
session_start();
@$output['uid'] = $_SESSION['uid'];
@$output['uname'] = $_SESSION['uname'];

echo json_encode($output);