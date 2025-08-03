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


## 🗂 Week 3 Overview
Hands-on with **Spring Core**, **Maven**, and **Spring Data JPA**.

---

## ✅ Exercise 1: Spring Core Setup

- Create Maven project `LibraryManagement`
- Add Spring Core dependencies in `pom.xml`
- Create `applicationContext.xml` in `src/main/resources`
- Define beans: `BookService`, `BookRepository`
- Create classes:
  - `com.library.service.BookService`
  - `com.library.repository.BookRepository`
- Load Spring context in main class to test setup

---

## ✅ Exercise 2: Dependency Injection

- Wire `BookRepository` into `BookService` via XML
- Add setter in `BookService`
- Test using main class

---

## 🧪 Spring Data JPA

### Setup

- Tools: MySQL, Eclipse, Maven
- Spring Initializr: Group `com.cognizant`, Artifact `orm-learn`
- Dependencies: Spring Data JPA, DevTools, MySQL Driver
- DB: Create schema `ormlearn`

```sql
CREATE SCHEMA ormlearn;

application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/ormlearn
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=validate
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect

```
---

📦 Entity & Repository

Country.java

@Entity
@Table(name = "country")
public class Country {
    @Id @Column(name = "code") private String code;
    @Column(name = "name") private String name;
    // Getters, Setters, toString()
}

CountryRepository.java

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {}

CountryService.java

@Service
public class CountryService {
    @Autowired private CountryRepository countryRepo;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepo.findAll();
    }
}


---

🔎 Testing

@SpringBootApplication
public class OrmLearnApplication {
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(...);
        countryService = context.getBean(CountryService.class);
        testGetAllCountries();
    }

    private static void testGetAllCountries() {
        List<Country> countries = countryService.getAllCountries();
        System.out.println(countries);
    }
}


---

## 🔄 JPA vs Hibernate vs Spring Data JPA

| Feature      | JPA             | Hibernate   | Spring Data JPA |
|--------------|------------------|-------------|------------------|
| Type        | Spec (JSR 338)   | ORM Tool   | Abstraction over JPA |
| Boilerplate | ❌               | ❌         | ✅               |
| Impl        | Interface        | Full Impl  | Needs Hibernate |

---

# Week 4 – Spring REST, JWT Authentication & Advanced REST Concepts

This week focused on building robust RESTful APIs using **Spring Boot 3**, securing them with **JWT authentication**, and exploring advanced concepts like **HATEOAS**, **DTOs**, **Actuator Monitoring**, and **REST API Testing & Documentation**.

---

## 📘 Spring Boot REST Hands-On Projects

### 1️⃣ Spring REST Basics
- **Project:** `spring-rest-handson`
- **Tech Stack:** Java, Spring Boot 3, Maven, Eclipse

#### ✅ Key Highlights:
- Created a Spring Web project using **Spring Initializr**
- Explored Maven Project Structure:
  - `src/main/java`
  - `src/test/java`
  - `src/main/resources`
- Understood `@SpringBootApplication` and `main()` method execution flow

---

### 2️⃣ Spring Core – XML Configuration
- Configured `country.xml` using Spring Beans:

```xml
<bean id="country" class="com.cognizant.springlearn.Country">
  <property name="code" value="IN" />
  <property name="name" value="India" />
</bean>
```

- Developed `Country` class with:
  - Logging in constructor
  - Getters and setters
  - Debug logging inside `toString()`
- Loaded bean using `ApplicationContext` and `ClassPathXmlApplicationContext`

---

### 3️⃣ Hello World REST API
- Created a simple **GET** endpoint:
  - **URL:** `/hello`
  - **Response:** `"Hello World!!"`
  - **Controller:** `HelloController.java`
- Tested using **Postman** and browser
- Analyzed HTTP headers via **DevTools** and **Postman**

---

### 4️⃣ REST - Country Web Service
- Created `/country` endpoint to return India details
- Loaded country data from **Spring XML** and returned as **JSON**

---

### 5️⃣ REST - Country Lookup by Code
- Endpoint: `/countries/{code}` (Case-Insensitive)
- Loaded list of countries from XML and performed lookup by code
- Returned matching `Country` object as JSON

