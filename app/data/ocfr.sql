USE ocfr_v1;
CREATE TABLE People (
 userID int AUTO_INCREMENT,
 firstName varchar(255) NOT NULL,
 lastName varchar(255) NOT NULL,
 address varchar(255) NOT NULL,
 email varchar(255) NOT NULL,
 password varchar (255) NOT NULL,
 phoneNumber INT NOT NULL,
 dob DATE NOT NULL,
 gender varchar(255) NOT NULL,
 startDate DATE NOT NULL,
 departmentPosition varchar(255) NOT NULL,
 radioNumber int NOT NULL,
 stationNumber int NOT NULL,
 isActive bool NOT NULL,
 PRIMARY KEY (userID)
 );

 INSERT INTO People (firstName, lastName, address, email, password, phoneNumber, dob, gender, startDate, departmentPosition, radioNumber, stationNumber, isActive)
 VALUES ('Kathryn', 'Pryde', '1123 Xavier School Drive
 Watkinsville, GA 30677', 'kathryn@gmail.com', 'password1', '812-555-221', '04/02/2000', 'Female', '05/09/2018', 'Chief', 'A-1', '5', 'True');

CREATE TABLE Certification (
 certificationID int AUTO_INCREMENT,
 agency varchar(255) NOT NULL,
 name varchar(255) NOT NULL,
 city varchar(255) NOT NULL,
 expirationPeriod varchar(255) NOT NULL,
 PRIMARY KEY (certificationID)
 );

 INSERT INTO Certification (agency, name, city, expirationPeriod)
 VALUES ('American Heart Association', 'Paramedic', 'Bloomington', 'July 2021');

CREATE TABLE certifiedPeople (
 certifiedPeopleID int AUTO_INCREMENT,
 userID int NOT NULL,
 certificationID int NOT NULL,
 certificationName varchar(255) NOT NULL,
 firstName varchar (255) NOT NULL,
 lastName varchar (255) NOT NULL,
 PRIMARY KEY (certifiedPeopleID),
 FOREIGN KEY (userID) REFERENCES People(userID),
 FOREIGN KEY (certificationID) REFERENCES Certification(certificationID)
 );

INSERT INTO certifiedPeople ( userID, certificationID, certificationName, firstName, lastName)
VALUES (1, 1, 'CPR', 'Joel', 'Embiid');
