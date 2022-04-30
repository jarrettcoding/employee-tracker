const db = require("../db/connection");

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
};

module.exports = { getAllDepartments };
