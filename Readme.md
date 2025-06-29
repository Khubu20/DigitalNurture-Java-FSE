# Java Deep Skilling – Week 1

This directory contains hands-on implementations from the DigitalNurture Java FSE Deep Skilling Program.

## 🔹 Design Patterns – Creational

### 🧩 Singleton Pattern
📄 `ImplementatingTheSingletonPattern.java`  
- Ensures one instance of a class  
- Uses private constructor, static instance & lazy initialization

**Output:**  
`Singleton instance created. Hello from Singleton! true`

---

### 🧩 Factory Method Pattern
📄 `ImplementingTheFactoryMethodPattern.java`  
- Creates objects without exposing logic  
- Interface: `Shape`, Factory: `ShapeFactory`, Classes: `Circle`, `Rectangle`

**Output:**  
`Drawing Circle...`  
`Drawing Rectangle...`

---

## 🔹 Data Structures & Algorithms

### 📦 Ecommerce Search  
📄 `SearchExample.java`  
- Search products by Name (Binary), ID (Linear), or Category  
- Uses array, loops, `Comparator`, and Scanner input

---

### 🌱 Financial Forecast  
📄 `Forecast.java`  
- Calculates future value using recursion  
- Based on initial amount, growth rate, and years

**Example:**  
`Future value after 5 years: ₹16105.10`

---

# Java Deep Skilling – Week 2

This week includes both **PL/SQL** and **JUnit** hands-on exercises covering control structures, stored procedures, and unit testing using the AAA pattern.

---

## 🔸 PL/SQL Exercises

### 🧮 Exercise 1: Control Structures

#### 🏦 Scenario 1: Senior Citizen Loan Discount  
📄 `SeniorCitizenLoanDiscount.sql`  
- Loops through all customers  
- If age > 60, applies a 1% discount to their loan interest rates

#### 🌟 Scenario 2: VIP Customer Promotion  
📄 `VipCustomerPromotion.sql`  
- Iterates through all customers  
- Sets `IsVIP = TRUE` for those with a balance over $10,000

#### ⏰ Scenario 3: Loan Due Reminders  
📄 `LoanReminder.sql`  
- Fetches loans due in the next 30 days  
- Prints reminder messages for each relevant customer

---

### 🧾 Exercise 3: Stored Procedures

#### 💰 Scenario 1: Process Monthly Interest  
📄 `ProcessMonthlyInterest.sql`  
- Stored procedure that updates savings account balances  
- Applies a 1% interest rate to each current balance

#### 🎁 Scenario 2: Employee Bonus Scheme  
📄 `UpdateEmployeeBonus.sql`  
- Procedure that updates employee salaries in a department  
- Adds a bonus percentage (passed as a parameter)

#### 🔁 Scenario 3: Fund Transfer Between Accounts  
📄 `TransferFunds.sql`  
- Transfers a specified amount from one account to another  
- Checks for sufficient balance before processing

---

## 🧪 JUnit Testing Exercises

### 🔧 Exercise 1: Setting Up JUnit

📄 `JUnitSetup.md`  
- Create a new Java project in your IDE (IntelliJ IDEA, Eclipse, etc.)  
- Add JUnit dependency to your project using Maven.


## 🧪 Mockito Hands-On Exercises

This section contains exercises that focus on **unit testing using Mockito**, a powerful mocking framework for Java. These tasks are designed to help you test dependencies, stub method behavior, and verify interactions in a clean and controlled environment.

---

### 🔁 Exercise 1: Mocking and Stubbing

**Scenario:**  
You need to test a service that depends on an external API. Instead of calling the real API, you use Mockito to mock the dependency and stub its methods.

**Steps:**  
1. Create a mock object for the external API.  
2. Stub the methods to return predefined values.  
3. Write a test case that uses the mock object and validates the result using assertions.

---

### ✅ Exercise 2: Verifying Interactions

**Scenario:**  
You want to ensure that a particular method is called with specific arguments during the test execution.

**Steps:**  
1. Create a mock object.  
2. Use it in your service logic.  
3. After execution, use Mockito's `verify()` to check whether a method was called.

---

###git add .
📌 Key Concepts

- **Mocking** allows you to simulate real objects without executing actual logic.
- **Stubbing** sets up expectations: "if this method is called, return this value".
- **Verification** ensures specific methods were invoked (with or without arguments).
- Useful when writing **unit tests** for classes with dependencies such as APIs, databases, or services.

---

