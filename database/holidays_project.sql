-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: holidays_project
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `followers`
--

DROP TABLE IF EXISTS `followers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `followers` (
  `holidayID` int NOT NULL,
  `userID` int NOT NULL,
  KEY `userID_idx` (`userID`),
  KEY `holidayID_idx` (`holidayID`),
  CONSTRAINT `holidayID` FOREIGN KEY (`holidayID`) REFERENCES `holidays` (`holidayID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `userID` FOREIGN KEY (`userID`) REFERENCES `users` (`userID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `followers`
--

LOCK TABLES `followers` WRITE;
/*!40000 ALTER TABLE `followers` DISABLE KEYS */;
INSERT INTO `followers` VALUES (2,1),(1,3),(2,4),(3,3),(2,3),(2,2),(1,2),(19,4),(8,4),(18,4),(12,4),(9,3),(17,3),(17,4),(1,4),(13,4);
/*!40000 ALTER TABLE `followers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `holidays`
--

DROP TABLE IF EXISTS `holidays`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `holidays` (
  `holidayID` int NOT NULL AUTO_INCREMENT,
  `destination` varchar(45) NOT NULL,
  `description` varchar(255) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `price` decimal(7,2) NOT NULL,
  `img` varchar(45) NOT NULL,
  PRIMARY KEY (`holidayID`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `holidays`
--

LOCK TABLES `holidays` WRITE;
/*!40000 ALTER TABLE `holidays` DISABLE KEYS */;
INSERT INTO `holidays` VALUES (1,'Eilat','southern city of israel. very hot but cheap and fun','2023-08-09','2023-08-12',1200.00,'eilat.jpg'),(2,'Berlin','Experience history and culture in Berlin, with iconic landmarks and a vibrant food scene','2023-09-20','2023-09-22',2000.00,'berlin.jpg'),(3,'India','Discover the diverse wonders of India, from the Taj Mahal to bustling markets and rich festivals.','2023-07-01','2023-10-01',4500.00,'india.jpg'),(4,'Paris','Experience the charm of the City of Love with its iconic landmarks and exquisite cuisine.','2023-08-15','2023-08-22',2500.00,'paris.jpg'),(5,'Tokyo','Immerse yourself in the vibrant metropolis of Tokyo, where tradition and technology collide.','2023-09-10','2023-09-18',3500.00,'tokyo.jpg'),(6,'New York','Explore the bustling streets of the Big Apple and indulge in its diverse cultural offerings.','2023-07-25','2023-08-01',2800.00,'newyork.jpg'),(7,'Barcelona','Discover the vibrant city of Barcelona with its stunning architecture and lively atmosphere.','2023-10-05','2023-10-12',2200.00,'barcelona.png'),(8,'Tel Aviv','Experience the vibrant nightlife, beautiful beaches, and thriving culinary scene of Tel Aviv.','2023-06-24','2023-07-11',1800.00,'telaviv.jpg'),(9,'Jerusalem','Explore the religious and historical sites of Jerusalem, including the Old City and the Western Wall.','2023-07-05','2023-07-23',2000.00,'jerusalem.jpg'),(10,'Haifa','Discover the stunning Bahá\'í Gardens, explore the vibrant port city of Haifa, and enjoy breathtaking views of the Mediterranean.','2023-11-05','2023-11-11',1900.00,'haifa.jpg'),(11,'Dead Sea','Experience the unique sensation of floating in the buoyant waters of the Dead Sea and indulge in spa treatments.','2023-10-20','2023-10-25',2300.00,'deadsea.jpg'),(12,'Nazareth','Visit the biblical city of Nazareth and explore its religious and historical sites, including the Basilica of the Annunciation.','2023-11-15','2023-11-20',1800.00,'nazareth.jpg'),(13,'Caesarea','Step back in time and explore the ancient ruins of Caesarea, including the Roman theater and the Crusader fortress.','2023-12-10','2023-12-15',2100.00,'caesarea.jpg'),(14,'London','Explore the historical landmarks and vibrant culture of England\'s capital city.','2023-07-01','2023-07-25',2800.00,'london.jpg'),(16,'Rome','Immerse yourself in the ancient history and delicious cuisine of the Eternal City.','2023-07-01','2023-07-14',2100.00,'rome.jpg'),(17,'Amsterdam','Experience the charming canals, beautiful architecture, and vibrant art scene of Amsterdam.','2023-07-05','2023-07-18',2500.00,'amsterdam.jpg'),(18,'Dubai','Indulge in luxury and explore the futuristic cityscape of Dubai with its towering skyscrapers and desert adventures.','2023-06-30','2023-07-12',3800.00,'dubai.jpg'),(19,'Rio de Janeiro','Enjoy the vibrant culture, stunning beaches, and famous landmarks of Rio de Janeiro.','2023-07-01','2023-07-14',2900.00,'riodejaneiro.jpg'),(21,'Prague','Discover the rich history and fairy-tale charm of Prague with its stunning architecture and vibrant nightlife.','2023-07-10','2023-07-21',2300.00,'prague.jpg'),(22,'Istanbul','Experience the unique blend of East and West in Istanbul, with its rich history and vibrant markets.','2023-07-15','2023-07-28',2700.00,'istanbul.jpg');
/*!40000 ALTER TABLE `holidays` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL DEFAULT 'user',
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Tzvi','Houminer','tzvi.houminer@gmail.com','1234','admin'),(2,'John','Bryce','nockncok@gmail.com','Jb555555555','user'),(3,'Shahar','Malka','SHmal@walla.co.il','aaaa','user'),(4,'David','Davidson','david@gmail.com','1234567890','user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-17 12:47:31
