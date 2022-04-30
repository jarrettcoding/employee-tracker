INSERT INTO department
    (name)
VALUES 
    ('Engineering'), 
    ('DevOps'), 
    ('Accounting'), 
    ('SciFi Cosplay'); 

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Tier 1 Engineer', '60000.00', 1),
    ('Tier 2 Engineer', '80000.00', 1), 
    ('Tier 3 Engineer', '100000.00', 1),
    ('System Admin', '70000.00', 2), 
    ('Developer', '75000.00', 2),    
    ('Accountant', '50000.00', 3),
    ('Controller', '150000.00', 3), 
    ('Accounting Coordinator', '35000.00', 3),
    ('Skeletor', '1000000.00', 4),
    ('Darth Vader', '2000000.00', 4),
    ('Gandalf', '10.00', 4); 

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('Marcus', 'Banjo', 5, 4),          
    ('Kyle', 'White', 6, 4),          
    ('Cindy', 'Lauper', 11, 4),          
    ('Anakin', 'Skywalker', 10, ''),          
    ('Bubba', 'Gump', 3, 4),          
    ('Tommy', 'Oompa', 7, 4),          
    ('Joe', 'Blow', 6, 6),          
    ('Hailey', 'Scott', 4, 1),          
    ('Everett', 'Guitar', 1, 5),          
    ('Piano', 'Man', 8, 6);          
          