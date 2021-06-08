-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 08, 2021 at 04:58 AM
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
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `fromID` varchar(25) NOT NULL,
  `toID` varchar(25) NOT NULL,
  `content` text NOT NULL,
  `image` varchar(50) NOT NULL,
  `contentType` varchar(10) NOT NULL,
  `seenTime` date NOT NULL,
  `sentTime` date NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `phoneNumber` varchar(14) NOT NULL,
  `id` int(11) NOT NULL,
  `isLogin` tinyint(1) NOT NULL DEFAULT '0',
  `expireTime` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `avatar`, `fullName`, `phoneNumber`, `id`, `isLogin`, `expireTime`) VALUES
('admin', 'admin', 'admin@gmail.com', '', 'admin', '', 1, 0, '0000-00-00'),
('client', 'client', 'client@gmail.com', '', 'client', '', 2, 0, '0000-00-00'),
('duydat1', 'duydat', 'duydat1@gmail.com', '', 'duy dat', '', 3, 0, '0000-00-00'),
('duydat2', 'duydat', 'duydat2@gmail.com', '', 'duydat', '', 4, 0, '0000-00-00'),
('duydat3', 'duydat', 'duydat3@gmail.com', '', 'duydat', '', 5, 0, '0000-00-00'),
('Percy Jackson', 'hihihaha', 'percyusjasson@gmail.com', '', '', '', 6, 0, '0000-00-00'),
('phanhien1', 'phanhien', 'phanhien1@gmail.com', '', 'phanhien', '', 7, 0, '0000-00-00'),
('phanhien2', 'phanhien', 'phanhien2@gmail.com', '', 'phanhien', '', 8, 0, '0000-00-00'),
('phanhien203', 'hiendangyeu', 'phanhien203@gmail.com', '', 'phan thi thu hien', '0764622582', 9, 1, '0000-00-00'),
('phanhien3', 'phanhien', 'phanhien3@gmail.com', '', 'phanhien', '', 10, 0, '0000-00-00'),
('thaidat01222', 'quang123', 'thaidat01222@gmail.com', '', 'thai duy dat', '0762865927', 11, 1, '0000-00-00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
