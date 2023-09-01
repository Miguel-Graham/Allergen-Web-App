CREATE TABLE Dish (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255),
  price DECIMAL(10, 2)
);

CREATE TABLE Allergy (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);

CREATE TABLE DishAllergy (
  id INT NOT NULL AUTO_INCREMENT,
  dish_id INT,
  allergy_id INT,
  description TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (dish_id) REFERENCES Dish(id),
  FOREIGN KEY (allergy_id) REFERENCES Allergy(id)
);
