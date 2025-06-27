SET SERVEROUTPUT ON;
BEGIN
    FOR l IN (
        SELECT LoanID, CustomerID, EndDate
        FROM Loans
        WHERE EndDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP
        DECLARE
            cust_name VARCHAR2(100);
        BEGIN
            SELECT Name INTO cust_name
            FROM Customers
            WHERE CustomerID = l.CustomerID;

            DBMS_OUTPUT.PUT_LINE('Reminder: Dear ' || cust_name || ', your loan ID ' || l.LoanID || ' is due on ' || TO_CHAR(l.EndDate, 'DD-MON-YYYY'));
        END;
    END LOOP;
END;
/
