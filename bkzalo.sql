-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 22, 2021 at 05:41 AM
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
('a@gmail.com', 'b@gmail.com', 605, '2021-06-16 12:34:51', 1),
('a@gmail.com', 'c@gmail.com', 622, '2021-06-16 13:03:17', 2),
('b@gmail.com', 'c@gmail.com', 634, '2021-06-16 13:33:55', 3),
('phanhien203@gmail.com', 'thaidat01222@gmail.com', 783, '2021-06-20 14:39:15', 4),
('phanhien203@gmail.com', 'quocan@gmail.com', 752, '2021-06-20 11:11:14', 5),
('quocan@gmail.com', 'thaidat01222@gmail.com', 556, '2021-06-16 12:09:30', 6),
('thaidat01222@gmail.com', 'thaihiep@gmail.com', 563, '2021-06-16 12:12:59', 7),
('hoaithan@gmail.com', 'thaidat01222@gmail.com', 575, '2021-06-16 12:17:24', 8),
('phuonghien@gmail.com', 'phanhien203@gmail.com', 655, '2021-06-16 15:16:49', 9),
('nhungoc@gmail.com', 'thaidat01222@gmail.com', 593, '2021-06-16 12:27:35', 11),
('thaidat01222@gmail.com', 'ngochoa@gmail.com', 596, '2021-06-16 12:28:34', 12),
('d@gmail.com', 'a@gmail.com', 608, '2021-06-16 12:42:21', 13),
('thaidat01222@gmail.com', 'a@gmail.com', 665, '2021-06-19 16:36:43', 14),
('thaidat01222@gmail.com', 'd@gmail.com', 610, '2021-06-16 12:56:22', 15),
('thaidat01222@gmail.com', 'tronganh@gmail.com', 611, '2021-06-16 12:56:35', 16),
('thaidat01222@gmail.com', 'minhduc@gmail.com', 612, '2021-06-16 12:57:09', 17),
('thaidat01222@gmail.com', 'vanha@gmail.com', 613, '2021-06-16 12:57:28', 18),
('thaidat01222@gmail.com', 'viethoang@gmail.com', 614, '2021-06-16 12:57:49', 19),
('a@gmail.com', 'hoaithan@gmail.com', 615, '2021-06-16 12:58:14', 20),
('a@gmail.com', 'tronganh@gmail.com', 616, '2021-06-16 12:58:30', 21),
('a@gmail.com', 'quocan@gmail.com', 617, '2021-06-16 12:58:49', 22),
('a@gmail.com', 'thaihiep@gmail.com', 618, '2021-06-16 12:59:03', 23),
('a@gmail.com', 'minhduc@gmail.com', 619, '2021-06-16 12:59:40', 24),
('a@gmail.com', 'nhungoc@gmail.com', 620, '2021-06-16 12:59:55', 25),
('a@gmail.com', 'ngochoa@gmail.com', 635, '2021-06-16 15:05:31', 26),
('b@gmail.com', 'hoaithan@gmail.com', 623, '2021-06-16 13:16:59', 27),
('b@gmail.com', 'tronganh@gmail.com', 624, '2021-06-16 13:17:22', 28),
('b@gmail.com', 'quocan@gmail.com', 625, '2021-06-16 13:18:12', 29),
('b@gmail.com', 'thaihiep@gmail.com', 626, '2021-06-16 13:30:26', 30),
('b@gmail.com', 'minhduc@gmail.com', 627, '2021-06-16 13:30:52', 31),
('b@gmail.com', 'nhungoc@gmail.com', 628, '2021-06-16 13:31:21', 32),
('b@gmail.com', 'ngochoa@gmail.com', 629, '2021-06-16 13:31:42', 33),
('b@gmail.com', 'vanha@gmail.com', 630, '2021-06-16 13:32:12', 34),
('b@gmail.com', 'phanhien203@gmail.com', 631, '2021-06-16 13:32:27', 35),
('b@gmail.com', 'phuonghien@gmail.com', 632, '2021-06-16 13:32:51', 36),
('b@gmail.com', 'viethoang@gmail.com', 633, '2021-06-16 13:33:10', 37);

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
(750, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 11:09:26', 'received'),
(751, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '2', '', 'text', '0000-00-00', '2021-06-20 11:10:16', 'received'),
(752, 'phanhien203@gmail.com', 'quocan@gmail.com', '3', '', 'text', '0000-00-00', '2021-06-20 11:11:14', 'sent'),
(753, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '3', '', 'text', '0000-00-00', '2021-06-20 11:11:38', 'received'),
(754, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '4', '', 'text', '0000-00-00', '2021-06-20 11:12:01', 'received'),
(755, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '5', '', 'text', '0000-00-00', '2021-06-20 11:13:00', 'received'),
(756, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '6', '', 'text', '0000-00-00', '2021-06-20 11:13:37', 'received'),
(757, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '7', '', 'text', '0000-00-00', '2021-06-20 11:13:39', 'received'),
(758, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'd', '', 'text', '0000-00-00', '2021-06-20 11:14:11', 'received'),
(759, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'e', '', 'text', '0000-00-00', '2021-06-20 13:54:57', 'received'),
(760, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 13:57:36', 'received'),
(761, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '2', '', 'text', '0000-00-00', '2021-06-20 13:59:00', 'received'),
(762, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 14:00:48', 'received'),
(763, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 14:03:24', 'received'),
(764, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '4', '', 'text', '0000-00-00', '2021-06-20 14:14:09', 'received'),
(765, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '5', '', 'text', '0000-00-00', '2021-06-20 14:14:36', 'received'),
(766, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '5', '', 'text', '0000-00-00', '2021-06-20 14:15:39', 'received'),
(767, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '6', '', 'text', '0000-00-00', '2021-06-20 14:23:01', 'received'),
(768, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 14:23:53', 'received'),
(769, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '2', '', 'text', '0000-00-00', '2021-06-20 14:23:57', 'received'),
(770, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 14:24:13', 'received'),
(771, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '2', '', 'text', '0000-00-00', '2021-06-20 14:25:07', 'received'),
(772, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '3', '', 'text', '0000-00-00', '2021-06-20 14:25:13', 'received'),
(773, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '3', '', 'text', '0000-00-00', '2021-06-20 14:26:04', 'received'),
(774, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '4', '', 'text', '0000-00-00', '2021-06-20 14:26:08', 'received'),
(775, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '5', '', 'text', '0000-00-00', '2021-06-20 14:26:12', 'received'),
(776, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Anh Yeeu Em', '', 'text', '0000-00-00', '2021-06-20 14:29:39', 'sent'),
(777, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', '1', '', 'text', '0000-00-00', '2021-06-20 14:30:33', 'received'),
(778, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Nhiefu lam', '', 'text', '0000-00-00', '2021-06-20 14:35:34', 'sent'),
(779, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'Hiuhiu', '', 'text', '0000-00-00', '2021-06-20 14:36:19', 'received'),
(780, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'lamws lamws', '', 'text', '0000-00-00', '2021-06-20 14:38:33', 'received'),
(781, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'buồn làm gì anh ơi', '', 'text', '0000-00-00', '2021-06-20 14:38:42', 'received'),
(782, 'thaidat01222@gmail.com', 'phanhien203@gmail.com', 'buồn, hông được mlem', '', 'text', '0000-00-00', '2021-06-20 14:39:06', 'received'),
(783, 'phanhien203@gmail.com', 'thaidat01222@gmail.com', 'giờ đi mlem đi', '', 'text', '0000-00-00', '2021-06-20 14:39:15', 'received'),
(784, 'a@gmail.com', 'thaidat01222@gmail.com', 'hiuhiu', '', 'text', '0000-00-00', '2021-06-21 15:42:22', 'sent'),
(785, 'a@gmail.com', 'thaidat01222@gmail.com', 'hiuhiu', '', 'text', '0000-00-00', '2021-06-21 15:42:40', 'sent'),
(786, 'a@gmail.com', 'thaidat01222@gmail.com', 'jiji', '', 'text', '0000-00-00', '2021-06-21 15:44:12', 'sent'),
(787, 'thaidat01222@gmail.com', 'a@gmail.com', 'hừ', '', 'text', '0000-00-00', '2021-06-21 15:47:14', 'sent');

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
('Dora', '1', 'c@gmail.com', '/image/avatar/15.jpg', 'Doraemon', '', 15, 0, '2021-06-16 13:58:26', 0, 'Nobita-kun'),
('hoaithan', 'hoaithan', 'hoaithan@gmail.com', '/image/avatar/1.jpg', 'Trần Hoài Thân', '0161616165', 1, 0, '2021-06-16 10:54:24', 22, 'The Cassette!!!'),
('minhduc', 'minhduc', 'minhduc@gmail.com', '/image/avatar/5.jpg', 'Lê Minh Đức', '019191919', 5, 0, '2021-06-16 11:00:04', 21, 'Hãy tử tế, vì tất cả những người bạn gặp đều đang chiến đấu một trận chiến khó khăn của họ'),
('Naruto', '1', 'a@gmail.com', '/image/avatar/13.jpg', 'Uzumaki Bố Của Boruto', '016161616', 13, 1, '0000-00-00 00:00:00', 22, 'I am going to become Hokage!!!!!!!!!!!!!!!!'),
('ngochoa', 'ngochoa', 'ngochoa@gmail.com', '/image/avatar/7.jpg', 'NTN Hoa', '012121212', 7, 0, '2021-06-16 11:01:04', 222, 'Cái gì cũng biết chỉ có biết điều là không'),
('nhungoc', 'nhungoc', 'nhungoc@gmail.com', '/image/avatar/6.jpg', 'Hồ Thị Như Ngọc', '0101010101', 6, 0, '2021-06-16 11:00:50', 11, 'Hãy sống mỗi ngày như thể đó là ngày cuối cùng của bạn'),
('Nobita', '1', 'b@gmail.com', '/image/avatar/14.jpg', 'Nobi Nobita', '017171717', 14, 0, '2021-06-19 15:07:09', 87, 'Doraemonnnnnn huhuhu!!'),
('phanhien203', 'phanhien203', 'phanhien203@gmail.com', '/image/avatar/9.jpg', 'Phan Thị Thu Hiền', '0764622582', 9, 1, '0000-00-00 00:00:00', 22, 'Never give up <3 '),
('phuonghien', 'phuonghien', 'phuonghien@gmail.com', '/image/avatar/10.jpg', 'Huỳnh Thị Phương Hiền', '013131313', 10, 0, '2021-06-16 15:40:52', 23, 'Hìn Hìn'),
('quocan', 'quocan', 'quocan@gmail.com', '/image/avatar/3.jpg', 'Vũ Quốc An', '1414141414', 3, 0, '2021-06-20 13:31:06', 33, 'Nếu bạn đối xử với một con chó tốt như một con người, thì nó sẽ đối xử với bạn như một con chó'),
('sasuke', '1', 'd@gmail.com', '/image/avatar/16.jpg', 'Uchiha Papasuke', '0124586224', 16, 0, '2021-06-19 14:43:13', 40, 'Itachi ni-san, I miss you'),
('thaidat01222', 'quang123', 'thaidat01222@gmail.com', '/image/avatar/11.jpg', 'Thái Duy Đạt', '0762865927', 11, 1, '0000-00-00 00:00:00', 22, 'Người yêu tên Hiền'),
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
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `messageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=788;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
