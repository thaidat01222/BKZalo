-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2021 at 06:06 PM
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
('c@gmail.com', 'a@gmail.com', 936, '2021-06-26 13:52:56', 2),
('c@gmail.com', 'b@gmail.com', 938, '2021-06-26 13:53:25', 3),
('thaidat01222@gmail.com', 'phanhien203@gmail.com', 1063, '2021-06-28 17:03:38', 4),
('phanhien203@gmail.com', 'quocan@gmail.com', 1127, '2021-06-28 17:33:24', 5),
('quocan@gmail.com', 'thaidat01222@gmail.com', 556, '2021-06-16 12:09:30', 6),
('thaidat01222@gmail.com', 'thaihiep@gmail.com', 563, '2021-06-16 12:12:59', 7),
('hoaithan@gmail.com', 'thaidat01222@gmail.com', 575, '2021-06-16 12:17:24', 8),
('phuonghien@gmail.com', 'phanhien203@gmail.com', 1108, '2021-06-28 17:17:47', 9),
('nhungoc@gmail.com', 'thaidat01222@gmail.com', 593, '2021-06-16 12:27:35', 11),
('thaidat01222@gmail.com', 'ngochoa@gmail.com', 596, '2021-06-16 12:28:34', 12),
('d@gmail.com', 'a@gmail.com', 608, '2021-06-16 12:42:21', 13),
('a@gmail.com', 'thaidat01222@gmail.com', 946, '2021-06-26 14:22:49', 14),
('thaidat01222@gmail.com', 'd@gmail.com', 610, '2021-06-16 12:56:22', 15),
('thaidat01222@gmail.com', 'tronganh@gmail.com', 611, '2021-06-16 12:56:35', 16),
('thaidat01222@gmail.com', 'minhduc@gmail.com', 945, '2021-06-26 14:22:32', 17),
('thaidat01222@gmail.com', 'vanha@gmail.com', 944, '2021-06-26 14:22:19', 18),
('thaidat01222@gmail.com', 'viethoang@gmail.com', 942, '2021-06-26 14:22:01', 19),
('a@gmail.com', 'hoaithan@gmail.com', 925, '2021-06-26 13:41:44', 20),
('a@gmail.com', 'tronganh@gmail.com', 921, '2021-06-26 13:38:30', 21),
('a@gmail.com', 'quocan@gmail.com', 909, '2021-06-25 16:32:15', 22),
('a@gmail.com', 'thaihiep@gmail.com', 618, '2021-06-16 12:59:03', 23),
('a@gmail.com', 'minhduc@gmail.com', 869, '2021-06-24 01:23:37', 24),
('a@gmail.com', 'nhungoc@gmail.com', 620, '2021-06-16 12:59:55', 25),
('a@gmail.com', 'ngochoa@gmail.com', 841, '2021-06-23 01:23:37', 26),
('b@gmail.com', 'hoaithan@gmail.com', 623, '2021-06-16 13:16:59', 27),
('b@gmail.com', 'tronganh@gmail.com', 624, '2021-06-16 13:17:22', 28),
('b@gmail.com', 'quocan@gmail.com', 625, '2021-06-16 13:18:12', 29),
('b@gmail.com', 'thaihiep@gmail.com', 626, '2021-06-16 13:30:26', 30),
('b@gmail.com', 'minhduc@gmail.com', 627, '2021-06-16 13:30:52', 31),
('b@gmail.com', 'nhungoc@gmail.com', 628, '2021-06-16 13:31:21', 32),
('b@gmail.com', 'ngochoa@gmail.com', 629, '2021-06-16 13:31:42', 33),
('b@gmail.com', 'vanha@gmail.com', 630, '2021-06-16 13:32:12', 34),
('b@gmail.com', 'phanhien203@gmail.com', 1109, '2021-07-08 16:05:51', 35),
('b@gmail.com', 'phuonghien@gmail.com', 1053, '2021-06-28 16:51:20', 36),
('b@gmail.com', 'viethoang@gmail.com', 929, '2021-06-26 13:47:36', 37),
('a@gmail.com', 'b@gmail.com', 1114, '2021-07-09 00:47:46', 38);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `messageID` int(11) NOT NULL,
  `fromEmail` varchar(25) NOT NULL,
  `toEmail` varchar(25) NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `image` varchar(50) NOT NULL,
  `contentType` varchar(10) NOT NULL,
  `seenTime` date NOT NULL,
  `sentTime` datetime NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`messageID`, `fromEmail`, `toEmail`, `content`, `image`, `contentType`, `seenTime`, `sentTime`, `status`) VALUES
