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

create or replace procedure discount_to_loan_interest_rates is
begin
    
    for res in ( 
        select c.CustomerID, c.Name, c.DOB, l.InterestRate, l.LoanID
        from Customers c
        join Loans l on c.CustomerID = l.CustomerID
    ) loop
        if months_between(SYSDATE , res.DOB)/12 >=60 then
            update Loans
            set InterestRate = InterestRate-1
            where LoanID = res.LoanID;
            
            DBMS_OUTPUT.PUT_LINE('Discount applied to Customer ID ' || res.CustomerID || ' (' || res.Name || ') - Loan ID: ' || res.LoanID);
        end if;
        
    end loop;
end;
/

BEGIN
  EXECUTE IMMEDIATE '
    ALTER TABLE Customers ADD IsVIP CHAR(1) DEFAULT ''N''
  ';
EXCEPTION
  WHEN OTHERS THEN
    IF SQLCODE = -01430 THEN
      NULL;
    ELSE
      RAISE;
    END IF;
END;
/


create or replace procedure promoted_to_VIP_status is
begin
    
    update Customers
    set IsVIP = 'Y'
    where Balance >10000;
    
    DBMS_OUTPUT.PUT_LINE('-------------------------------------------------------------');
    DBMS_OUTPUT.PUT_LINE('CustomerID | Name        | DOB        | Balance | IsVIP');
    DBMS_OUTPUT.PUT_LINE('-------------------------------------------------------------');
    
    FOR res IN (
        SELECT CustomerID, Name, DOB, Balance, IsVIP
        FROM Customers
    ) LOOP
        DBMS_OUTPUT.PUT_LINE(RPAD(res.CustomerID, 11) || ' | ' ||
                            RPAD(res.Name, 11) || ' | ' ||
                            TO_CHAR(res.DOB, 'YYYY-MM-DD') || ' | ' ||
                            RPAD(res.Balance, 7) || ' | ' ||
                            res.IsVIP);
    end loop;
    
end;
/

create or replace procedure send_reminders_to_customers is
begin
    
    for res in (
        SELECT c.CustomerID, c.Name, l.EndDate
        from Customers c
        join Loans l on l.CustomerID = c.CustomerID
    ) loop
        IF res.EndDate BETWEEN SYSDATE AND SYSDATE + 30 THEN
            DBMS_OUTPUT.PUT_LINE(
                'Reminder: CustomerID ' || res.CustomerID || 
                ', Name: ' || res.Name || 
                ', your loan is due on ' || TO_CHAR(res.EndDate, 'YYYY-MM-DD')
            );
        END IF;
        
    end loop;
end;
/


-- exec send_reminders_to_customers;

-- exec promoted_to_VIP_status;
-- exec discount_to_loan_interest_rates;
