const db = require("./db/connection");
const inquirer = require("inquirer");
const consoleTable = require("console.table");

const questions = [
  {
    type: "list",
    name: "questionList",
    message: "What would you like to do?",
    choices: [
      "See All Departments",
      "See All Roles",
      "See All Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Role",
    ],
  },
];

const getAllDepartments = () => {
  const sql = `SELECT * FROM DEPARTMENTS`;

  db.query(sql, (err, rows) => {
    console.table(rows);
  });
  init();
};

const getAllRoles = () => {
  const sql = `SELECT role.*, department.name
                  AS department
                  FROM role
                  LEFT JOIN department
                  ON role.department_id = department.id`;

  db.query(sql, (err, rows) => {
    console.table(rows);
  });
  init();
};

const getAllEmployees = () => {
  const sql = `SELECT employee.*, role.name
                      AS role
                      FROM employee
                      LEFT JOIN role
                      ON employee.role_id = role.id`;

  db.query(sql, (err, rows) => {
    console.table(rows);
  });
  init();
};

const init = function () {
  return inquirer.prompt(questions).then((inquirerChoice) => {
    if (inquirerChoice === "See All Departments") {
      getAllDepartments();
    } else if (inquirerChoice === "See All Roles") {
      getAllRoles();
    } else if (inquirerChoice === "See All Employees") {
      getAllEmployees();
    }
  });
};

init();
