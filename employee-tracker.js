var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Bootcamps09!",
    database: "employee_tracker_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    promptUser();
});

function promptUser() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "exit",
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "View All Employees":
                    viewemployees();
                    break;

                case "View All Employees By Department":
                    viewemployeesdept();
                    break;

                case "View All Employees By Manager":
                    viewemployeesmgr();
                    break;

                case "Add Employee":
                    addemployee();
                    break;

                case "Remove Employee":
                    removeemployee();
                    break;

                case "Update Employee Role":
                    updateemployeerole();
                    break;

                case "Update Employee Manager":
                    updateemployeemanager();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
}

function viewemployees() {
    var query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name, r.salary, e.manager
FROM employee e
JOIN role r
	ON e.role_id = r.id
JOIN department d
	ON d.id = r.department_id`

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        promptUser();
    });
}

function viewemployeesdept() {
    var query = `SELECT e.id, e.first_name, e.last_name, d.name
FROM employee e
JOIN role r
    ON e.role_id = r.id
JOIN department d
    ON d.id = r.department_id`

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        promptUser();
    });
}

function viewemployeesmgr() {
    var query = `SELECT e.id, e.first_name, e.last_name, e.manager
FROM employee e
JOIN role r
    ON e.role_id = r.id
JOIN department d
    ON d.id = r.department_id`

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);

        promptUser();
    });
}

function addemployee() {
    inquirer
        .prompt([{
            name: "first_name",
            type: "input",
            message: "Enter New Employee's First Name:"
        }, {
            name: "last_name",
            type: "input",
            message: "Enter New Employee's Last Name:"
        }, {
            name: "role_id",
            type: "input",
            message: "Enter New Employee's Role ID:"
        },
        {
            name: "manager_id",
            type: "input",
            message: "Enter New Employee's Manager ID:"
        }]
        )
        .then(function (answer) {
            connection.query("INSERT INTO employee SET ?", {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id
            }, function (err, res) {
                viewAllEmployees();
                runSearch();
            });
        });
}

function removeemployee() {
    inquirer
        .prompt({
            type: "list",
            message: "Which employee do you want to remove?",
            choices: [
                "John Doe",
                "Mike Chan",
                "Ashley Rodriguez",
                "Kevin Tupik",
                "Malia Brown",
                "Sarah Lourd",
                "exit",
            ]
        }).then(function (answer) {

        });
        removeemployee()
}