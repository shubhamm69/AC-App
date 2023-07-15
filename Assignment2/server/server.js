const express = require('express');
const fs = require('fs');
const app = express();
const port = 6900;

app.use(express.json());

// Read all employees
app.get('/api/employees', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        const employees = JSON.parse(data).employee;
        res.json(employees);
    });
});

// Read a specific employee
app.get('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        const employees = JSON.parse(data).employee;
        const employee = employees.find(emp => emp.id === employeeId);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ error: 'Employee not found' });
        }
    });
});

// Create a new employee
app.post('/api/employees', (req, res) => {
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        const employees = JSON.parse(data).employee;
        const newEmployee = {
            id: employees.length + 1,
            employee_name: req.body.employee_name,
            employee_salary: req.body.employee_salary,
            employee_age: req.body.employee_age
        };
        employees.push(newEmployee);
        fs.writeFile('db.json', JSON.stringify({ employee: employees }), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to write data' });
            }
            res.status(201).json(newEmployee);
        });
    });
});

// Update an existing employee
app.put('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        let employees = JSON.parse(data).employee;
        const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        employees[employeeIndex].employee_name = req.body.employee_name;
        employees[employeeIndex].employee_salary = req.body.employee_salary;
        employees[employeeIndex].employee_age = req.body.employee_age;
        fs.writeFile('db.json', JSON.stringify({ employee: employees }), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to write data' });
            }
            res.json(employees[employeeIndex]);
        });
    });
});

// Delete an employee
app.delete('/api/employees/:id', (req, res) => {
    const employeeId = parseInt(req.params.id);
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Failed to read data' });
        }
        let employees = JSON.parse(data).employee;
        const employeeIndex = employees.findIndex(emp => emp.id === employeeId);
        if (employeeIndex === -1) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        const deletedEmployee = employees.splice(employeeIndex, 1)[0];
        fs.writeFile('db.json', JSON.stringify({ employee: employees }), 'utf8', (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Failed to write data' });
            }
            res.json(deletedEmployee);
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