---

## 🔐 JWT Authentication – Secure REST APIs

- **Project:** `jwt-handson`
- Built a **Spring Boot JWT Authentication Service**

#### ✅ Key Implementations:
- Created **Authentication Controller**
- Enabled **Basic Auth** using `SecurityConfig`
- Handled `Authorization` header manually to extract credentials
- Generated JWT tokens for valid users

#### Sample cURL Test:
```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

#### Sample Response:
```json
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzUyMzQyMzMyLCJleHAiOjE3NTIzNDU5MzJ9.oIHQ-dj63zYKRtHhqHTfEfO0-m5fP6Y-OgB5kfcgWew"}
```

---

## 🧠 Deep Dive – REST Concepts & Best Practices

### ✅ Spring REST & Boot 3
- Understood REST principles and **Spring Boot 3** highlights
- Project setup, devtools usage, and dependency hierarchy exploration

### ✅ REST Controller Design
- Handled **GET**, **POST**, **PUT**, **DELETE** HTTP methods
- Returned JSON responses using Spring Web

### ✅ Request & Response Handling
- Implemented:
  - Path Variables
  - Query Parameters
  - Custom Headers & Status Codes
- Applied exception handling in controllers

### ✅ RESTful DTOs & Representation
- Used **DTOs** for clean and structured API responses
- Explored JSON serialization and versioning strategies

### ✅ CRUD Operations with REST
- Developed **Create**, **Read**, **Update**, **Delete** endpoints
- Applied validation annotations
- Used **Optimistic Locking** where needed

### ✅ Content Negotiation
- Supported **JSON** & **XML** responses using `Accept` header
- Configured media types and custom format support

### ✅ Spring Security & JWT
- Secured endpoints with **JWT Authentication**
- Configured **CORS**, Authentication, and Authorization rules

---

## 📅 Summary

Week 4 focused on mastering the fundamentals of building secure, scalable, and testable **REST APIs** using **Spring Boot 3**.  
From creating simple controllers to implementing JWT-based security and exploring advanced REST features, this week marked a significant step towards **Enterprise-Grade Backend Development**.

---

## ✅ Successfully Completed:
- Spring REST API Development
- JWT-Based Security Implementation
- Advanced REST Features with Spring Boot 3

---

# Week5 - Microservices

## Creating Microservices for Account and Loan

In this hands-on exercise, we will create two microservices for a bank:
- One microservice for handling **accounts**
- One for handling **loans**

Each microservice will be a specific independent **Spring RESTful Web Service** Maven project, having its own `pom.xml`.

Instead of combining both account and loan functionalities into a single application, we will split them into **two separate applications**. These web services will be simple and **will not connect to any backend or database**.

---

## 🛠️ Steps to Implement the Two Microservices

---

### 📁 Account Microservice

1. Create a folder with your **employee ID** in the `D:` drive.
2. Inside that folder, create another folder named **`microservices`**.
   - This will contain all your sample projects for microservices learning.
3. Open [https://start.spring.io/](https://start.spring.io/) in your browser.
4. Fill in the form as follows:
   - **Group**: `com.cognizant`
   - **Artifact**: `account`
5. Select the following modules:
   - `Spring Boot DevTools` under Developer Tools
   - `Spring Web` under Web
6. Click **Generate** and download the zip file.
7. Extract the `account` folder from the zip and move it to the `microservices` folder.
8. Open Command Prompt in the `account` folder and run:
   ```bash
   mvn clean package


# 📘 Week 6 – Introduction to React & SPA

This week focused on understanding **Single Page Applications (SPA)** and how **React** plays a major role in building modern web interfaces. We explored setting up a React development environment, creating components, applying styling, and understanding lifecycle methods.

## 🎯 Objectives Covered
- Define SPA and compare with MPA
- Understand React, its working, and features
- Learn about Virtual DOM
- Understand React Components – Class and Functional
- Learn about Component Lifecycle and Styling techniques

## 🧪 Hands-On Labs

