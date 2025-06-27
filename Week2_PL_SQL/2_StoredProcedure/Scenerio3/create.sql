SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE TransferFunds (
    source_account_id IN NUMBER,
    destination_account_id IN NUMBER,
    amount IN NUMBER
) IS
    insufficient_balance EXCEPTION;
    source_balance NUMBER;
BEGIN
    -- Get the current balance of the source account
    SELECT balance INTO source_balance
    FROM accounts
    WHERE accountid = source_account_id;

    -- Check if there's enough balance
    IF source_balance < amount THEN
        RAISE insufficient_balance;
    END IF;

    -- Deduct from source
    UPDATE accounts
    SET balance = balance - amount
    WHERE accountid = source_account_id;

    -- Add to destination
    UPDATE accounts
    SET balance = balance + amount
    WHERE accountid = destination_account_id;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Transfer successful.');
    
EXCEPTION
    WHEN insufficient_balance THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
    WHEN NO_DATA_FOUND THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: One or both accounts not found.');
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
END;
/
BEGIN
    TransferFunds(2, 1, 150);
END;
/
