-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 09, 2019 at 11:16 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `action_type`
--

CREATE TABLE `action_type` (
  `acttion_type_id` int(11) NOT NULL,
  `action_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `action_type`
--

INSERT INTO `action_type` (`acttion_type_id`, `action_type`) VALUES
(1, 'R'),
(2, 'RW'),
(3, 'RWD');

-- --------------------------------------------------------

--
-- Table structure for table `resource_role`
--

CREATE TABLE `resource_role` (
  `resource_name` varchar(100) NOT NULL,
  `role_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `resource_role`
--

INSERT INTO `resource_role` (`resource_name`, `role_name`) VALUES
('attendance', 'admin'),
('attendance', 'user'),
('attendance', 'manager');

-- --------------------------------------------------------

--
-- Table structure for table `roel_action_type`
--

CREATE TABLE `roel_action_type` (
  `role_name` varchar(100) NOT NULL,
  `action_type_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roel_action_type`
--

INSERT INTO `roel_action_type` (`role_name`, `action_type_id`) VALUES
('admin', 3),
('manager', 2),
('user', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users_role`
--

CREATE TABLE `users_role` (
  `user_name` varchar(100) NOT NULL,
  `role` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users_role`
--

INSERT INTO `users_role` (`user_name`, `role`) VALUES
('harshit', 'admin'),
('harshit', 'user'),
('pulkit', 'user');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