### 🔹 Hands-On 1: My First React App
- Created a new React app `myfirstreact` using `create-react-app`.
- Displayed the message:
  > Welcome to the first session of React
- Verified app by running on: `http://localhost:3000`

### 🔹 Hands-On 2: Student Management Portal (Class Components)
- App: `StudentApp`
- Created 3 class components: `Home`, `About`, `Contact`
- Rendered all components from `App.js`

### 🔹 Hands-On 3: Score Calculator App (Functional Component with Styling)
- App: `scorecalculatorapp`
- Component: `CalculateScore`
  - Accepts `name`, `school`, `total`, `goal`
  - Calculates and displays average score
- Used external CSS (`mystyle.css`) for styling

### 🔹 Hands-On 4: Blog App (Component Lifecycle)
- App: `blogapp`
- Implemented:
  - `componentDidMount()` for fetching posts from API
  - `componentDidCatch()` for error handling
- Displayed fetched posts (titles and descriptions) in UI

### 🔹 Hands-On 5: Cohort Dashboard Styling
- Used a pre-built app
- Created a CSS Module: `CohortDetails.module.css`
- Applied:
  - CSS classes
  - Inline styles (e.g., color based on status)
  - Conditional rendering (ongoing, completed)

## ✅ Summary
Week 6 provided a strong foundation in:
- React basics
- SPA vs MPA
- Component creation and styling
- Lifecycle methods and API calls

Projects like **StudentApp**, **BlogApp**, and **ScoreCalculator** effectively combined theory and practical experience.

---

# 📘 Week 7 – Modern JavaScript (ES6) & React Concepts

This week focused on exploring modern **JavaScript (ES6)** features and their integration with **React**. We used `let`, `const`, arrow functions, destructuring, ES6 classes, `Map` and `Set`, and applied them within JSX, styling, event handling, and conditional rendering in React.

## 🎯 Objectives Covered
- Learn ES6 features: `let`, `const`, arrow functions, destructuring, classes, inheritance, `map()`, `set()`
- Understand and implement JSX
- Style components with inline CSS
- Apply conditional rendering and list rendering
- Handle events using Synthetic Events
- Use state and props to manage user interaction
- Build apps using multiple components and event handlers

## 🧪 Hands-On Labs

### 🔹 Hands-On 1: Cricket App (ES6 in React)
- App: `cricketapp`
- Components:
  - `ListofPlayers`: Used `map()` and arrow functions to filter players
  - `IndianPlayers`: Used destructuring and spread operator
- Toggled components using conditional rendering

### 🔹 Hands-On 2: Office Space Rental App (JSX & Styling)
- App: `officespacerentalapp`
- Used JSX to:
  - Create headings
  - Display office images and details
- Styled rent conditionally (₹60,000 threshold) using inline styles

### 🔹 Hands-On 3: Event Handling App
- App: `eventexamplesapp`
- Features:
  - Counter with `Increment` / `Decrement` buttons
  - `Say Welcome` button with parameter
  - Button click event using synthetic event
- `CurrencyConvertor`:
  - Converted INR to Euro
  - Handled input and submit events

### 🔹 Hands-On 4: Ticket Booking App (Conditional Rendering)
- App: `ticketbookingapp`
- Conditional views for:
  - Guest users: View flights
  - Logged-in users: Book tickets
- Login/Logout toggle to switch views

### 🔹 Hands-On 5: Blogger App (Advanced Conditional Rendering)
- App: `bloggerapp`
- Components: `BookDetails`, `BlogDetails`, `CourseDetails`
- Used:
  - if-else
  - ternary operator
  - logical `&&` for conditional rendering

## ✅ Summary
Week 7 focused on strengthening ES6 + React integration:
- **ES6**: Arrow functions, `let`/`const`, destructuring, spread, `map`/`set`, classes
- **React JSX**: Syntax, dynamic rendering, inline styling
- **Event Handling**: Forms, synthetic events, passing parameters
- **Conditional Rendering**: Toggling views based on logic
- **Practical Implementation**: Through apps like **cricketapp**, **eventexamplesapp**, and **ticketbookingapp**

---