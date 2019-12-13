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

connection.connect(function(err) {
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
      ]
    })
    .then(function (res) {
        const user = res; 
        answer.push(user);
        
        promptUser()
    })
}