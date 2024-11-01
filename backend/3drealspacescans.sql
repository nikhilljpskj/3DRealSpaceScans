-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 02, 2024 at 12:24 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `3drealspacescans`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `contactMethod` enum('Call','Text','Email') NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `serviceLocation` varchar(255) DEFAULT NULL,
  `accessInstructions` text DEFAULT NULL,
  `scanType` enum('Residential','Commercial') NOT NULL,
  `preferredDate` datetime NOT NULL,
  `backupDate` datetime DEFAULT NULL,
  `purpose` varchar(255) NOT NULL,
  `projectScope` text DEFAULT NULL,
  `numberOfRooms` varchar(255) DEFAULT NULL,
  `outputFormats` varchar(255) DEFAULT NULL,
  `additionalServices` text DEFAULT NULL,
  `completionDate` date DEFAULT NULL,
  `specialInstructions` text DEFAULT NULL,
  `budgetRange` decimal(10,2) DEFAULT NULL,
  `projectTimeline` enum('Flexible','Urgent','Standard') NOT NULL,
  `deliveryPreferences` text DEFAULT NULL,
  `termsAccepted` tinyint(1) DEFAULT 0,
  `privacyConsent` tinyint(1) DEFAULT 0,
  `showcaseConsent` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `fullName`, `email`, `phone`, `contactMethod`, `company`, `serviceLocation`, `accessInstructions`, `scanType`, `preferredDate`, `backupDate`, `purpose`, `projectScope`, `numberOfRooms`, `outputFormats`, `additionalServices`, `completionDate`, `specialInstructions`, `budgetRange`, `projectTimeline`, `deliveryPreferences`, `termsAccepted`, `privacyConsent`, `showcaseConsent`) VALUES
(5, 'Nikhil', 'nikhiljp.skj@gmail.com', '08921652221', 'Call', 'Envestnet Yodlee', 'ghhh', 'hsfd', 'Residential', '2024-11-15 00:53:00', '2024-11-07 00:53:00', 'Construction', 'ddd', 'Kitchen', 'STL', NULL, '0000-00-00', 'cccccccc', 500.00, 'Flexible', NULL, 1, 1, 1),
(6, 'Nikhil', 'nikhiljp.skj@gmail.com', '08921652221', 'Text', 'Envestnet Yodlee', 'lo', 'jk', 'Residential', '2024-11-08 01:29:00', '2024-11-29 01:29:00', 'Real Estate', 'jjk', 'Living Room,Bedroom,Kitchen', 'OBJ', NULL, '0000-00-00', 'ty', 707.00, 'Flexible', NULL, 1, 1, 1),
(7, 'Nikhil Prakash', 'nikhiljp.skj@gmail.com', '08921652221', 'Call', 'Envestnet', 'io', 'rty', 'Residential', '2024-11-21 01:54:00', '2024-11-20 01:54:00', 'Real Estate', 'f', 'Kitchen', 'PLY', NULL, '0000-00-00', 'h', 500.00, 'Flexible', NULL, 1, 1, 1),
(8, 'Nikhil', 'nikhiljp.skj@gmail.com', '08921652221', 'Call', 'Envestnet Yodlee', 'f', 'c', 'Residential', '2024-11-09 01:58:00', '2024-11-14 01:58:00', 'Real Estate', 'f', 'Kitchen', 'STL', NULL, '0000-00-00', 'f', 579.00, 'Flexible', NULL, 1, 1, 1),
(9, 'Nikhil Prakash', 'nikhiljp.skj@gmail.com', '7560879155', 'Call', 's', 'sss', 'ss', 'Residential', '2024-11-09 02:52:00', '2024-11-28 02:52:00', 'Real Estate', 's', 'Bedroom', 'PLY', NULL, '0000-00-00', 'ss', 500.00, 'Flexible', NULL, 1, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) NOT NULL,
  `file_path` varchar(550) DEFAULT NULL,
  `file_type` varchar(500) DEFAULT NULL,
  `upload_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `booking_id`, `file_path`, `file_type`, `upload_date`) VALUES
(1, 5, '/uploads/1730488982773-604122545-130924-DETAIL ADV_GITC REGULAR_SCO_2024-25_15.pdf', 'application/pdf', '2024-11-01 19:23:51'),
(2, 6, '/uploads/1730490466593-812193225-Sreyas_s.pdf', 'application/pdf', '2024-11-01 20:00:01'),
(3, 7, '/uploads/1730492328998-243418131-CV template.pdf', 'application/pdf', '2024-11-01 20:24:38'),
(4, 7, '/uploads/1730492329003-727538144-3D_Scanning_Service_Booking_Form_Layout.pdf', 'application/pdf', '2024-11-01 20:24:38'),
(5, 7, '/uploads/1730492329003-622311009-Enhanced_3D_Scanning_Service_Booking_Form.pdf', 'application/pdf', '2024-11-01 20:24:38'),
(6, 7, '/uploads/1730492329003-384453449-English Lecture Planner _ SBI SO Assistant Manager Batch 2024.pdf', 'application/pdf', '2024-11-01 20:24:38'),
(7, 7, '/uploads/1730492329005-318961343-Test Planner _ SBI SO Assistant Manager Batch 2024.pdf', 'application/pdf', '2024-11-01 20:24:38'),
(8, 7, '/uploads/1730492329005-361025385-9291642.pdf', 'application/pdf', '2024-11-01 20:24:38'),
(9, 8, '/uploads/1730492900923-425282285-LIFE-React Native Interview Task.pdf', 'application/pdf', '2024-11-01 20:28:40'),
(10, 9, '/uploads/1730496125203-342641242-Sreyas_s.pdf', 'application/pdf', '2024-11-01 21:22:22');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(250) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `password`, `isAdmin`) VALUES
(1, NULL, NULL, 'admin@example.com', '$2a$10$KtkRP0uERaX.EzUMjbbiT.QEXDYwvwIXFTk2mufdTzI3MWYKekg3a', 1),
(4, 'Nikhil Prakash', '08921652221', 'nikhil@example.com', '$2a$10$HMNHHgY05aZz6k.lyAC7weZmHdnjH3gnVi55UScRutRH81LS3/4yq', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`),
  ADD KEY `booking_id` (`booking_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `files`
--
ALTER TABLE `files`
  ADD CONSTRAINT `files_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
