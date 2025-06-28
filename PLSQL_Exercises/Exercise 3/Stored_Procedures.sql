CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Transactions (
    TransactionID NUMBER PRIMARY KEY,
    AccountID NUMBER,
    TransactionDate DATE,
    Amount NUMBER,
    TransactionType VARCHAR2(10),
    FOREIGN KEY (AccountID) REFERENCES Accounts(AccountID)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
); 

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (1, 'John Doe', TO_DATE('1985-05-15', 'YYYY-MM-DD'), 1000, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (2, 'Jane Smith', TO_DATE('1990-07-20', 'YYYY-MM-DD'), 1500, SYSDATE);

INSERT INTO Customers (CustomerID, Name, DOB, Balance, LastModified)
VALUES (3, 'Kanhaiya', TO_DATE('1950-07-20', 'YYYY-MM-DD'), 20000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (1, 1, 'Savings', 1000, SYSDATE);

INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, LastModified)
VALUES (2, 2, 'Checking', 1500, SYSDATE);

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (1, 1, SYSDATE, 200, 'Deposit');

INSERT INTO Transactions (TransactionID, AccountID, TransactionDate, Amount, TransactionType)
VALUES (2, 2, SYSDATE, 300, 'Withdrawal');

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (1, 1, 5000, 5, SYSDATE, ADD_MONTHS(SYSDATE, 60));

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (2, 3, 5000, 7, SYSDATE, ADD_MONTHS(SYSDATE, 80));

INSERT INTO Loans (LoanID, CustomerID, LoanAmount, InterestRate, StartDate, EndDate)
VALUES (3, 2, 5000, 7, SYSDATE, SYSDATE + 20);

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (1, 'Alice Johnson', 'Manager', 70000, 'HR', TO_DATE('2015-06-15', 'YYYY-MM-DD'));

INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
VALUES (2, 'Bob Brown', 'Developer', 60000, 'IT', TO_DATE('2017-03-20', 'YYYY-MM-DD'));

set serveroutput on;

CREATE or replace procedure ProcessMonthlyInterest is
begin
    update Accounts
    set Balance = Balance + 0.01*Balance
    where AccountType = 'Savings';
    
    for res in (
        select c.CustomerID, c.Name, a.Balance, a.AccountType
        from Accounts a 
        JOIN Customers c ON a.CustomerID = c.CustomerID

    )loop
        DBMS_OUTPUT.PUT_LINE(
          'CustomerID: ' || res.CustomerID ||
          ', Name: ' || res.Name ||
          ', Account Type: ' || res.AccountType ||
          ', Updated Balance: ' || res.Balance
        );
    end loop;
end;
/

CREATE or replace procedure UpdateEmployeeBonus (
    bonus in NUMBER,
    department_name IN VARCHAR2
) is
begin
    update Employees
    set Salary = Salary + (bonus/100)*Salary
    WHERE Department = department_name;
    
    FOR res IN (
        SELECT Name, Salary, Department
        FROM Employees
        WHERE Department = department_name
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(
          'Name: ' || res.Name || 
          ', Salary: ' || res.Salary || 
          ', Department: ' || res.Department
        );
    end loop;
end;
/

CREATE or replace procedure TransferFunds (
    account_from IN NUMBER,
    account_to IN NUMBER,
    amount IN NUMBER
) is
    balance_amount NUMBER;
    insufficient_funds EXCEPTION;
begin
    SELECT Balance INTO balance_amount
    FROM Accounts
    WHERE AccountID = account_from;
    
    IF balance_amount < amount THEN
        RAISE insufficient_funds;
    END IF;
    
    update Accounts
    set balance = balance - amount,
        LastModified= SYSDATE
    where AccountID = account_from;
    
    update Accounts
    set balance = balance + amount,
        LastModified= SYSDATE
    where AccountID = account_to;
    
    DBMS_OUTPUT.PUT_LINE('Transfer of ' || amount || ' successful from Account ' || account_from || ' to Account ' || account_to );

EXCEPTION
    WHEN insufficient_funds THEN
        DBMS_OUTPUT.PUT_LINE('Error: Insufficient funds in Account ' || account_from);
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
end;
/

--EXEC TransferFunds(1, 2, 500);

exec UpdateEmployeeBonus(10, 'IT');
--exec ProcessMonthlyInterest;