-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-02-2021 a las 03:34:18
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `modulocompra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proveedor`
--

CREATE TABLE `proveedor` (
  `proveedorreferencia` varchar(100) NOT NULL,
  `proveedornombre` varchar(100) NOT NULL,
  `proveedorruc` varchar(100) NOT NULL,
  `proveedorprovincia` varchar(100) NOT NULL,
  `proveedorciudad` varchar(100) NOT NULL,
  `proveedordireccion` varchar(100) NOT NULL,
  `proveedortelefono` varchar(100) NOT NULL,
  `proveedorcorreo` varchar(100) NOT NULL,
  `proveedorweb` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `proveedor`
--

INSERT INTO `proveedor` (`proveedorreferencia`, `proveedornombre`, `proveedorruc`, `proveedorprovincia`, `proveedorciudad`, `proveedordireccion`, `proveedortelefono`, `proveedorcorreo`, `proveedorweb`) VALUES
('1', 'Pronaca SA', '20221', 'Manabi', 'Manta', 'Ave 4 de noviembre', '23412121', 'pronaca@gmail.com', 'cocacola3.web'),
('2', 'Juris SA', '20221', 'Manabi', 'Manta', 'Ave 4 de noviembre', '25613212', 'juris@gmail.com', 'cocacola3.web'),
('3', 'Coca  Cola Company', '20221', 'Manabi', 'Manta', 'Ave 4 de noviembre', '1989463940', 'cocacola@gmail.com', 'cocacola3.web');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `rol` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `contraseña`, `rol`) VALUES
(1, 'admin', 'admin', 'admin'),
(2, 'proveedor', 'proveedor', 'proveedor');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `proveedor`
--
ALTER TABLE `proveedor`
  ADD PRIMARY KEY (`proveedorreferencia`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
