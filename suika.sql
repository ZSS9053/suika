SET NAMES UTF8;
DROP DATABASE IF EXISTS suika;
CREATE DATABASE suika CHARSET=UTF8;
USE suika;
CREATE TABLE banner(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  bname VARCHAR(64),
  pic VARCHAR(128),
  url VARCHAR(128)
);
INSERT INTO banner VALUES
(NULL,"6-1上新","img/banner.jpg",'product_list.html'),
(NULL,"6-1上新","img/banner-2.png",'product_list.html'),
(NULL,"6-1上新","img/banner-3.png",'product_list.html'),
(NULL,"6-1上新","img/banner-4.png",'product_list.html');
CREATE TABLE user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),
  gender INT
);
INSERT INTO user VALUES
(NULL,'tom','123456','123@qq.com','138123456789','img/avatar.jpg',1),
(NULL,'jary','123456','123@qq.com','138123456789','img/avatar.jpg',1),
(NULL,'mary','123456','123@qq.com','138123456789','img/avatar.jpg',0),
(NULL,'king','123456','123@qq.com','138123456789','img/avatar.jpg',1);