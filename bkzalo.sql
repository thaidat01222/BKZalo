-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 13, 2021 at 04:44 AM
-- Server version: 10.1.13-MariaDB
-- PHP Version: 7.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bkzalo`
--

-- --------------------------------------------------------

--
-- Table structure for table `lastchat`
--

CREATE TABLE `lastchat` (
  `fromEmail` varchar(25) NOT NULL,
  `toEmail` varchar(25) NOT NULL,
  `messageID` int(11) NOT NULL,
  `sentTime` datetime NOT NULL,
  `id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lastchat`
--

INSERT INTO `lastchat` (`fromEmail`, `toEmail`, `messageID`, `sentTime`, `id`) VALUES
('admin@gmail.com', 'ntkhoi@gmail.com', 1294, '2021-08-10 00:06:28', 50),
('admin@gmail.com', 'thaidat01222@gmail.com', 1296, '2021-08-10 00:14:44', 52),
('admin@gmail.com', 'phanhien203@gmail.com', 1297, '2021-08-10 00:15:14', 53),
('admin@gmail.com', 'mark.hudson@example.com', 1298, '2021-08-10 00:16:06', 54),
('admin@gmail.com', 'ross.torres@example.com', 1299, '2021-08-10 00:18:43', 55),
('admin@gmail.com', 'calvin.gonzalez@example.c', 1300, '2021-08-10 00:25:49', 56),
('admin@gmail.com', 'percyusjasson@gmail.com', 1301, '2021-08-10 00:31:55', 57),
('admin@gmail.com', 'mamamia@gmail.com', 1302, '2021-08-10 00:33:59', 58),
('calvin.gonzalez@example.c', 'mark.hudson@example.com', 1303, '2021-08-10 00:35:39', 59),
('admin@gmail.com', 'chester.dixon@example.com', 1304, '2021-08-10 00:35:50', 60),
('thaidat01222@gmail.com', 'phanhien203@gmail.com', 1469, '2021-08-13 09:40:27', 61),
('admin@gmail.com', 'carole.green@example.com', 1306, '2021-08-10 00:38:36', 62),
('admin@gmail.com', 'davidharries@gmail.com', 1307, '2021-08-10 00:39:35', 63),
('admin@gmail.com', 'darlene.andrews@example.c', 1308, '2021-08-10 00:39:46', 64),
('admin@gmail.com', 'darlene.andrews@example.c', 1309, '2021-08-10 00:50:09', 65),
('admin@gmail.com', 'darlene.reed@example.com', 1310, '2021-08-10 00:51:43', 66),
('admin@gmail.com', 'darlene.reed@example.com', 1311, '2021-08-10 00:52:26', 67),
('admin@gmail.com', 'darlene.reed@example.com', 1312, '2021-08-10 00:53:13', 68),
('admin@gmail.com', 'hary@gmail.com', 1313, '2021-08-10 00:55:09', 69),
('admin@gmail.com', 'hary@gmail.com', 1314, '2021-08-10 00:55:09', 70),
('admin@gmail.com', 'herry@gmail.com', 1315, '2021-08-10 00:55:37', 71),
('admin@gmail.com', 'darlene.reed@example.com', 1316, '2021-08-10 00:57:04', 72),
('admin@gmail.com', 'henry@gmail.com', 1317, '2021-08-10 01:01:35', 73),
('admin@gmail.com', 'lena.peters@example.com', 1318, '2021-08-10 01:01:36', 74),
('admin@gmail.com', 'elmer.foster@example.com', 1319, '2021-08-10 01:03:20', 75),
('admin@gmail.com', '1@gmail.com', 1320, '2021-08-10 01:04:47', 76),
('admin@gmail.com', 'brooklyn.soto@example.com', 1321, '2021-08-10 01:05:13', 77),
('admin@gmail.com', 'joshua.holmes@example.com', 1322, '2021-08-10 01:06:38', 78),
('admin@gmail.com', '2', 1323, '2021-08-10 01:07:01', 79),
('admin@gmail.com', 'arnold.ferguson@example.c', 1324, '2021-08-10 01:10:13', 80),
('admin@gmail.com', 'dale.hayes@example.com', 1325, '2021-08-10 01:12:41', 81),
('phanhien203@gmail.com', 'dale.hayes@example.com', 1348, '2021-08-10 01:19:45', 82),
('phanhien203@gmail.com', 'lena.peters@example.com', 1400, '2021-08-12 16:20:48', 83),
('admin@gmail.com', 'e@gmail.com', 1379, '2021-08-10 11:02:55', 84),
('admin@gmail.com', 'a@gmail.com', 1385, '2021-08-12 15:24:03', 88),
('thaidat01222@gmail.com', 'a@gmail.com', 1435, '2021-08-12 16:46:48', 89),
('a@gmail.com', 'phanhien203@gmail.com', 1404, '2021-08-12 16:32:42', 90),
('a@gmail.com', 'mamamia@gmail.com', 1396, '2021-08-12 16:15:35', 91),
('a@gmail.com', 'davidharries@gmail.com', 1450, '2021-08-12 17:00:42', 92),
('a@gmail.com', 'ross.torres@example.com', 1411, '2021-08-12 16:40:27', 93),
('a@gmail.com', 'chester.dixon@example.com', 1403, '2021-08-12 16:31:27', 94),
('a@gmail.com', 'carole.green@example.com', 1437, '2021-08-12 16:48:17', 95),
('a@gmail.com', 'joshua.holmes@example.com', 1405, '2021-08-12 16:36:25', 96),
('brooklyn.soto@example.com', 'a@gmail.com', 1438, '2021-08-12 16:54:20', 97),
('brooklyn.soto@example.com', 'phanhien203@gmail.com', 1446, '2021-08-12 16:58:55', 98),
('admin@gmail.com', 'rooney@gmail.com', 1451, '2021-08-12 17:02:16', 99),
('rooney@gmail.com', 'a@gmail.com', 1462, '2021-08-12 17:06:02', 100),
('admin@gmail.com', 'mr.wick@gmail.com', 1463, '2021-08-12 17:07:25', 101),
('mr.wick@gmail.com', 'a@gmail.com', 1468, '2021-08-12 17:12:25', 102);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `messageID` int(11) NOT NULL,
  `fromEmail` varchar(55) NOT NULL,
  `toEmail` varchar(55) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `image` text NOT NULL,
  `contentType` varchar(10) NOT NULL,
  `seenTime` date NOT NULL,
  `sentTime` datetime NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`messageID`, `fromEmail`, `toEmail`, `content`, `image`, `contentType`, `seenTime`, `sentTime`, `status`) VALUES
(1296, 'admin@gmail.com', 'thaidat01222@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:14:44', 'sent'),
(1297, 'admin@gmail.com', 'phanhien203@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:15:14', 'sent'),
(1298, 'admin@gmail.com', 'mark.hudson@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:16:06', 'sent'),
(1299, 'admin@gmail.com', 'ross.torres@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:18:43', 'sent'),
(1301, 'admin@gmail.com', 'percyusjasson@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:31:55', 'sent'),
(1302, 'admin@gmail.com', 'mamamia@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:33:59', 'sent'),
(1303, 'calvin.gonzalez@example.c', 'mark.hudson@example.com', 'Heyyy', 'null', 'text', '0000-00-00', '2021-08-10 00:35:39', 'sent'),
(1304, 'admin@gmail.com', 'chester.dixon@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:35:50', 'sent'),
(1306, 'admin@gmail.com', 'carole.green@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:38:36', 'sent'),
(1307, 'admin@gmail.com', 'davidharries@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:39:35', 'sent'),
(1313, 'admin@gmail.com', 'hary@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:55:08', 'sent'),
(1314, 'admin@gmail.com', 'hary@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:55:08', 'sent'),
(1315, 'admin@gmail.com', 'herry@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:55:37', 'sent'),
(1316, 'admin@gmail.com', 'darlene.reed@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 00:57:04', 'sent'),
(1317, 'admin@gmail.com', 'henry@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:01:35', 'sent'),
(1318, 'admin@gmail.com', 'lena.peters@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:01:36', 'sent'),
(1319, 'admin@gmail.com', 'elmer.foster@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:03:20', 'sent'),
(1320, 'admin@gmail.com', '1@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:04:47', 'sent'),
(1321, 'admin@gmail.com', 'brooklyn.soto@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:05:13', 'sent'),
(1322, 'admin@gmail.com', 'joshua.holmes@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:06:38', 'sent'),
(1323, 'admin@gmail.com', '2', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:07:01', 'sent'),
(1325, 'admin@gmail.com', 'dale.hayes@example.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 01:12:41', 'sent'),
(1347, 'phanhien203@gmail.com', 'dale.hayes@example.com', 'hi', 'null', 'text', '0000-00-00', '2021-08-10 01:19:33', 'sent'),
(1348, 'phanhien203@gmail.com', 'dale.hayes@example.com', 'khỏe không bạn?', 'null', 'text', '0000-00-00', '2021-08-10 01:19:45', 'sent'),
(1350, 'phanhien203@gmail.com', 'lena.peters@example.com', 'này', 'null', 'text', '0000-00-00', '2021-08-10 01:20:02', 'sent'),
(1352, 'phanhien203@gmail.com', 'lena.peters@example.com', 'lâu rồi không gặp', 'null', 'text', '0000-00-00', '2021-08-10 01:20:23', 'sent'),
(1379, 'admin@gmail.com', 'e@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-10 11:02:55', 'sent'),
(1385, 'admin@gmail.com', 'a@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-12 15:24:03', 'sent'),
(1386, 'a@gmail.com', 'thaidat01222@gmail.com', 'Chào bạn!', 'null', 'text', '0000-00-00', '2021-08-12 16:00:36', 'sent'),
(1387, 'a@gmail.com', 'phanhien203@gmail.com', 'Hello', '', 'text', '0000-00-00', '2021-08-12 16:00:49', 'received'),
(1388, 'phanhien203@gmail.com', 'a@gmail.com', 'Hi', '', 'text', '0000-00-00', '2021-08-12 16:00:59', 'received'),
(1389, 'a@gmail.com', 'phanhien203@gmail.com', 'Nice to meet you', '', 'text', '0000-00-00', '2021-08-12 16:01:16', 'received'),
(1390, 'phanhien203@gmail.com', 'a@gmail.com', 'Nice to meet you too!', '', 'text', '0000-00-00', '2021-08-12 16:01:30', 'received'),
(1391, 'a@gmail.com', 'phanhien203@gmail.com', 'You look so beautiful ', '', 'text', '0000-00-00', '2021-08-12 16:01:49', 'received'),
(1392, 'phanhien203@gmail.com', 'a@gmail.com', 'Oh', '', 'text', '0000-00-00', '2021-08-12 16:01:59', 'received'),
(1393, 'phanhien203@gmail.com', 'a@gmail.com', 'Thanks', '', 'text', '0000-00-00', '2021-08-12 16:02:07', 'received'),
(1394, 'a@gmail.com', 'phanhien203@gmail.com', 'Your appearance like a goddess!', '', 'text', '0000-00-00', '2021-08-12 16:03:00', 'received'),
(1395, 'a@gmail.com', 'phanhien203@gmail.com', 'Goddess of beauty', '', 'text', '0000-00-00', '2021-08-12 16:03:59', 'received'),
(1396, 'a@gmail.com', 'mamamia@gmail.com', 'Hey it is a great song of ABBA', 'null', 'text', '0000-00-00', '2021-08-12 16:15:35', 'sent'),
(1397, 'a@gmail.com', 'davidharries@gmail.com', 'Are you a fan of One Direction?', 'null', 'text', '0000-00-00', '2021-08-12 16:16:00', 'sent'),
(1398, 'a@gmail.com', 'ross.torres@example.com', 'Ross, did you missed Rachel at airport?', 'null', 'text', '0000-00-00', '2021-08-12 16:18:11', 'sent'),
(1399, 'a@gmail.com', 'chester.dixon@example.com', 'Hey, how you doin', 'null', 'text', '0000-00-00', '2021-08-12 16:20:12', 'sent'),
(1400, 'phanhien203@gmail.com', 'lena.peters@example.com', '', '/image/chat/bede0cf7689046a9cae67115b6fe488525bee6a2.jpeg', 'image', '0000-00-00', '2021-08-12 16:20:48', 'sent'),
(1401, 'a@gmail.com', 'carole.green@example.com', 'Do you know somebody name Rachel?', 'null', 'text', '0000-00-00', '2021-08-12 16:20:53', 'sent'),
(1402, 'a@gmail.com', 'carole.green@example.com', '', '/image/chat/37a67112d490a7c5e7d3e9f69af61fa69840172f.jpeg', 'image', '0000-00-00', '2021-08-12 16:23:10', 'sent'),
(1403, 'a@gmail.com', 'chester.dixon@example.com', '', '/image/chat/81322cd8c4efe003e05315aad4b1bf7a4fffdf0a.png', 'image', '0000-00-00', '2021-08-12 16:31:27', 'sent'),
(1404, 'a@gmail.com', 'phanhien203@gmail.com', 'Oh my god, I love you ', '', 'text', '0000-00-00', '2021-08-12 16:32:42', 'received'),
(1405, 'a@gmail.com', 'joshua.holmes@example.com', 'Hiii', 'null', 'text', '0000-00-00', '2021-08-12 16:36:25', 'sent'),
(1406, 'ross.torres@example.com', 'a@gmail.com', 'Noooo', 'null', 'text', '0000-00-00', '2021-08-12 16:37:27', 'sent'),
(1407, 'ross.torres@example.com', 'a@gmail.com', 'We were on a break!!!!', 'null', 'text', '0000-00-00', '2021-08-12 16:37:39', 'sent'),
(1408, 'a@gmail.com', 'ross.torres@example.com', 'hum?!', '', 'text', '0000-00-00', '2021-08-12 16:38:01', 'received'),
(1409, 'ross.torres@example.com', 'a@gmail.com', '', '/image/chat/25f42b65ee00666597b2.jpeg', 'image', '0000-00-00', '2021-08-12 16:39:31', 'received'),
(1410, 'a@gmail.com', 'ross.torres@example.com', 'i do not understand', '', 'text', '0000-00-00', '2021-08-12 16:40:03', 'received'),
(1411, 'a@gmail.com', 'ross.torres@example.com', 'what is it mean?', '', 'text', '0000-00-00', '2021-08-12 16:40:27', 'received'),
(1412, 'carole.green@example.com', 'a@gmail.com', 'He is right!', '', 'text', '0000-00-00', '2021-08-12 16:40:58', 'received'),
(1413, 'carole.green@example.com', 'a@gmail.com', 'We were on a break!', '', 'text', '0000-00-00', '2021-08-12 16:41:06', 'received'),
(1414, 'carole.green@example.com', 'a@gmail.com', 'Just believe him LOL', '', 'text', '0000-00-00', '2021-08-12 16:41:13', 'received'),
(1415, 'a@gmail.com', 'carole.green@example.com', 'hey', '', 'text', '0000-00-00', '2021-08-12 16:41:36', 'received'),
(1416, 'carole.green@example.com', 'a@gmail.com', 'yeah, i am here', '', 'text', '0000-00-00', '2021-08-12 16:41:45', 'received'),
(1417, 'a@gmail.com', 'carole.green@example.com', 'your avatar', '', 'text', '0000-00-00', '2021-08-12 16:42:08', 'received'),
(1418, 'carole.green@example.com', 'a@gmail.com', 'you made that userpartner so azaming', '', 'text', '0000-00-00', '2021-08-12 16:42:13', 'received'),
(1419, 'carole.green@example.com', 'a@gmail.com', 'yeah', '', 'text', '0000-00-00', '2021-08-12 16:42:30', 'received'),
(1420, 'a@gmail.com', 'carole.green@example.com', 'can you send me?', '', 'text', '0000-00-00', '2021-08-12 16:42:39', 'received'),
(1421, 'carole.green@example.com', 'a@gmail.com', 'Ok', '', 'text', '0000-00-00', '2021-08-12 16:42:54', 'received'),
(1422, 'carole.green@example.com', 'a@gmail.com', 'gimme a sec, please', '', 'text', '0000-00-00', '2021-08-12 16:43:03', 'received'),
(1423, 'carole.green@example.com', 'a@gmail.com', '', '/image/chat/ef04775480db261d0ce4.jpeg', 'image', '0000-00-00', '2021-08-12 16:43:33', 'received'),
(1424, 'a@gmail.com', 'carole.green@example.com', 'okey', '', 'text', '0000-00-00', '2021-08-12 16:43:54', 'received'),
(1425, 'carole.green@example.com', 'a@gmail.com', 'why you want  that photo ?', '', 'text', '0000-00-00', '2021-08-12 16:44:10', 'received'),
(1426, 'thaidat01222@gmail.com', 'a@gmail.com', 'Ya halo', '', 'text', '0000-00-00', '2021-08-12 16:44:58', 'received'),
(1427, 'a@gmail.com', 'carole.green@example.com', 'it make me smile', 'null', 'text', '0000-00-00', '2021-08-12 16:45:02', 'sent'),
(1428, 'a@gmail.com', 'thaidat01222@gmail.com', 'tại sao bạn lại đặt tên tôi là Naruto', 'null', 'text', '0000-00-00', '2021-08-12 16:45:25', 'sent'),
(1429, 'a@gmail.com', 'thaidat01222@gmail.com', 'tôi không thích cái tên đó', 'null', 'text', '0000-00-00', '2021-08-12 16:45:34', 'sent'),
(1430, 'carole.green@example.com', 'a@gmail.com', 'haha, that is so incredible ', '', 'text', '0000-00-00', '2021-08-12 16:46:03', 'received'),
(1431, 'carole.green@example.com', 'a@gmail.com', 'I miss you so much', '', 'text', '0000-00-00', '2021-08-12 16:46:08', 'received'),
(1432, 'a@gmail.com', 'carole.green@example.com', 'LOL', 'null', 'text', '0000-00-00', '2021-08-12 16:46:30', 'sent'),
(1433, 'thaidat01222@gmail.com', 'a@gmail.com', 'Tên này ngầu lắm ấy', '', 'text', '0000-00-00', '2021-08-12 16:46:31', 'received'),
(1434, 'a@gmail.com', 'thaidat01222@gmail.com', 'chắc là ngầu', '', 'text', '0000-00-00', '2021-08-12 16:46:47', 'received'),
(1435, 'thaidat01222@gmail.com', 'a@gmail.com', 'Đó là tên của một vị anh hùng đã giải cứu thế giới ', '', 'text', '0000-00-00', '2021-08-12 16:46:48', 'received'),
(1436, 'carole.green@example.com', 'a@gmail.com', 'I miss LOL too, but miss you more alot ', '', 'text', '0000-00-00', '2021-08-12 16:47:55', 'received'),
(1437, 'a@gmail.com', 'carole.green@example.com', ':)', '', 'text', '0000-00-00', '2021-08-12 16:48:17', 'received'),
(1438, 'brooklyn.soto@example.com', 'a@gmail.com', 'Hey', 'null', 'text', '0000-00-00', '2021-08-12 16:54:20', 'sent'),
(1439, 'brooklyn.soto@example.com', 'phanhien203@gmail.com', 'Hey', '', 'text', '0000-00-00', '2021-08-12 16:54:46', 'received'),
(1440, 'davidharries@gmail.com', 'a@gmail.com', 'Yeahhhh', 'null', 'text', '0000-00-00', '2021-08-12 16:56:48', 'sent'),
(1441, 'davidharries@gmail.com', 'a@gmail.com', 'They are the best boy band ever', 'null', 'text', '0000-00-00', '2021-08-12 16:56:59', 'sent'),
(1442, 'davidharries@gmail.com', 'a@gmail.com', '', '/image/chat/bc14e2d0babac1c63f3745049d3a204108688068.jpeg', 'image', '0000-00-00', '2021-08-12 16:58:14', 'sent'),
(1443, 'davidharries@gmail.com', 'a@gmail.com', 'see?', 'null', 'text', '0000-00-00', '2021-08-12 16:58:20', 'sent'),
(1444, 'brooklyn.soto@example.com', 'phanhien203@gmail.com', 'I love you ', '', 'text', '0000-00-00', '2021-08-12 16:58:44', 'received'),
(1445, 'brooklyn.soto@example.com', 'phanhien203@gmail.com', '<3 ', '', 'text', '0000-00-00', '2021-08-12 16:58:46', 'received'),
(1446, 'brooklyn.soto@example.com', 'phanhien203@gmail.com', 'Gimme attention please :<', '', 'text', '0000-00-00', '2021-08-12 16:58:55', 'received'),
(1447, 'davidharries@gmail.com', 'a@gmail.com', '', '/image/chat/17474b6cc76873c772f574b85ccda5703302dbb9.jpeg', 'image', '0000-00-00', '2021-08-12 16:59:35', 'sent'),
(1448, 'a@gmail.com', 'davidharries@gmail.com', 'One direction is good', 'null', 'text', '0000-00-00', '2021-08-12 17:00:27', 'sent'),
(1449, 'a@gmail.com', 'davidharries@gmail.com', 'But westlife is better', 'null', 'text', '0000-00-00', '2021-08-12 17:00:36', 'sent'),
(1450, 'a@gmail.com', 'davidharries@gmail.com', '', '/image/chat/5d086c61e6b5bdb275726d34abc4bc94e410dcb5.jpeg', 'image', '0000-00-00', '2021-08-12 17:00:42', 'sent'),
(1451, 'admin@gmail.com', 'rooney@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-12 17:02:16', 'sent'),
(1452, 'rooney@gmail.com', 'a@gmail.com', 'Hey', '', 'text', '0000-00-00', '2021-08-12 17:03:40', 'received'),
(1453, 'a@gmail.com', 'rooney@gmail.com', 'Oh my god', '', 'text', '0000-00-00', '2021-08-12 17:03:51', 'received'),
(1454, 'a@gmail.com', 'rooney@gmail.com', 'Wayne Rooney???', '', 'text', '0000-00-00', '2021-08-12 17:03:56', 'received'),
(1455, 'a@gmail.com', 'rooney@gmail.com', 'It is real rooney???', '', 'text', '0000-00-00', '2021-08-12 17:04:12', 'received'),
(1456, 'a@gmail.com', 'rooney@gmail.com', 'Oh my god ', '', 'text', '0000-00-00', '2021-08-12 17:04:16', 'received'),
(1457, 'a@gmail.com', 'rooney@gmail.com', 'I am a big fan of you', '', 'text', '0000-00-00', '2021-08-12 17:04:22', 'received'),
(1458, 'a@gmail.com', 'rooney@gmail.com', 'You are my idol ', '', 'text', '0000-00-00', '2021-08-12 17:04:26', 'received'),
(1459, 'a@gmail.com', 'rooney@gmail.com', '', '/image/chat/e63c7a7c0ed3791fa2c3.jpeg', 'image', '0000-00-00', '2021-08-12 17:05:06', 'received'),
(1460, 'a@gmail.com', 'rooney@gmail.com', 'This moment i will never forget ', '', 'text', '0000-00-00', '2021-08-12 17:05:18', 'received'),
(1461, 'rooney@gmail.com', 'a@gmail.com', 'take it easy bro ', '', 'text', '0000-00-00', '2021-08-12 17:05:29', 'received'),
(1462, 'rooney@gmail.com', 'a@gmail.com', 'I am so happy when I have a fan like you ', '', 'text', '0000-00-00', '2021-08-12 17:06:02', 'received'),
(1463, 'admin@gmail.com', 'mr.wick@gmail.com', 'Welcome to BKZalo!!!', 'undefined', 'text', '0000-00-00', '2021-08-12 17:07:25', 'sent'),
(1464, 'mr.wick@gmail.com', 'a@gmail.com', 'Heyyyyyy', '', 'text', '0000-00-00', '2021-08-12 17:07:34', 'received'),
(1465, 'a@gmail.com', 'mr.wick@gmail.com', 'Omg', '', 'text', '0000-00-00', '2021-08-12 17:10:07', 'received'),
(1466, 'a@gmail.com', 'mr.wick@gmail.com', 'What I have done with you', '', 'text', '0000-00-00', '2021-08-12 17:10:36', 'received'),
(1467, 'a@gmail.com', 'mr.wick@gmail.com', 'I treat very good with your dog !!!', '', 'text', '0000-00-00', '2021-08-12 17:10:58', 'received'),
(1468, 'mr.wick@gmail.com', 'a@gmail.com', 'You were nice to my dog, but not to dog of someone else', '', 'text', '0000-00-00', '2021-08-12 17:12:25', 'received'),
(1469, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Hello', '', 'text', '0000-00-00', '2021-08-13 09:40:27', 'received');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `fullName` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL DEFAULT 'Your Full Name',
  `phoneNumber` varchar(14) NOT NULL DEFAULT 'Your Number',
  `id` int(11) NOT NULL,
  `isLogin` tinyint(1) NOT NULL DEFAULT '0',
  `logoutTime` datetime NOT NULL,
  `age` int(2) NOT NULL DEFAULT '0',
  `synopsis` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL DEFAULT 'Sysnopsis About Yourself'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `avatar`, `fullName`, `phoneNumber`, `id`, `isLogin`, `logoutTime`, `age`, `synopsis`) VALUES
('admin', 'admin', 'admin@gmail.com', '/image/avatar/admin.jpg', 'admin', '0123456789', 20, 1, '0000-00-00 00:00:00', 22, 'I controll everything!'),
('brooklyn.soto@example.com', 'brooklyn.soto', 'brooklyn.soto@example.com', '/image/avatar/67.jpeg', 'Brooklyn Soto', '033318371', 67, 0, '2021-08-12 17:02:00', 19, 'Sysnopsis About Yourself'),
('carole.green@example.com', 'carole.green', 'carole.green@example.com', '/image/avatar/52.jpeg', 'Carole Green', '071604823', 52, 0, '2021-08-12 16:55:14', 28, 'Rachel Green in real life'),
('Chester Dixon', 'chester.dixon', 'chester.dixon@example.com', '/image/avatar/51.jpeg', 'Chester Dixon', '037027313', 51, 0, '2021-08-10 00:38:17', 32, 'Sysnopsis About Yourself'),
('dale.hayes@example.com', 'dale.hayes', 'dale.hayes@example.com', '/image/avatar/71.jpeg', 'Dale Hayes', '064807633', 71, 0, '2021-08-10 01:13:51', 26, 'Sysnopsis About Yourself'),
('David Haries', 'davidharries', 'davidharries@gmail.com', '/image/avatar/53.jpeg', 'David Harries', '0766321585', 53, 0, '2021-08-12 16:59:49', 35, 'A big fan of One Direction'),
('duydat', 'duydat', 'thaidat01222@gmail.com', '/image/avatar/44.jpeg', 'Thái Duy Đạt', '0123456789', 44, 1, '0000-00-00 00:00:00', 22, 'Wow'),
('e@gmail.com', '1', 'e@gmail.com', '/image/avatar/default.jpg', 'e@gmail.com', '0774685298', 72, 0, '0000-00-00 00:00:00', 0, 'Sysnopsis About Yourself'),
('elmer.foster@example.com', 'elmer.foster', 'elmer.foster@example.com', '/image/avatar/65.jpeg', 'Elmer Foster', '091680995', 65, 0, '2021-08-10 01:04:44', 27, 'Sysnopsis About Yourself'),
('John Wick', 'mr.wick', 'mr.wick@gmail.com', '/image/avatar/77.jpeg', 'John Wick', '01235478', 77, 0, '0000-00-00 00:00:00', 0, 'Sysnopsis About Yourself'),
('joshua.holmes@example.com', 'joshua.holmes', 'joshua.holmes@example.com', '/image/avatar/68.jpeg', 'Joshua Holmes', '084751691', 68, 0, '2021-08-10 01:08:29', 28, 'Sysnopsis About Yourself'),
('lena.peters@example.com', 'lena.peters', 'lena.peters@example.com', '/image/avatar/64.jpeg', 'Lena Peters', '074243836', 64, 0, '2021-08-10 01:03:01', 25, 'Sysnopsis About Yourself'),
('mamamia', 'mamamia', 'mamamia@gmail.com', '/image/avatar/default.jpg', 'Mama Mia', '073354268', 50, 0, '2021-08-10 00:39:08', 0, 'Sysnopsis About Yourself'),
('Mark Hudson', 'markhudason', 'mark.hudson@example.com', '/image/avatar/46.jpeg', 'Mark Hudson', '094328592', 46, 0, '2021-08-10 00:23:31', 30, 'Sysnopsis About Yourself'),
('Naruto', '1', 'a@gmail.com', '/image/avatar/75.jpeg', 'Naruto', '0123456789', 75, 0, '0000-00-00 00:00:00', 22, 'I will become Hokage'),
('phanhien', 'phanhien', 'phanhien203@gmail.com', '/image/avatar/45.jpeg', 'Phan Thị Thu Hiền', '074622582', 45, 1, '0000-00-00 00:00:00', 22, 'Sống phải vươn lênnn'),
('Ross Torres', 'ross.torres', 'ross.torres@example.com', '/image/avatar/47.jpeg', 'Ross Torres', '0764185924', 47, 0, '2021-08-12 16:40:35', 0, 'Sysnopsis About Yourself'),
('Wayne Rooney', 'rooney', 'rooney@gmail.com', '/image/avatar/76.jpeg', 'Wayne Rooney', '0123456789', 76, 0, '2021-08-12 17:14:55', 37, 'Best Strike Of ManUtd Ever');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lastchat`
--
ALTER TABLE `lastchat`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`messageID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `username_2` (`username`),
  ADD KEY `username_3` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lastchat`
--
ALTER TABLE `lastchat`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `messageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1470;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
