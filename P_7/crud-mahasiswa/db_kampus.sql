-- --------------------------------------------------------
-- Database untuk CRUD Mahasiswa (Node.js + Express)
-- Import file ini lewat phpMyAdmin atau:
--   mysql -u root < db_kampus.sql
-- --------------------------------------------------------

CREATE DATABASE IF NOT EXISTS `db_kampus`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;

USE `db_kampus`;

-- --------------------------------------------------------
-- Struktur tabel `mahasiswa`
-- Kolom disesuaikan dengan server.js
-- --------------------------------------------------------

DROP TABLE IF EXISTS `mahasiswa`;

CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nim` varchar(20) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `jurusan` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `nim` (`nim`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------
-- Data contoh
-- --------------------------------------------------------

INSERT INTO `mahasiswa` (`nim`, `nama`, `jurusan`, `email`) VALUES
('2406001', 'Haikal Muhamad Sabqi', 'Teknik Informatika', 'haikal@example.com'),
('2406002', 'Andi Saputra', 'Sistem Informasi', 'andi@example.com'),
('2406003', 'Citra Dewi', 'Teknik Komputer', 'citra@example.com'),
('2406004', 'Budi Santoso', 'Teknik Informatika', 'budi@example.com'),
('2406005', 'Eka Rahayu', 'Sistem Informasi', 'eka@example.com');
