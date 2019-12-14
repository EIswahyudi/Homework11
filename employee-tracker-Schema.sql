DROP DATABASE IF EXISTS employee_tracker_DB;
CREATE database employee_tracker_DB;
USE employee_tracker_DB;

CREATE TABLE department (
	id int AUTO_INCREMENT NOT NULL, 
    name varchar(40) NOT NULL, 
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id int AUTO_INCREMENT NOT NULL, 
    title VARCHAR(30) NULL, 
    salary DECIMAL(10,4) NULL,
    department_id INT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id int AUTO_INCREMENT NOT NULL, 
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager VARCHAR(30),
	FOREIGN KEY (role_id) REFERENCES role(id),
    PRIMARY KEY (id)
   
);

INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3);

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4);

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("John", "Doe", 1, "Ashley Rodriguez");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Mike", "Chan", 2, "John Doe");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Ashley", "Rodriguez", 3, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Kevin", "Tupik", 4, "Ashley Rodriguez");

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Malia", "Brown", 5, NULL);

INSERT INTO employee (first_name, last_name, role_id, manager)
VALUES ("Sarah", "Lourd", 6, NULL);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary, e.manager
FROM employee e
JOIN role r
	ON e.role_id = r.id
JOIN department d
	ON d.id = r.department_id

SELECT e.id, e.first_name, e.last_name, r.title, d.name
FROM employee e
JOIN role r
    ON e.role_id = r.id
JOIN department d
    ON d.id = r.department_id

