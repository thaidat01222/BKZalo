-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2021 at 04:30 AM
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
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(55) NOT NULL,
  `password` varchar(55) NOT NULL,
  `email` varchar(55) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `phoneNumber` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`, `email`, `avatar`, `fullName`, `phoneNumber`) VALUES
('admin', 'admin', 'admin@gmail.com', '', 'admin', ''),
('client', 'client', 'client@gmail.com', '', 'client', ''),
('duydat1', 'duydat', 'duydat1@gmail.com', '', 'duy dat', ''),
('duydat2', 'duydat', 'duydat2@gmail.com', '', 'duydat', ''),
('duydat3', 'duydat', 'duydat3@gmail.com', '', 'duydat', ''),
('Percy Jackson', 'hihihaha', 'percyusjasson@gmail.com', '', '', ''),
('phanhien1', 'phanhien', 'phanhien1@gmail.com', '', 'phanhien', ''),
('phanhien2', 'phanhien', 'phanhien2@gmail.com', '', 'phanhien', ''),
('phanhien203', 'hiendangyeu', 'phanhien203@gmail.com', '', 'phan thi thu hien', '0764622582'),
('phanhien3', 'phanhien', 'phanhien3@gmail.com', '', 'phanhien', ''),
('thaidat01222', 'quang123', 'thaidat01222@gmail.com', '', 'thai duy dat', '0762865927');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
