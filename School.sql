-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 19 2023 г., 18:23
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `School`
--

-- --------------------------------------------------------

--
-- Структура таблицы `Geography`
--

CREATE TABLE `Geography` (
  `id` int NOT NULL,
  `Surname` varchar(25) NOT NULL,
  `Mark1` int DEFAULT NULL,
  `Mark2` int DEFAULT NULL,
  `Mark3` int DEFAULT NULL,
  `Mark4` int DEFAULT NULL,
  `Mark5` int DEFAULT NULL,
  `Mark6` int DEFAULT NULL,
  `Truancy_Good_Reason` int DEFAULT NULL,
  `Truancy_Bad_Reason` int DEFAULT NULL,
  `GoodMark` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `Geography`
--

INSERT INTO `Geography` (`id`, `Surname`, `Mark1`, `Mark2`, `Mark3`, `Mark4`, `Mark5`, `Mark6`, `Truancy_Good_Reason`, `Truancy_Bad_Reason`, `GoodMark`) VALUES
(1, 'Иванов', 3, 9, 5, 3, NULL, NULL, NULL, NULL, NULL),
(2, 'Смирнов', 3, 3, 3, NULL, NULL, NULL, 6, NULL, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `Math`
--

CREATE TABLE `Math` (
  `id` int NOT NULL,
  `Surname` varchar(25) CHARACTER SET utf32 COLLATE utf32_general_ci NOT NULL,
  `Mark1` int DEFAULT NULL,
  `Mark2` int DEFAULT NULL,
  `Mark3` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `Math`
--

INSERT INTO `Math` (`id`, `Surname`, `Mark1`, `Mark2`, `Mark3`) VALUES
(1, 'Иванов', NULL, NULL, NULL),
(2, 'Смирнов', 3, 9, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `Subjects`
--

CREATE TABLE `Subjects` (
  `School_Subs` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `School_Subs_rus` varchar(25) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

--
-- Дамп данных таблицы `Subjects`
--

INSERT INTO `Subjects` (`School_Subs`, `School_Subs_rus`) VALUES
('Geography', 'География'),
('Math', 'Математика');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `Geography`
--
ALTER TABLE `Geography`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Math`
--
ALTER TABLE `Math`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `Subjects`
--
ALTER TABLE `Subjects`
  ADD PRIMARY KEY (`School_Subs`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `Geography`
--
ALTER TABLE `Geography`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `Math`
--
ALTER TABLE `Math`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
