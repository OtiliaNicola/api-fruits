USE tropical_fruits;

CREATE TABLE fruits (
	idFruit INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image TEXT,
    description TEXT
);

CREATE TABLE countries(
	idCountry INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE fruit_country(
	fruit_id INT,
    country_id INT,
    primary key (fruit_id, country_id),
    FOREIGN KEY(fruit_id) REFERENCES fruits(idFruit),
    FOREIGN KEY(country_id) REFERENCES countries(idCountry)
);
