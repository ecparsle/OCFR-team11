USE ocfr_v1;
CREATE TABLE People (
 userID int AUTO_INCREMENT,
 firstName varchar(255),
 lastName varchar(255),
 address varchar(255),
 email varchar(255),
 password varchar (255),
 phoneNumber INT,
 dob DATE,
 gender varchar(255),
 startDate DATE,
 departmentPosition varchar(255),
 radioNumber int,
 stationNumber int,
 isActive bool,
 PRIMARY KEY (userID)
 );

 INSERT INTO People (firstName, lastName, address, email, password, phoneNumber, dob, gender, startDate, departmentPosition, radioNumber, stationNumber, isActive)
 VALUES ('Kathryn', 'Pryde', '1123 Xavier School Drive
 Watkinsville, GA 30677', 'kathryn@gmail.com', 'password1', '812-555-221', '04/02/2000', 'Female', '05/09/2018', 'Chief', 'A-1', '5', 'True');

CREATE TABLE Certification (
 certificationID int AUTO_INCREMENT,
 agency varchar(255),
 name varchar(255),
 city varchar(255),
 expirationPeriod varchar(255),
 PRIMARY KEY (certificationID)
 );

 INSERT INTO Certification (agency, name, city, expirationPeriod)
 VALUES ('American Heart Association', 'Paramedic', 'Bloomington', 'July 2021');

CREATE TABLE certifiedPeople (
 certifiedPeopleID int AUTO_INCREMENT,
 userID int,
 certificationID int,
 certificationName varchar(255),
 firstName varchar (255),
 lastName varchar (255),
 PRIMARY KEY (certifiedPeopleID),
 FOREIGN KEY (userID) REFERENCES People(userID),
 FOREIGN KEY (certificationID) REFERENCES Certification(certificationID)
 );

 INSERT INTO certifiedPeople ( certificationName, firstName, lastName)
 VALUES ('CPR', 'Joel', 'Embiid');
