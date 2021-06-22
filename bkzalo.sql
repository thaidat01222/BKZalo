--
-- Database: `bkzalo`
--

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
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