(514, 'a@gmail.com', 'b@gmail.com', 'Hi Nobita', '', 'text', '0000-00-00', '2021-06-16 11:34:26', 'sent'),
(515, 'b@gmail.com', 'a@gmail.com', 'Hi Naruto', '', 'text', '0000-00-00', '2021-06-16 11:34:53', 'received'),
(518, 'b@gmail.com', 'a@gmail.com', 'Đi chơi hông, có thằng Sasuke nũa nè', '', 'text', '0000-00-00', '2021-06-16 11:37:35', 'received'),
(519, 'a@gmail.com', 'b@gmail.com', 'Chơi gì đó?', '', 'text', '0000-00-00', '2021-06-16 11:37:51', 'sent'),
(520, 'b@gmail.com', 'a@gmail.com', 'Đi bắt vĩ thú với tụi tao, mới mượn được mấy bảo bối xịn lắm ', '', 'text', '0000-00-00', '2021-06-16 11:38:28', 'received'),
(521, 'b@gmail.com', 'a@gmail.com', 'Doremon mới nhập hàng về, giờ đem test ', '', 'text', '0000-00-00', '2021-06-16 11:38:47', 'received'),
(522, 'a@gmail.com', 'b@gmail.com', 'Tao có cửu vĩ rồi.', '', 'text', '0000-00-00', '2021-06-16 11:39:22', 'sent'),
(523, 'a@gmail.com', 'b@gmail.com', 'Ứ thèm nữa...', '', 'text', '0000-00-00', '2021-06-16 11:39:33', 'sent'),
(524, 'b@gmail.com', 'a@gmail.com', 'Lại ở nhà đú với Hinata chứ gì, tao biết thừa ', '', 'text', '0000-00-00', '2021-06-16 11:39:51', 'received'),
(525, 'a@gmail.com', 'b@gmail.com', ': ))', '', 'text', '0000-00-00', '2021-06-16 11:40:20', 'sent'),
(526, 'a@gmail.com', 'b@gmail.com', 'Chuyện', '', 'text', '0000-00-00', '2021-06-16 11:40:28', 'sent'),
(527, 'a@gmail.com', 'c@gmail.com', 'Ê Mon!', '', 'text', '0000-00-00', '2021-06-16 11:43:34', 'sent'),
(528, 'c@gmail.com', 'a@gmail.com', 'Gì Vậy Nar', '', 'text', '0000-00-00', '2021-06-16 11:43:51', 'received'),
(529, 'a@gmail.com', 'c@gmail.com', 'Bớt cho thằng Nobita mượn đồ đi m', '', 'text', '0000-00-00', '2021-06-16 11:44:12', 'sent'),
(530, 'a@gmail.com', 'c@gmail.com', 'Nó lại đi phá làng phá xóm kìa!', '', 'text', '0000-00-00', '2021-06-16 11:44:28', 'sent'),
(531, 'c@gmail.com', 'a@gmail.com', 'Ớ, nó lại ăn trộm bảo bối của tao hả :33', '', 'text', '0000-00-00', '2021-06-16 11:44:39', 'received'),
(532, 'c@gmail.com', 'a@gmail.com', 'Để tao mách mẹ', '', 'text', '0000-00-00', '2021-06-16 11:44:49', 'received'),
(533, 'a@gmail.com', 'c@gmail.com', 'Lẹ đi m, mấy con vĩ thú sắp chết rồi kìa', '', 'text', '0000-00-00', '2021-06-16 11:45:44', 'sent'),
(534, 'c@gmail.com', 'a@gmail.com', 'Mé ới', '', 'text', '0000-00-00', '2021-06-16 11:46:32', 'received'),
(535, 'a@gmail.com', 'c@gmail.com', 'Vậy đi nha', '', 'text', '0000-00-00', '2021-06-16 11:46:51', 'sent'),
(536, 'c@gmail.com', 'b@gmail.com', 'Ê thằng quể', '', 'text', '0000-00-00', '2021-06-16 11:48:13', 'received'),
(537, 'c@gmail.com', 'b@gmail.com', 'Lại trộm đồ của tao hả mày????', '', 'text', '0000-00-00', '2021-06-16 11:48:36', 'received'),
(538, 'c@gmail.com', 'b@gmail.com', 'Trả đây, tao mách mẹ giờ', '', 'text', '0000-00-00', '2021-06-16 11:48:48', 'received'),
(539, 'b@gmail.com', 'c@gmail.com', 'Thôi! Chiều về tớ trả cho', '', 'text', '0000-00-00', '2021-06-16 11:49:17', 'sent'),
(540, 'b@gmail.com', 'c@gmail.com', 'Nha! iu iu', '', 'text', '0000-00-00', '2021-06-16 11:49:32', 'sent'),
(541, 'c@gmail.com', 'b@gmail.com', 'Tớ cái đầu mày à, nghe sởn hết da xanh', '', 'text', '0000-00-00', '2021-06-16 11:49:57', 'received'),
(542, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Hey bae', '', 'text', '0000-00-00', '2021-06-16 12:01:44', 'sent'),
(543, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'yeah bae', '', 'text', '0000-00-00', '2021-06-16 12:03:39', 'received'),
(544, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Đi ăn trưa không? Đói bụng ghê!!', '', 'text', '0000-00-00', '2021-06-16 12:04:18', 'sent'),
(545, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'Ăn cơm Sinh Viên ha, lâu rồi chưa ăn chỗ đó', '', 'text', '0000-00-00', '2021-06-16 12:04:54', 'received'),
(546, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Oke nà', '', 'text', '0000-00-00', '2021-06-16 12:05:23', 'sent'),
(547, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', '5ph nữa nhé', '', 'text', '0000-00-00', '2021-06-16 12:05:34', 'sent'),
(548, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Dọn đồ rồi đi luôn', '', 'text', '0000-00-00', '2021-06-16 12:05:41', 'sent'),
(549, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'Ừa', '', 'text', '0000-00-00', '2021-06-16 12:05:55', 'received'),
(550, 'phanhien203@gmail.com', 'quocan@gmail.com', 'Ê mày, học xong chưa', '', 'text', '0000-00-00', '2021-06-16 12:06:30', 'sent'),
(551, 'thaidat01222@gmail.com', 'quocan@gmail.com', 'Ê mày, học xong chưa', '', 'text', '0000-00-00', '2021-06-16 12:06:44', 'sent'),
(552, 'thaidat01222@gmail.com', 'quocan@gmail.com', 'Đi ăn trưa không, có Hiền nữa này', '', 'text', '0000-00-00', '2021-06-16 12:07:06', 'sent'),
(553, 'quocan@gmail.com', 'thaidat01222@gmail.com', 'Chưa xong mày, cô chưa cho về :v', '', 'text', '0000-00-00', '2021-06-16 12:07:43', 'received'),
(555, 'thaidat01222@gmail.com', 'quocan@gmail.com', 'Thế tí ăn một mình nhá :>> tao đi ăn trước đây, đói quạ', '', 'text', '0000-00-00', '2021-06-16 12:08:45', 'sent'),
(556, 'quocan@gmail.com', 'thaidat01222@gmail.com', ':)', '', 'text', '0000-00-00', '2021-06-16 12:09:30', 'received'),
(557, 'thaidat01222@gmail.com', 'thaihiep@gmail.com', 'Ê mày', '', 'text', '0000-00-00', '2021-06-16 12:10:36', 'sent'),
(558, 'thaidat01222@gmail.com', 'thaihiep@gmail.com', 'Ra đà nẵng lại chưa', '', 'text', '0000-00-00', '2021-06-16 12:10:48', 'sent'),
(559, 'thaihiep@gmail.com', 'thaidat01222@gmail.com', 'Rồi mày', '', 'text', '0000-00-00', '2021-06-16 12:11:09', 'received'),
(560, 'thaihiep@gmail.com', 'thaidat01222@gmail.com', 'Chi đó', '', 'text', '0000-00-00', '2021-06-16 12:11:14', 'received'),
(561, 'thaidat01222@gmail.com', 'thaihiep@gmail.com', 'Có chi mô, đòi nợ giùm Hiền á mà :v', '', 'text', '0000-00-00', '2021-06-16 12:11:49', 'sent'),
(562, 'thaihiep@gmail.com', 'thaidat01222@gmail.com', ':) Ứ trả', '', 'text', '0000-00-00', '2021-06-16 12:12:36', 'received'),
(563, 'thaidat01222@gmail.com', 'thaihiep@gmail.com', ':))', '', 'text', '0000-00-00', '2021-06-16 12:12:59', 'sent'),
(564, 'thaidat01222@gmail.com', 'hoaithan@gmail.com', 'Khi nào ra album mới vậy mày', '', 'text', '0000-00-00', '2021-06-16 12:13:22', 'sent'),
(565, 'thaidat01222@gmail.com', 'hoaithan@gmail.com', 'Nhạc thì hay mà ra rõ lâu', '', 'text', '0000-00-00', '2021-06-16 12:13:39', 'sent'),
(566, 'hoaithan@gmail.com', 'thaidat01222@gmail.com', 'haha, từ từ chứ mày', '', 'text', '0000-00-00', '2021-06-16 12:14:02', 'received'),
(567, 'hoaithan@gmail.com', 'thaidat01222@gmail.com', 'Ra nhanh mà không chất lượng thì ra làm gì', '', 'text', '0000-00-00', '2021-06-16 12:14:16', 'received'),
(568, 'thaidat01222@gmail.com', 'hoaithan@gmail.com', 'Hic, ra lẹ lẹ coi! Hóng vl', '', 'text', '0000-00-00', '2021-06-16 12:14:50', 'sent'),
(569, 'thaidat01222@gmail.com', 'hoaithan@gmail.com', 'Anh chị ta hâm mộ nhóm mày quá trời', '', 'text', '0000-00-00', '2021-06-16 12:15:06', 'sent'),
(570, 'thaidat01222@gmail.com', 'hoaithan@gmail.com', 'Hỏi có đi tour không, hay có show nào không để anh chị ta mua vé xem live ', '', 'text', '0000-00-00', '2021-06-16 12:15:39', 'sent'),
(572, 'hoaithan@gmail.com', 'thaidat01222@gmail.com', 'Haha, đang lên kế hoạch đi tour này', '', 'text', '0000-00-00', '2021-06-16 12:16:34', 'received'),
(573, 'hoaithan@gmail.com', 'thaidat01222@gmail.com', 'Có bán vé nớ', '', 'text', '0000-00-00', '2021-06-16 12:16:49', 'received'),
(574, 'thaidat01222@gmail.com', 'hoaithan@gmail.com', 'Có được bắt tay idol không ??', '', 'text', '0000-00-00', '2021-06-16 12:17:05', 'sent'),
(575, 'hoaithan@gmail.com', 'thaidat01222@gmail.com', 'Nói làm ngại vl :v', '', 'text', '0000-00-00', '2021-06-16 12:17:24', 'received'),
(576, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'Heyyyy', '', 'text', '0000-00-00', '2021-06-16 12:18:10', 'sent'),
(577, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Gì dạ bae', '', 'text', '0000-00-00', '2021-06-16 12:18:32', 'sent'),
(578, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'Ăn trưa hông, đi với tụi mình nè', '', 'text', '0000-00-00', '2021-06-16 12:18:56', 'sent'),
(579, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Hoyyy, tụi bạn đi đi', '', 'text', '0000-00-00', '2021-06-16 12:19:18', 'sent'),
(580, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Mình đi như kỳ đà cản mũi á', '', 'text', '0000-00-00', '2021-06-16 12:19:29', 'sent'),
(581, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Mà vô thì mua giùm ly nước mía nhaaaaaa', '', 'text', '0000-00-00', '2021-06-16 12:19:41', 'sent'),
(582, 'phanhien203@gmail.com', 'phuonghien@gmail.com', '=.=', '', 'text', '0000-00-00', '2021-06-16 12:21:27', 'sent'),
(583, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'Rồi rồi', '', 'text', '0000-00-00', '2021-06-16 12:21:32', 'sent'),
(584, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Hí hí, cảm ơn bae', '', 'text', '0000-00-00', '2021-06-16 12:21:54', 'received'),
(585, 'quocan@gmail.com', 'phanhien203@gmail.com', 'Khỏi rủ, người yêu mày rủ tao rồi, tao chưa học xong :)', '', 'text', '0000-00-00', '2021-06-16 12:22:21', 'received'),
(586, 'phanhien203@gmail.com', 'quocan@gmail.com', 'haha', '', 'text', '0000-00-00', '2021-06-16 12:22:32', 'sent'),
(587, 'nhungoc@gmail.com', 'thaidat01222@gmail.com', 'Ê hỡi', '', 'text', '0000-00-00', '2021-06-16 12:23:43', 'received'),
(588, 'thaidat01222@gmail.com', 'nhungoc@gmail.com', 'Gì má', '', 'text', '0000-00-00', '2021-06-16 12:23:53', 'sent'),
(589, 'nhungoc@gmail.com', 'thaidat01222@gmail.com', 'Đi ăn chưa', '', 'text', '0000-00-00', '2021-06-16 12:24:18', 'sent'),
(590, 'thaidat01222@gmail.com', 'nhungoc@gmail.com', 'Đang ăn nè má', '', 'text', '0000-00-00', '2021-06-16 12:24:33', 'received'),
(591, 'nhungoc@gmail.com', 'thaidat01222@gmail.com', 'Mua giùm ổ mì, mì hai trứng xúc xích rau củ đầy đủ nha', '', 'text', '0000-00-00', '2021-06-16 12:26:42', 'received'),
(592, 'thaidat01222@gmail.com', 'nhungoc@gmail.com', 'Rồi rồi, nhớ trả thêm phí ship nghe ', '', 'text', '0000-00-00', '2021-06-16 12:27:16', 'sent'),
(593, 'nhungoc@gmail.com', 'thaidat01222@gmail.com', 'Ok luônnnnnn ', '', 'text', '0000-00-00', '2021-06-16 12:27:35', 'received'),
(594, 'ngochoa@gmail.com', 'thaidat01222@gmail.com', 'Em ơi', '', 'text', '0000-00-00', '2021-06-16 12:28:03', 'received'),
(595, 'thaidat01222@gmail.com', 'ngochoa@gmail.com', 'Gì vậy bốn', '', 'text', '0000-00-00', '2021-06-16 12:28:23', 'sent'),
(596, 'thaidat01222@gmail.com', 'ngochoa@gmail.com', 'Nhờ gì nói lẹ', '', 'text', '0000-00-00', '2021-06-16 12:28:34', 'sent'),
(597, 'b@gmail.com', 'c@gmail.com', 'Tớ đi bắt vỹ thú về tặng bạn nè', '', 'text', '0000-00-00', '2021-06-16 12:29:54', 'sent'),
(598, 'c@gmail.com', 'b@gmail.com', 'Mày đi bắt động vật hoang dã về rồi bắt tao giữ giúp mày hả', '', 'text', '0000-00-00', '2021-06-16 12:30:32', 'received'),
(599, 'c@gmail.com', 'b@gmail.com', 'Khôn như mày thế kỉ 22 xích đầy nhá ', '', 'text', '0000-00-00', '2021-06-16 12:30:44', 'received'),
(602, 'a@gmail.com', 'b@gmail.com', 'Ê, Xuka đi tìm mày kìa ', '', 'text', '0000-00-00', '2021-06-16 12:32:23', 'received'),
(603, 'b@gmail.com', 'a@gmail.com', 'Bỏ bu, nãy hứa bắt nhất vỹ cho Xuka', '', 'text', '0000-00-00', '2021-06-16 12:33:07', 'received'),
(604, 'b@gmail.com', 'a@gmail.com', 'Mà giờ thằng Gaara nó ứ cho, nó chôn tao với Sasuke trong sa mạc luôn rồi :<<<', '', 'text', '0000-00-00', '2021-06-16 12:34:03', 'received'),
(605, 'a@gmail.com', 'b@gmail.com', 'Papasuke hả :> chứ Sasuke nào, tao không quen', '', 'text', '0000-00-00', '2021-06-16 12:34:51', 'received'),
(606, 'd@gmail.com', 'a@gmail.com', 'Bố của Borutooooooooooo', '', 'text', '0000-00-00', '2021-06-16 12:39:10', 'received'),
(607, 'a@gmail.com', 'd@gmail.com', 'Hết chakra rồi hả', '', 'text', '0000-00-00', '2021-06-16 12:40:47', 'received'),
(608, 'd@gmail.com', 'a@gmail.com', '(>.<)', '', 'text', '0000-00-00', '2021-06-16 12:42:21', 'received'),
(609, 'thaidat01222@gmail.com', 'a@gmail.com', 'Hey Nar', '', 'text', '0000-00-00', '2021-06-16 12:56:14', 'received'),
(610, 'thaidat01222@gmail.com', 'd@gmail.com', 'Hey Sặc', '', 'text', '0000-00-00', '2021-06-16 12:56:22', 'received'),
(611, 'thaidat01222@gmail.com', 'tronganh@gmail.com', 'Hey Trọng Anh', '', 'text', '0000-00-00', '2021-06-16 12:56:35', 'sent'),
(612, 'thaidat01222@gmail.com', 'minhduc@gmail.com', 'Ê Đức ơi, gánh ta môn PLC với :<<<', '', 'text', '0000-00-00', '2021-06-16 12:57:09', 'sent'),
(613, 'thaidat01222@gmail.com', 'vanha@gmail.com', 'Dạo ni còn đọc sách hông anh', '', 'text', '0000-00-00', '2021-06-16 12:57:28', 'sent'),
(614, 'thaidat01222@gmail.com', 'viethoang@gmail.com', 'Con gà, ta qua map 35 rồi này :))', '', 'text', '0000-00-00', '2021-06-16 12:57:49', 'sent'),
(615, 'a@gmail.com', 'hoaithan@gmail.com', 'Idol ra nhạc nhanh lên huhu', '', 'text', '0000-00-00', '2021-06-16 12:58:14', 'sent'),
(616, 'a@gmail.com', 'tronganh@gmail.com', 'Ước gì được đi du học idol', '', 'text', '0000-00-00', '2021-06-16 12:58:30', 'sent'),
(617, 'a@gmail.com', 'quocan@gmail.com', 'Cho mượn con pikachu đi đánh với akatsuki coi', '', 'text', '0000-00-00', '2021-06-16 12:58:49', 'sent'),
(618, 'a@gmail.com', 'thaihiep@gmail.com', 'Hà nội vui không', '', 'text', '0000-00-00', '2021-06-16 12:59:03', 'sent'),
(619, 'a@gmail.com', 'minhduc@gmail.com', 'Đi đánh akatsuki không bro', '', 'text', '0000-00-00', '2021-06-16 12:59:40', 'sent'),
(620, 'a@gmail.com', 'nhungoc@gmail.com', 'Má mì pha ke', '', 'text', '0000-00-00', '2021-06-16 12:59:55', 'sent'),
(621, 'a@gmail.com', 'ngochoa@gmail.com', 'NTN Hoa, á idol chưa xóa kênh hả', '', 'text', '0000-00-00', '2021-06-16 13:00:24', 'sent'),
(622, 'a@gmail.com', 'c@gmail.com', 'hi', '', 'text', '0000-00-00', '2021-06-16 13:03:17', 'received'),
(623, 'b@gmail.com', 'hoaithan@gmail.com', 'Idol lên tí nhạc quẩy để Nô đi bắt vỹ thú cho xung nào', '', 'text', '0000-00-00', '2021-06-16 13:16:59', 'sent'),
(624, 'b@gmail.com', 'tronganh@gmail.com', 'Idol làm xong Lora chưa dạ', '', 'text', '0000-00-00', '2021-06-16 13:17:22', 'sent'),
(625, 'b@gmail.com', 'quocan@gmail.com', 'Đi bắt pokemon hemmmm', '', 'text', '0000-00-00', '2021-06-16 13:18:12', 'sent'),
(626, 'b@gmail.com', 'thaihiep@gmail.com', 'Đi Hà Nội chơi hông, test cánh cửa thần kì phát', '', 'text', '0000-00-00', '2021-06-16 13:30:26', 'sent'),
(627, 'b@gmail.com', 'minhduc@gmail.com', 'Đi Sài Gòn chơi hông, test cánh cửa thần kì phát', '', 'text', '0000-00-00', '2021-06-16 13:30:52', 'sent'),
(628, 'b@gmail.com', 'nhungoc@gmail.com', 'Bán cho miếng xôi nhanh nhanh na, Xuka đói rồi :<<', '', 'text', '0000-00-00', '2021-06-16 13:31:21', 'sent'),
(629, 'b@gmail.com', 'ngochoa@gmail.com', 'Úi NTN idol', '', 'text', '0000-00-00', '2021-06-16 13:31:42', 'sent'),
(630, 'b@gmail.com', 'vanha@gmail.com', 'Lươn Hà Tĩnh', '', 'text', '0000-00-00', '2021-06-16 13:32:12', 'sent'),
(631, 'b@gmail.com', 'phanhien203@gmail.com', 'Ôi Xuka ới', '', 'text', '0000-00-00', '2021-06-16 13:32:27', 'sent'),
(632, 'b@gmail.com', 'phuonghien@gmail.com', 'Heyyy chaiko, có chaien ở nhà hemmm', '', 'text', '0000-00-00', '2021-06-16 13:32:51', 'sent'),
(633, 'b@gmail.com', 'viethoang@gmail.com', 'Bác Khang khỏe hông ', '', 'text', '0000-00-00', '2021-06-16 13:33:10', 'sent'),
(634, 'b@gmail.com', 'c@gmail.com', 'Doraemonnnnn, thằng Chaien nó cướp bảo bối của tao rồi', '', 'text', '0000-00-00', '2021-06-16 13:33:55', 'sent'),
(635, 'a@gmail.com', 'ngochoa@gmail.com', 'Online sao không rep bạn ơi', '', 'text', '0000-00-00', '2021-06-16 15:05:31', 'sent'),
(636, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'hi bae', '', 'text', '0000-00-00', '2021-06-16 15:09:38', 'received'),
(637, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Hi iuuu', '', 'text', '0000-00-00', '2021-06-16 15:10:02', 'received'),
(640, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'ăn cơm chưa', '', 'text', '0000-00-00', '2021-06-16 15:10:38', 'received'),
(641, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Ăn cơm tối luôn rồi :))', '', 'text', '0000-00-00', '2021-06-16 15:11:01', 'received'),
(642, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'thế ăn cơm chó không', '', 'text', '0000-00-00', '2021-06-16 15:11:25', 'received'),
(643, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Kịch tính thì ăn.. hít hít k ăn', '', 'text', '0000-00-00', '2021-06-16 15:11:57', 'received'),
(644, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'thế kịch tính như nào nè', '', 'text', '0000-00-00', '2021-06-16 15:12:15', 'received'),
(645, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'nhớ đem thiết bị lưu lại tài liệu', '', 'text', '0000-00-00', '2021-06-16 15:12:34', 'received'),
(646, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Góc t ngồi có camera ý.. qua đó thể hiện', '', 'text', '0000-00-00', '2021-06-16 15:12:50', 'received'),
(647, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'thôiiiiiiiiiii', '', 'text', '0000-00-00', '2021-06-16 15:13:22', 'received'),
(648, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'nói bạn chứ', '', 'text', '0000-00-00', '2021-06-16 15:13:29', 'received'),
(649, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'làm vậy kì lắm', '', 'text', '0000-00-00', '2021-06-16 15:13:36', 'received'),
(650, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Thế làm đó đi.. trí nhớ 3 chủi của bạn kia sẽ ghi kỹ lại', '', 'text', '0000-00-00', '2021-06-16 15:14:22', 'received'),
(651, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'haha', '', 'text', '0000-00-00', '2021-06-16 15:14:40', 'received'),
(652, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'rứa học bài tới đâu rồi', '', 'text', '0000-00-00', '2021-06-16 15:14:52', 'received'),
(653, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'Cơm chó bốc mùi nặng quá tập trung xem phim rồi học chi nữa', '', 'text', '0000-00-00', '2021-06-16 15:15:28', 'received'),
(654, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'thế lo học bài đi nhá', '', 'text', '0000-00-00', '2021-06-16 15:15:42', 'received'),
(655, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'ok', '', 'text', '0000-00-00', '2021-06-16 15:16:49', 'received'),
(656, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'hey bae', '', 'text', '0000-00-00', '2021-06-16 15:38:49', 'received'),
(657, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'đói bụng chưa nà', '', 'text', '0000-00-00', '2021-06-16 15:39:47', 'received'),
(658, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'đói rồi nà', '', 'text', '0000-00-00', '2021-06-16 15:40:57', 'received'),
(659, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'thế đi ăn nhá', '', 'text', '0000-00-00', '2021-06-16 15:42:29', 'sent'),
(660, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'dọn đồ đi nghe', '', 'text', '0000-00-00', '2021-06-16 15:42:58', 'received'),
(661, 'a@gmail.com', 'thaidat01222@gmail.com', 'Gì mày', '', 'text', '0000-00-00', '2021-06-17 17:17:30', 'sent'),
(662, 'thaidat01222@gmail.com', 'a@gmail.com', 'Em ơi', '', 'text', '0000-00-00', '2021-06-19 16:11:49', 'sent'),
(663, 'a@gmail.com', 'thaidat01222@gmail.com', 'sao', '', 'text', '0000-00-00', '2021-06-19 16:15:47', 'received'),
(664, 'a@gmail.com', 'thaidat01222@gmail.com', 'đi đâu mất rồi', '', 'text', '0000-00-00', '2021-06-19 16:33:18', 'received'),
(665, 'thaidat01222@gmail.com', 'a@gmail.com', 'anh nè', '', 'text', '0000-00-00', '2021-06-19 16:36:43', 'received'),
(666, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'người yêu ơi', '', 'text', '0000-00-00', '2021-06-19 16:37:14', 'received'),
(667, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'cỏ mềm đã héo khô', '', 'text', '0000-00-00', '2021-06-19 16:37:27', 'received'),
(668, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'ơi', '', 'text', '0000-00-00', '2021-06-19 16:37:55', 'received'),
(669, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', ': ))', '', 'text', '0000-00-00', '2021-06-19 16:38:05', 'received'),
(670, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'mặt hồ lá xác xơ', '', 'text', '0000-00-00', '2021-06-19 16:38:13', 'received'),
(671, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'sao nó si đa vậy nè', '', 'text', '0000-00-00', '2021-06-19 16:38:21', 'received'),
(672, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'gửi lên thì hiện liền, nhưng mà chưa nhận liền ha', '', 'text', '0000-00-00', '2021-06-19 16:39:15', 'received'),
(673, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'nhắn cái đi lại đi mất tiêu', '', 'text', '0000-00-00', '2021-06-19 16:39:21', 'received'),
(674, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'đi mô đâu chời', '', 'text', '0000-00-00', '2021-06-19 16:39:45', 'received'),
(675, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'em có đọc được tin nhắn trên socket ở console', '', 'text', '0000-00-00', '2021-06-19 16:40:42', 'received'),
(676, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'à', '', 'text', '0000-00-00', '2021-06-19 16:41:26', 'received'),
(677, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'nhưng mà chưa hiện liền ha', '', 'text', '0000-00-00', '2021-06-19 16:41:43', 'received'),
(678, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'à á ru hời', '', 'text', '0000-00-00', '2021-06-19 16:41:45', 'received'),
(679, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'ơ hời ru', '', 'text', '0000-00-00', '2021-06-19 16:41:57', 'received'),
(680, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'hoy làm tiếp', '', 'text', '0000-00-00', '2021-06-19 16:42:09', 'received'),
(681, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', ':>>>>', '', 'text', '0000-00-00', '2021-06-19 16:42:31', 'received'),
(682, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'dạ', '', 'text', '0000-00-00', '2021-06-19 16:42:37', 'received'),
(776, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Anh Yeeu Em', '', 'text', '0000-00-00', '2021-06-20 14:29:39', 'sent'),
(778, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Nhiefu lam', '', 'text', '0000-00-00', '2021-06-20 14:35:34', 'sent'),
(779, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Hiuhiu', '', 'text', '0000-00-00', '2021-06-20 14:36:19', 'received'),
(780, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'lamws lamws', '', 'text', '0000-00-00', '2021-06-20 14:38:33', 'received'),
(781, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'buồn làm gì anh ơi', '', 'text', '0000-00-00', '2021-06-20 14:38:42', 'received'),
(782, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'buồn, hông được mlem', '', 'text', '0000-00-00', '2021-06-20 14:39:06', 'received'),
(783, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'giờ đi mlem đi', '', 'text', '0000-00-00', '2021-06-20 14:39:15', 'received'),
(784, 'a@gmail.com', 'thaidat01222@gmail.com', 'hiuhiu', '', 'text', '0000-00-00', '2021-06-21 15:42:22', 'sent'),
(787, 'thaidat01222@gmail.com', 'a@gmail.com', 'hừ', '', 'text', '0000-00-00', '2021-06-21 15:47:14', 'sent'),
(791, 'a@gmail.com', 'b@gmail.com', 'Ê nô', '', 'text', '0000-00-00', '2021-06-22 15:22:18', 'received'),
(795, 'b@gmail.com', 'a@gmail.com', 'Gif vay Nar', '', 'text', '0000-00-00', '2021-06-22 17:07:59', 'received'),
(815, 'a@gmail.com', 'b@gmail.com', 'Rủ thằng Mon đi party nào', '', 'text', '0000-00-00', '2021-06-23 00:47:00', 'sent'),
(816, 'a@gmail.com', 'thaidat01222@gmail.com', 'hở, solo xem rasengan ai to hơn không', '', 'text', '0000-00-00', '2021-06-23 01:04:38', 'sent'),
(817, 'b@gmail.com', 'a@gmail.com', 'Mon đi chơi với mèo hàng xóm rồi, mỗi tao với Chaien thôi', '', 'text', '0000-00-00', '2021-06-23 01:06:29', 'received'),
(818, 'b@gmail.com', 'a@gmail.com', 'Chaien hả @@', '', 'text', '0000-00-00', '2021-06-23 01:09:05', 'received'),
(819, 'a@gmail.com', 'b@gmail.com', 'Chaien hả, mày còn thằng nào bớt phá làng phá xóm hơn không', '', 'text', '0000-00-00', '2021-06-23 01:09:46', 'sent'),
(820, 'b@gmail.com', 'a@gmail.com', 'Chaien hả @@', '', 'text', '0000-00-00', '2021-06-23 01:10:28', 'sent'),
(821, 'a@gmail.com', 'b@gmail.com', 'Chaien hả, mày còn thằng nào bớt phá làng phá xóm hơn không', '', 'text', '0000-00-00', '2021-06-23 01:10:28', 'sent'),
(822, 'a@gmail.com', 'b@gmail.com', 'ví dụ như Degisuki', '', 'text', '0000-00-00', '2021-06-23 01:11:27', 'sent'),
(823, 'b@gmail.com', 'a@gmail.com', 'ứ, nó dụ Xuka đi bể bơi rồi ', '', 'text', '0000-00-00', '2021-06-23 01:13:54', 'sent'),
(824, 'b@gmail.com', 'a@gmail.com', 'Pựk', '', 'text', '0000-00-00', '2021-06-23 01:14:02', 'sent'),
(825, 'b@gmail.com', 'a@gmail.com', ':">', '', 'text', '0000-00-00', '2021-06-23 01:14:29', 'sent'),
(826, 'b@gmail.com', 'a@gmail.com', 'Tức gì đâu á', '', 'text', '0000-00-00', '2021-06-23 01:14:56', 'sent'),
(827, 'b@gmail.com', 'a@gmail.com', 'Xuka nghe bể bơi cái cười tít mắt lên, hic hic', '', 'text', '0000-00-00', '2021-06-23 01:16:29', 'sent'),
(828, 'a@gmail.com', 'b@gmail.com', 'Chú cắp sách vở qua đây, tôi dạy cho một khóa nào', '', 'text', '0000-00-00', '2021-06-23 01:18:54', 'sent'),
(829, 'a@gmail.com', 'b@gmail.com', 'Làm ăn thế này thì mai mốt đừng có inb khóc lóc Xuka có bồ nhé :">>', '', 'text', '0000-00-00', '2021-06-23 01:19:28', 'sent'),
(830, 'a@gmail.com', 'b@gmail.com', 'Khi ấy tao không đi nhậu với mày đâu nhé, đem sách sổ qua đây', '', 'text', '0000-00-00', '2021-06-23 01:22:00', 'sent'),
(831, 'a@gmail.com', 'b@gmail.com', 'Khi ấy tao không đi nhậu với mày đâu nhé, đem sách sổ qua đây', '', 'text', '0000-00-00', '2021-06-23 01:22:00', 'sent'),
(832, 'a@gmail.com', 'b@gmail.com', 'Ngay và luôn', '', 'text', '0000-00-00', '2021-06-23 01:22:08', 'sent'),
(833, 'a@gmail.com', 'b@gmail.com', 'Ngay và luôn', '', 'text', '0000-00-00', '2021-06-23 01:22:08', 'sent'),
(834, 'a@gmail.com', 'thaidat01222@gmail.com', 'trốn hả bae', '', 'text', '0000-00-00', '2021-06-23 01:22:17', 'sent'),
(835, 'a@gmail.com', 'thaidat01222@gmail.com', 'trốn hả bae', '', 'text', '0000-00-00', '2021-06-23 01:22:17', 'sent'),
(836, 'a@gmail.com', 'thaidat01222@gmail.com', 'nào nào', '', 'text', '0000-00-00', '2021-06-23 01:23:01', 'sent'),
(837, 'a@gmail.com', 'thaidat01222@gmail.com', 'nào nào', '', 'text', '0000-00-00', '2021-06-23 01:23:01', 'sent'),
(838, 'a@gmail.com', 'b@gmail.com', 'nhanh nhá', '', 'text', '0000-00-00', '2021-06-23 01:23:17', 'sent'),
(839, 'a@gmail.com', 'b@gmail.com', 'nhanh nhá', '', 'text', '0000-00-00', '2021-06-23 01:23:17', 'sent'),
(840, 'a@gmail.com', 'ngochoa@gmail.com', 'Vẫn ko rep luôn :) ', '', 'text', '0000-00-00', '2021-06-23 01:23:37', 'sent'),
(841, 'a@gmail.com', 'ngochoa@gmail.com', 'Vẫn ko rep luôn :) ', '', 'text', '0000-00-00', '2021-06-23 01:23:37', 'sent'),
(842, 'a@gmail.com', 'c@gmail.com', 'Bạn bè rủ thì không rep, đi chơi với mèo hàng xóm', '', 'text', '0000-00-00', '2021-06-23 01:24:05', 'sent'),
(843, 'a@gmail.com', 'c@gmail.com', 'Bạn bè rủ thì không rep, đi chơi với mèo hàng xóm', '', 'text', '0000-00-00', '2021-06-23 01:24:05', 'sent'),
(844, 'a@gmail.com', 'minhduc@gmail.com', 'Ra chiến trường lẹ đi, thằng obito nó thành jinchuriki rồi', '', 'text', '0000-00-00', '2021-06-23 01:24:29', 'sent'),
(845, 'a@gmail.com', 'minhduc@gmail.com', 'Ra chiến trường lẹ đi, thằng obito nó thành jinchuriki rồi', '', 'text', '0000-00-00', '2021-06-23 01:24:29', 'sent'),
(847, 'a@gmail.com', 'hoaithan@gmail.com', 'Tựa đêm nay nghe nghiện vl idol ơi', '', 'text', '0000-00-00', '2021-06-23 01:29:25', 'sent'),
(848, 'a@gmail.com', 'minhduc@gmail.com', 'Madara lên lục đạo rồi m ơi, m đâu rồi :<<<< ', '', 'text', '0000-00-00', '2021-06-23 21:16:25', 'sent'),
(850, 'a@gmail.com', 'minhduc@gmail.com', 'Madara bị Kaguya thọt zồi :>>', '', 'text', '0000-00-00', '2021-06-23 23:08:55', 'sent'),
(853, 'a@gmail.com', 'minhduc@gmail.com', 'Naruto xài sexy no jutsu kìa mầy :>>>', '', 'text', '0000-00-00', '2021-06-23 23:12:13', 'sent'),
(855, 'a@gmail.com', 'minhduc@gmail.com', 'Vậy mà kaguya bị lừa kìa mầy :>>>', '', 'text', '0000-00-00', '2021-06-23 23:12:38', 'sent'),
(860, 'a@gmail.com', 'minhduc@gmail.com', 'Kaguya bị phong ấn rồi mầy, mê trai vcl ', '', 'text', '0000-00-00', '2021-06-24 01:18:37', 'sent'),
(867, 'a@gmail.com', 'minhduc@gmail.com', 'Tí thì quên thằng Zetsu Đen mầy ạ :v ', '', 'text', '0000-00-00', '2021-06-24 01:22:55', 'sent'),
(868, 'a@gmail.com', 'minhduc@gmail.com', 'Quên ác vl', '', 'text', '0000-00-00', '2021-06-24 01:23:15', 'sent'),
(869, 'a@gmail.com', 'minhduc@gmail.com', 'Haha', '', 'text', '0000-00-00', '2021-06-24 01:23:37', 'sent'),
(870, 'a@gmail.com', 'hoaithan@gmail.com', 'Khi nào có tour vậy idol', '', 'text', '0000-00-00', '2021-06-24 01:24:00', 'sent'),
(871, 'b@gmail.com', 'a@gmail.com', 'Éo, thằng có gái thích mà không biết thì đòi dạy ai', '', 'text', '0000-00-00', '2021-06-24 01:29:51', 'received'),
(873, 'b@gmail.com', 'a@gmail.com', 'éo', '', 'text', '0000-00-00', '2021-06-24 01:30:19', 'sent'),
(874, 'b@gmail.com', 'a@gmail.com', 'éo nhé', '', 'text', '0000-00-00', '2021-06-24 01:40:38', 'received'),
(884, 'b@gmail.com', 'a@gmail.com', 'kì vl', '', 'text', '0000-00-00', '2021-06-24 10:33:04', 'received'),
(885, 'b@gmail.com', 'a@gmail.com', 'Không hiểu lắm', '', 'text', '0000-00-00', '2021-06-24 10:33:28', 'received'),
(886, 'a@gmail.com', 'b@gmail.com', 'Không hiểu dụ chi', '', 'text', '0000-00-00', '2021-06-24 10:34:44', 'received'),
(888, 'a@gmail.com', 'c@gmail.com', 'Ê mon', '', 'text', '0000-00-00', '2021-06-24 10:35:35', 'sent'),
(889, 'a@gmail.com', 'b@gmail.com', 'Có gì vướng mắc :>', '', 'text', '0000-00-00', '2021-06-24 10:36:51', 'sent'),
(891, 'a@gmail.com', 'c@gmail.com', 'Mượn cái áo choàng tàng hình đi', '', 'text', '0000-00-00', '2021-06-24 10:40:57', 'sent'),
(892, 'a@gmail.com', 'b@gmail.com', 'aizzzz', '', 'text', '0000-00-00', '2021-06-24 10:41:37', 'received'),
(893, 'a@gmail.com', 'quocan@gmail.com', 'Mượn con salamander cũng được ;v', '', 'text', '0000-00-00', '2021-06-24 10:43:24', 'sent'),
(894, 'a@gmail.com', 'b@gmail.com', 'Nói luôn, anh em khỏi ngại ', '', 'text', '0000-00-00', '2021-06-24 10:49:55', 'received'),
(907, 'a@gmail.com', 'b@gmail.com', 'Ê Nô, kêu mon cho mượn cửa thần kì coi, thằng khứa nào bắt cóc Hinata lên mặt trăng rồi', '', 'text', '0000-00-00', '2021-06-25 16:27:09', 'received'),
(908, 'a@gmail.com', 'b@gmail.com', 'Thôi gọi luôn thằng mon đi cùng tao đi, lên mặt trăng đánh ghen với tao', '', 'text', '0000-00-00', '2021-06-25 16:29:04', 'sent'),
(909, 'a@gmail.com', 'quocan@gmail.com', 'Ê hỡi, mượn con pikachu đi đánh ghen coi', '', 'text', '0000-00-00', '2021-06-25 16:32:15', 'sent'),
(910, 'b@gmail.com', 'c@gmail.com', 'Mon ơi', '', 'text', '0000-00-00', '2021-06-25 23:07:12', 'received'),
(911, 'c@gmail.com', 'b@gmail.com', 'Gáy đi Nô', '', 'text', '0000-00-00', '2021-06-25 23:30:35', 'sent'),
(912, 'b@gmail.com', 'c@gmail.com', 'Nar rủ mày đi đánh ghen kìa, lên tít tận mặt trăng đánh ghen :v', '', 'text', '0000-00-00', '2021-06-25 23:35:56', 'received'),
(913, 'c@gmail.com', 'b@gmail.com', 'Ôi vãi, thằng nào chơi lớn vậy :v', '', 'text', '0000-00-00', '2021-06-25 23:37:12', 'received'),
(914, 'b@gmail.com', 'c@gmail.com', 'Nó bắt Hinata lên mặt trăng m ạ :>>>>', '', 'text', '0000-00-00', '2021-06-26 00:06:29', 'sent'),
(915, 'c@gmail.com', 'b@gmail.com', 'Ok, hỏi thằng Nar địa chỉ, thời gian', '', 'text', '0000-00-00', '2021-06-26 00:08:47', 'sent'),
(916, 'b@gmail.com', 'c@gmail.com', 'Tao với mày đi quẩy nát mặt trăng nào', '', 'text', '0000-00-00', '2021-06-26 00:13:39', 'sent'),
(917, 'c@gmail.com', 'b@gmail.com', 'Ok, để tao gọi thêm hội Tình Bạn của tao nữa :>>>', '', 'text', '0000-00-00', '2021-06-26 00:23:15', 'received'),
(918, 'b@gmail.com', 'c@gmail.com', 'Ủa rồi mày đi đánh ghen hay đi họp fan offline vậy :) ', '', 'text', '0000-00-00', '2021-06-26 01:10:48', 'sent'),
(919, 'c@gmail.com', 'b@gmail.com', 'Ờ ha, tao quên', '', 'text', '0000-00-00', '2021-06-26 01:11:47', 'sent'),
(920, 'a@gmail.com', 'tronganh@gmail.com', 'Xong mạch chưa bro', '', 'text', '0000-00-00', '2021-06-26 13:37:40', 'sent'),
(921, 'a@gmail.com', 'tronganh@gmail.com', 'Còn cái lora nữa ', '', 'text', '0000-00-00', '2021-06-26 13:38:30', 'sent'),
(922, 'a@gmail.com', 'c@gmail.com', 'Ê mầy, mượn máy thời gian về cứu Đệ Tứ phát', '', 'text', '0000-00-00', '2021-06-26 13:39:03', 'sent'),
(923, 'a@gmail.com', 'c@gmail.com', 'Bị cửu vĩ xiên tội vl', '', 'text', '0000-00-00', '2021-06-26 13:39:23', 'sent'),
(924, 'a@gmail.com', 'hoaithan@gmail.com', 'Bán hết vé chưa idol', '', 'text', '0000-00-00', '2021-06-26 13:41:20', 'sent'),
(925, 'a@gmail.com', 'hoaithan@gmail.com', 'Ta muốn mua 2 vé ', '', 'text', '0000-00-00', '2021-06-26 13:41:44', 'sent'),
(926, 'b@gmail.com', 'a@gmail.com', 'Okela, tao gọi nó rồi', '', 'text', '0000-00-00', '2021-06-26 13:46:27', 'sent'),
(927, 'b@gmail.com', 'a@gmail.com', 'Nó đem hội Tình Bạn của nó theo chung vui luôn ớ', '', 'text', '0000-00-00', '2021-06-26 13:46:41', 'sent'),
(928, 'b@gmail.com', 'viethoang@gmail.com', 'Ê mầy, mua con Hoàng Tử Ba Tư chưa, đánh bá cháy vl', '', 'text', '0000-00-00', '2021-06-26 13:47:12', 'sent'),
(929, 'b@gmail.com', 'viethoang@gmail.com', 'Đánh mãi ko chết luôn ớ', '', 'text', '0000-00-00', '2021-06-26 13:47:36', 'sent'),
(930, 'b@gmail.com', 'phanhien203@gmail.com', 'Xuka ơi', '', 'text', '0000-00-00', '2021-06-26 13:47:44', 'sent'),
(931, 'b@gmail.com', 'phanhien203@gmail.com', 'Xuka à', '', 'text', '0000-00-00', '2021-06-26 13:47:51', 'sent'),
(932, 'b@gmail.com', 'phuonghien@gmail.com', 'Hey chaiko, nghe đồn vẽ đẹp lắm. Vẽ cho bức free na', '', 'text', '0000-00-00', '2021-06-26 13:48:23', 'sent'),
(933, 'b@gmail.com', 'phuonghien@gmail.com', 'Được hưm', '', 'text', '0000-00-00', '2021-06-26 13:48:29', 'sent'),
(934, 'b@gmail.com', 'phanhien203@gmail.com', 'Xuka ới ời', '', 'text', '0000-00-00', '2021-06-26 13:48:35', 'sent'),
(935, 'c@gmail.com', 'a@gmail.com', 'Công an thời gian dí thấy mịa mày giờ chứ mượn', '', 'text', '0000-00-00', '2021-06-26 13:52:48', 'sent'),
(936, 'c@gmail.com', 'a@gmail.com', 'Mầy chưa có bằng mà', '', 'text', '0000-00-00', '2021-06-26 13:52:56', 'sent'),
(937, 'c@gmail.com', 'b@gmail.com', 'Mà kệ chứ, anh em đông đông uýnh ghen mới phê', '', 'text', '0000-00-00', '2021-06-26 13:53:18', 'sent'),
(938, 'c@gmail.com', 'b@gmail.com', 'Nhá', '', 'text', '0000-00-00', '2021-06-26 13:53:25', 'sent'),
(939, 'thaidat01222@gmail.com', 'a@gmail.com', 'xời, hẹn cái ngày nào bạn eiii', '', 'text', '0000-00-00', '2021-06-26 14:21:33', 'sent'),
(940, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Hi hi', '', 'text', '0000-00-00', '2021-06-26 14:21:40', 'sent'),
(941, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Yêu em quá ò', '', 'text', '0000-00-00', '2021-06-26 14:21:47', 'sent'),
(942, 'thaidat01222@gmail.com', 'viethoang@gmail.com', 'Merlin mạnh vl mầy ơi', '', 'text', '0000-00-00', '2021-06-26 14:22:01', 'sent'),
(943, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Moahhhhh', '', 'text', '0000-00-00', '2021-06-26 14:22:08', 'sent'),
(944, 'thaidat01222@gmail.com', 'vanha@gmail.com', 'Giới thiệu em cuốn nào hay hay đi anh', '', 'text', '0000-00-00', '2021-06-26 14:22:19', 'sent'),
(945, 'thaidat01222@gmail.com', 'minhduc@gmail.com', 'Bớ, cứu cứu PLC', '', 'text', '0000-00-00', '2021-06-26 14:22:32', 'sent'),
(946, 'a@gmail.com', 'thaidat01222@gmail.com', 'Bạn ngon :>', '', 'text', '0000-00-00', '2021-06-26 14:22:49', 'sent'),
(947, 'a@gmail.com', 'b@gmail.com', 'Ngon lành, đông đông đánh cho hăng', '', 'text', '0000-00-00', '2021-06-26 16:03:32', 'sent'),
(948, 'a@gmail.com', 'b@gmail.com', 'Tối nay 7h nhé', '', 'text', '0000-00-00', '2021-06-26 16:13:19', 'received'),
(949, 'b@gmail.com', 'a@gmail.com', 'Okela', '', 'text', '0000-00-00', '2021-06-27 00:41:13', 'received'),
(950, 'a@gmail.com', 'b@gmail.com', 'Okok', '', 'text', '0000-00-00', '2021-06-27 14:31:34', 'received'),
(951, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Người yêu ới', '', 'text', '0000-00-00', '2021-06-28 15:18:23', 'received'),
(952, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'ỚI', '', 'text', '0000-00-00', '2021-06-28 15:19:15', 'received'),
(953, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Hỡi', '', 'text', '0000-00-00', '2021-06-28 15:21:39', 'received'),
(954, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'em êy', '', 'text', '0000-00-00', '2021-06-28 15:25:44', 'received'),
(955, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'hey', '', 'text', '0000-00-00', '2021-06-28 15:26:33', 'received'),
(956, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'hihi', '', 'text', '0000-00-00', '2021-06-28 15:30:24', 'received'),
(957, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'yeeu', '', 'text', '0000-00-00', '2021-06-28 15:40:17', 'received'),
(958, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'eoooo', '', 'text', '0000-00-00', '2021-06-28 15:40:30', 'received'),
(959, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'ddoof khungf', '', 'text', '0000-00-00', '2021-06-28 15:40:43', 'received'),
(960, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'anh yêu ơi', '', 'text', '0000-00-00', '2021-06-28 15:41:07', 'received'),
(961, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'anh nè', '', 'text', '0000-00-00', '2021-06-28 15:41:11', 'received'),
(962, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'nhắn được rồi nè', '', 'text', '0000-00-00', '2021-06-28 15:41:23', 'received'),
(963, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'woaaaaa ', '', 'text', '0000-00-00', '2021-06-28 15:41:27', 'received'),
(964, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'người yêu giỏi quá dạ', '', 'text', '0000-00-00', '2021-06-28 15:41:33', 'received'),
(965, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'vui hem', '', 'text', '0000-00-00', '2021-06-28 15:41:38', 'received'),
(966, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'vui chứ', '', 'text', '0000-00-00', '2021-06-28 15:41:42', 'received'),
(967, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'vui khi có em làm bạn gái anh', '', 'text', '0000-00-00', '2021-06-28 15:41:50', 'received'),
(968, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'cái này chưa load bên mấy nick khác', '', 'text', '0000-00-00', '2021-06-28 15:41:55', 'received'),
(969, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'được chưa dạ', '', 'text', '0000-00-00', '2021-06-28 15:45:42', 'received'),
(970, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'gừi nè', '', 'text', '0000-00-00', '2021-06-28 15:46:40', 'received'),
(971, 'b@gmail.com', 'phanhien203@gmail.com', 'Xuka ơi', '', 'text', '0000-00-00', '2021-06-28 15:47:32', 'received'),
(972, 'b@gmail.com', 'phanhien203@gmail.com', 'Xuka à', '', 'text', '0000-00-00', '2021-06-28 15:47:44', 'received'),
(973, 'b@gmail.com', 'phanhien203@gmail.com', 'ỚI ơi', '', 'text', '0000-00-00', '2021-06-28 15:48:02', 'received'),
(974, 'b@gmail.com', 'phanhien203@gmail.com', 'Hí hí', '', 'text', '0000-00-00', '2021-06-28 15:49:25', 'received'),
(975, 'quocan@gmail.com', 'phanhien203@gmail.com', 'Eiiii', '', 'text', '0000-00-00', '2021-06-28 15:49:51', 'received'),
(976, 'quocan@gmail.com', 'phanhien203@gmail.com', 'Người yêu m đâu rồi', '', 'text', '0000-00-00', '2021-06-28 15:50:09', 'received'),
(977, 'phanhien203@gmail.com', 'quocan@gmail.com', 'hi', '', 'text', '0000-00-00', '2021-06-28 15:50:21', 'received'),
(978, 'quocan@gmail.com', 'phanhien203@gmail.com', 'hi gi', '', 'text', '0000-00-00', '2021-06-28 15:53:33', 'received'),
(979, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'hi', '', 'text', '0000-00-00', '2021-06-28 16:00:36', 'received'),
(980, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'lau k noi chuyen', '', 'text', '0000-00-00', '2021-06-28 16:00:55', 'received'),
(981, 'phanhien203@gmail.com', 'quocan@gmail.com', ':))', '', 'text', '0000-00-00', '2021-06-28 16:01:37', 'sent'),
(982, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'lau ha', '', 'text', '0000-00-00', '2021-06-28 16:01:50', 'received'),
(983, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'de gi noi chuyen voi bae', '', 'text', '0000-00-00', '2021-06-28 16:02:02', 'received'),
(984, 'phanhien203@gmail.com', 'quocan@gmail.com', 'ne', '', 'text', '0000-00-00', '2021-06-28 16:04:23', 'sent'),
(985, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'k rep a', '', 'text', '0000-00-00', '2021-06-28 16:04:32', 'received'),
(986, 'phuonghien@gmail.com', 'phanhien203@gmail.com', ':<', '', 'text', '0000-00-00', '2021-06-28 16:04:37', 'received'),
(987, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'rep mak', '', 'text', '0000-00-00', '2021-06-28 16:04:47', 'received'),
(988, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'tuong bo tui luon', '', 'text', '0000-00-00', '2021-06-28 16:04:58', 'received'),
(989, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'hus ye', '', 'text', '0000-00-00', '2021-06-28 16:05:20', 'received'),
(990, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'người yêu ới', '', 'text', '0000-00-00', '2021-06-28 16:05:27', 'received'),
(991, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'anh nói nè', '', 'text', '0000-00-00', '2021-06-28 16:05:42', 'received'),
(992, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'ơ', '', 'text', '0000-00-00', '2021-06-28 16:05:50', 'received'),
(993, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'ơ gì dạ', '', 'text', '0000-00-00', '2021-06-28 16:06:00', 'received'),
(994, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'em hông hiểu', '', 'text', '0000-00-00', '2021-06-28 16:06:10', 'received'),
(995, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'sao hem hiểu', '', 'text', '0000-00-00', '2021-06-28 16:06:16', 'received'),
(996, 'b@gmail.com', 'phanhien203@gmail.com', 'Xuka ới ời ơi', '', 'text', '0000-00-00', '2021-06-28 16:06:35', 'received'),
(997, 'phanhien203@gmail.com', 'b@gmail.com', 'ơi', '', 'text', '0000-00-00', '2021-06-28 16:06:41', 'received'),
(998, 'phanhien203@gmail.com', 'b@gmail.com', 'nhắn chi nhắn lắm', '', 'text', '0000-00-00', '2021-06-28 16:06:49', 'received'),
(999, 'b@gmail.com', 'phanhien203@gmail.com', ':<', '', 'text', '0000-00-00', '2021-06-28 16:06:52', 'received'),
(1000, 'b@gmail.com', 'phanhien203@gmail.com', 'đi bơi hem', '', 'text', '0000-00-00', '2021-06-28 16:06:57', 'received'),
(1001, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'dạo này học hành như nào rồi', '', 'text', '0000-00-00', '2021-06-28 16:09:00', 'received'),
(1002, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'bình thường', '', 'text', '0000-00-00', '2021-06-28 16:09:14', 'received'),
(1003, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'zậy hỏ', '', 'text', '0000-00-00', '2021-06-28 16:09:23', 'received'),
(1004, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'cày hoài', '', 'text', '0000-00-00', '2021-06-28 16:09:29', 'received'),
(1005, 'b@gmail.com', 'phanhien203@gmail.com', 'hello em yêu', '', 'text', '0000-00-00', '2021-06-28 16:10:12', 'received'),
(1006, 'phanhien203@gmail.com', 'b@gmail.com', 'em nào', '', 'text', '0000-00-00', '2021-06-28 16:10:20', 'received'),
(1007, 'b@gmail.com', 'phanhien203@gmail.com', 'em í', '', 'text', '0000-00-00', '2021-06-28 16:10:24', 'received'),
(1008, 'b@gmail.com', 'phanhien203@gmail.com', 'là em í', '', 'text', '0000-00-00', '2021-06-28 16:10:48', 'received'),
(1009, 'a@gmail.com', 'b@gmail.com', 'Ê ml', '', 'text', '0000-00-00', '2021-06-28 16:11:10', 'received'),
(1010, 'b@gmail.com', 'a@gmail.com', 'Gì ku', '', 'text', '0000-00-00', '2021-06-28 16:11:16', 'received'),
(1011, 'a@gmail.com', 'b@gmail.com', 'ĐI chơi?', '', 'text', '0000-00-00', '2021-06-28 16:11:21', 'received'),
(1012, 'b@gmail.com', 'a@gmail.com', 'Éo', '', 'text', '0000-00-00', '2021-06-28 16:11:24', 'received'),
(1013, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'ê', '', 'text', '0000-00-00', '2021-06-28 16:12:51', 'received'),
(1014, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'đây', '', 'text', '0000-00-00', '2021-06-28 16:12:59', 'received'),
(1015, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'đi chơi', '', 'text', '0000-00-00', '2021-06-28 16:13:39', 'received'),
(1016, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'ơ', '', 'text', '0000-00-00', '2021-06-28 16:13:48', 'received'),
(1017, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'đi', '', 'text', '0000-00-00', '2021-06-28 16:13:53', 'received'),
(1018, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'ở đâu', '', 'text', '0000-00-00', '2021-06-28 16:16:22', 'received'),
(1019, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'đâu', '', 'text', '0000-00-00', '2021-06-28 16:16:29', 'received'),
(1020, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'đâu cũng được', '', 'text', '0000-00-00', '2021-06-28 16:18:32', 'received'),
(1021, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'hm', '', 'text', '0000-00-00', '2021-06-28 16:18:59', 'received'),
(1022, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'dễ tính ha', '', 'text', '0000-00-00', '2021-06-28 16:19:06', 'received'),
(1023, 'phanhien203@gmail.com', 'phuonghien@gmail.com', '..', '', 'text', '0000-00-00', '2021-06-28 16:19:25', 'received'),
(1024, 'phuonghien@gmail.com', 'phanhien203@gmail.com', '.', '', 'text', '0000-00-00', '2021-06-28 16:19:33', 'received'),
(1025, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'nhanh', '', 'text', '0000-00-00', '2021-06-28 16:19:42', 'received'),
(1026, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'ợ', '', 'text', '0000-00-00', '2021-06-28 16:19:50', 'received'),
(1027, 'phanhien203@gmail.com', 'phuonghien@gmail.com', 'mau', '', 'text', '0000-00-00', '2021-06-28 16:22:45', 'received'),
(1028, 'phuonghien@gmail.com', 'phanhien203@gmail.com', 'chờ m', '', 'text', '0000-00-00', '2021-06-28 16:25:23', 'received'),
(1103, 'b@gmail.com', 'a@gmail.com', 'Buồn rồi', '', 'text', '0000-00-00', '2021-06-29 23:34:56', 'received'),
(1104, 'a@gmail.com', 'b@gmail.com', 'Xuka đi với Dekhi tiếp hả mầy', '', 'text', '0000-00-00', '2021-06-29 23:35:12', 'received'),
(1105, 'b@gmail.com', 'a@gmail.com', 'Ời', '', 'text', '0000-00-00', '2021-06-29 23:35:19', 'received'),
(1106, 'a@gmail.com', 'b@gmail.com', 'Há há', '', 'text', '0000-00-00', '2021-06-29 23:35:22', 'received'),
(1107, 'a@gmail.com', 'b@gmail.com', 'Thế bố đi chơi với Hinata đây', '', 'text', '0000-00-00', '2021-06-29 23:35:38', 'received'),
(1108, 'a@gmail.com', 'b@gmail.com', 'Lêu lêu', '', 'text', '0000-00-00', '2021-06-29 23:35:44', 'received'),
(1109, 'b@gmail.com', 'phanhien203@gmail.com', 'là chính em đó', '', 'text', '0000-00-00', '2021-07-08 16:05:51', 'sent'),
(1110, 'a@gmail.com', 'b@gmail.com', 'haha', '', 'text', '0000-00-00', '2021-07-09 00:19:55', 'sent'),
(1111, 'a@gmail.com', 'b@gmail.com', 'hihi', '', 'text', '0000-00-00', '2021-07-09 00:38:10', 'sent'),
(1112, 'a@gmail.com', 'b@gmail.com', 'aaa', '', 'text', '0000-00-00', '2021-07-09 00:38:28', 'sent'),
(1113, 'a@gmail.com', 'b@gmail.com', 'dd', '', 'text', '0000-00-00', '2021-07-09 00:39:14', 'sent'),
(1114, 'a@gmail.com', 'b@gmail.com', 'ss', '', 'text', '0000-00-00', '2021-07-09 00:47:46', 'sent');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `avatar` varchar(255) NOT NULL DEFAULT '/image/avatar/',
  `fullName` varchar(100) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `phoneNumber` varchar(14) NOT NULL,
  `id` int(11) NOT NULL,
  `isLogin` tinyint(1) NOT NULL DEFAULT '0',
  `logoutTime` datetime NOT NULL,
  `age` int(2) NOT NULL,
  `synopsis` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `avatar`, `fullName`, `phoneNumber`, `id`, `isLogin`, `logoutTime`, `age`, `synopsis`) VALUES
('Dora', '1', 'c@gmail.com', '/image/avatar/15.jpg', 'Doraemon', '', 15, 0, '2021-06-26 14:21:00', 200, 'Nobita-kun'),
('hoaithan', 'hoaithan', 'hoaithan@gmail.com', '/image/avatar/1.jpg', 'Trần Hoài Thân', '0161616165', 1, 0, '2021-06-16 10:54:24', 22, 'The Cassette!!!'),
('minhduc', 'minhduc', 'minhduc@gmail.com', '/image/avatar/5.jpg', 'Lê Minh Đức', '019191919', 5, 0, '2021-06-16 11:00:04', 21, 'Hãy tử tế, vì tất cả những người bạn gặp đều đang chiến đấu một trận chiến khó khăn của họ'),
('Naruto', '1', 'a@gmail.com', '/image/avatar/13.jpeg', 'Uzumaki Bố Của Boruto', '016161616', 13, 1, '0000-00-00 00:00:00', 22, 'I am going to become Hokage!!!!!!!!!!!!!!!!'),
('ngochoa', 'ngochoa', 'ngochoa@gmail.com', '/image/avatar/7.jpg', 'NTN Hoa', '012121212', 7, 0, '2021-06-28 15:56:26', 222, 'Cái gì cũng biết chỉ có biết điều là không'),
('nhungoc', 'nhungoc', 'nhungoc@gmail.com', '/image/avatar/6.jpg', 'Hồ Thị Như Ngọc', '0101010101', 6, 0, '2021-06-16 11:00:50', 11, 'Hãy sống mỗi ngày như thể đó là ngày cuối cùng của bạn'),
('Nobita', '1', 'b@gmail.com', '/image/avatar/14.jpg', 'Nobi Nobita', '017171717', 14, 1, '0000-00-00 00:00:00', 87, 'Doraemonnnnnn huhuhu!!'),
('phanhien203', 'phanhien203', 'phanhien203@gmail.com', '/image/avatar/9.jpg', 'Phan Thị Thu Hiền', '0764622582', 9, 0, '2021-07-08 14:30:52', 22, 'Never give up <3 '),
('phuonghien', 'phuonghien', 'phuonghien@gmail.com', '/image/avatar/10.jpg', 'Huỳnh Thị Phương Hiền', '013131313', 10, 0, '2021-07-08 14:31:12', 23, 'Hìn Hìn'),
('quocan', 'quocan', 'quocan@gmail.com', '/image/avatar/3.jpg', 'Vũ Quốc An', '1414141414', 3, 0, '2021-07-08 14:31:27', 33, 'Nếu bạn đối xử với một con chó tốt như một con người, thì nó sẽ đối xử với bạn như một con chó'),
('sasuke', '1', 'd@gmail.com', '/image/avatar/16.jpg', 'Uchiha Papasuke', '0124586224', 16, 0, '2021-06-22 10:52:24', 40, 'Itachi ni-san, I miss you'),
('thaidat01222', 'quang123', 'thaidat01222@gmail.com', '/image/avatar/11.jpg', 'Thái Duy Đạt', '0762865927', 11, 0, '2021-06-28 17:03:43', 22, 'Người yêu tên Hiền'),
('thaihiep', 'thaihiep', 'thaihiep@gmail.com', '/image/avatar/4.jpg', 'Cao Văn Thái Hiệp', '018181818', 4, 0, '2021-06-16 10:59:00', 25, 'Hạnh phúc đạt được khi bạn ngừng chờ đợi điều đó xảy ra và thực hiện các bước để biến nó thành hiện thực.'),
('tronganh', 'tronganh', 'tronganh@gmail.com', '/image/avatar/2.jpg', 'Đặng Lê Trọng Anh', '0151515151', 2, 0, '2021-06-16 10:29:26', 23, 'Take it easy!'),
('vanha', 'vanha', 'vanha@gmail.com', '/image/avatar/8.jpg', 'Nguyễn Văn Hà', '0131141414', 8, 0, '2021-06-16 11:08:00', 17, 'Nói ít đi, đọc nhiều hơn'),
('viethoang', 'viethoang', 'viethoang@gmail.com', '/image/avatar/12.jpg', 'Bùi Tuấn Việt Hoàng', '015151515', 12, 0, '2021-06-16 11:12:08', 99, 'Rồi một ngày em sẽ nhận ra, những đóa hoa vẫn nở dù em tưới chúng bằng nước mắt của chính mình.');

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
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lastchat`
--
ALTER TABLE `lastchat`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `messageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1115;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
