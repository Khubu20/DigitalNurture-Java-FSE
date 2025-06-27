BEGIN
  FOR cust IN (SELECT CustomerID FROM Customers WHERE Age > 60) LOOP
    UPDATE Customers
    SET InterestRate = InterestRate - (InterestRate * 0.01)
    WHERE CustomerID = cust.CustomerID;
  END LOOP;
  COMMIT;
END;
