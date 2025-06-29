#💻 Java Deep Skilling – Week 1
This directory contains hands-on implementations from the DigitalNurture Java FSE Deep Skilling Program.

##🔹 Design Patterns – Creational
###🧩 Singleton Pattern
📄 ImplementatingTheSingletonPattern.java

✅ Ensures one instance of a class

🛠️ Uses private constructor, static instance, and lazy initialization

🔸 Output:
Singleton instance created. Hello from Singleton! true

###🧩 Factory Method Pattern
📄 ImplementingTheFactoryMethodPattern.java

🏭 Creates objects without exposing creation logic

Interfaces & Classes:

Interface: Shape

Factory: ShapeFactory

Implementations: Circle, Rectangle

🔸 Output:
Drawing Circle...
Drawing Rectangle...

##🔹 Data Structures & Algorithms
###📦 Ecommerce Search
📄 SearchExample.java

🔍 Search products by Name (Binary Search), ID (Linear Search), or Category

Uses arrays, loops, Comparator, and Scanner input

###🌱 Financial Forecast
📄 Forecast.java

📈 Calculates future value using recursion

Based on:

Initial amount

Growth rate

Years

🔸 Example:
Future value after 5 years: ₹16105.10

#💻 Java Deep Skilling – Week 2
This week includes both PL/SQL and JUnit hands-on exercises covering control structures, stored procedures, and unit testing using the AAA pattern.

##🔸 PL/SQL Exercises
##🧮 Exercise 1: Control Structures
###🏦 Scenario 1: Senior Citizen Loan Discount
📄 SeniorCitizenLoanDiscount.sql

Loops through all customers

✅ If age > 60, applies a 1% discount to their loan interest rates

###🌟 Scenario 2: VIP Customer Promotion
📄 VipCustomerPromotion.sql

Iterates through all customers

✅ Sets IsVIP = TRUE for those with a balance over $10,000

###⏰ Scenario 3: Loan Due Reminders
📄 LoanReminder.sql

📅 Fetches loans due in the next 30 days

Prints reminder messages for each relevant customer
##🧾 Exercise 3: Stored Procedures
###💰 Scenario 1: Process Monthly Interest
📄 ProcessMonthlyInterest.sql

Procedure that updates savings account balances

📈 Applies a 1% interest rate to each current balance

###🎁 Scenario 2: Employee Bonus Scheme
📄 UpdateEmployeeBonus.sql

Updates employee salaries in a department

💵 Adds a bonus percentage (passed as a parameter)

###🔁 Scenario 3: Fund Transfer Between Accounts
📄 TransferFunds.sql

Transfers a specified amount from one account to another

🔐 Checks for sufficient balance before processing

##🧪 JUnit Testing Exercises
###🔧 Exercise 1: Setting Up JUnit
📄 JUnitSetup.md

✅ Create a new Java project in your IDE (IntelliJ IDEA, Eclipse, etc.)

📦 Add JUnit dependency to your project using Maven:

xml
Copy
Edit
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
##🧪 Mockito Hands-On Exercises
This section contains exercises that focus on unit testing using Mockito, a powerful mocking framework for Java. These tasks are designed to help you test dependencies, stub method behavior, and verify interactions in a clean and controlled environment.

###🔁 Exercise 1: Mocking and Stubbing
📌 Scenario:
You need to test a service that depends on an external API. Instead of calling the real API, use Mockito to mock the dependency and stub its methods.

✅ Steps:

Create a mock object for the external API

Stub the methods to return predefined values

Write a test case that uses the mock and validates the result using assertions

###✅ Exercise 2: Verifying Interactions
📌 Scenario:
You want to ensure that a particular method is called with specific arguments during test execution.

✅ Steps:

Create a mock object

Use it in your service logic

After execution, use Mockito.verify() to check method invocation

📌 Key Concepts
Mocking ➤ Simulate real objects without executing actual logic

Stubbing ➤ Define what to return when a method is called

Verification ➤ Ensure methods were invoked (with/without arguments)

🎯 Essential for unit testing classes with external dependencies (APIs, DBs, Services)