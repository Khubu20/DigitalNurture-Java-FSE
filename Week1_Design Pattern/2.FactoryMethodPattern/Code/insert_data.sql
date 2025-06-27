-- Insert sample data into Customers
INSERT INTO Customers VALUES (1, 'Amit', 65, 12000, 7.5, 'FALSE');
INSERT INTO Customers VALUES (2, 'Neha', 45, 8000, 8.0, 'FALSE');
INSERT INTO Customers VALUES (3, 'Ravi', 70, 15000, 6.5, 'FALSE');

-- Insert into Loans
INSERT INTO Loans VALUES (101, 1, SYSDATE + 15);
INSERT INTO Loans VALUES (102, 2, SYSDATE + 35);
INSERT INTO Loans VALUES (103, 3, SYSDATE + 10);

COMMIT;
