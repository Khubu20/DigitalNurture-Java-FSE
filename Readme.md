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

## 📦 Entity & Repository

### Country.java
```java
@Entity
@Table(name = "country")
public class Country {
    @Id @Column(name = "code") private String code;
    @Column(name = "name") private String name;
    // Getters, Setters, toString()
}
```

### CountryRepository.java
```java
@Repository
public interface CountryRepository extends JpaRepository<Country, String> {}
```

### CountryService.java
```java
@Service
public class CountryService {
    @Autowired private CountryRepository countryRepo;

    @Transactional
    public List<Country> getAllCountries() {
        return countryRepo.findAll();
    }
}
```

---

## 🔎 Testing

```java
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
```

---

## 🔄 JPA vs Hibernate vs Spring Data JPA

| Feature | JPA | Hibernate | Spring Data JPA |
|--------|-----|-----------|------------------|
| Type | Spec (JSR 338) | ORM Tool | Abstraction over JPA |
| Boilerplate | ❌ | ❌ | ✅ |
| Impl | Interface | Full Impl | Needs Hibernate |

---

# ✅ Week 4 – Spring REST, JWT Authentication & Advanced REST Concepts

This week focused on building robust RESTful APIs using Spring Boot, securing them with JWT authentication, and diving into best practices like HATEOAS, DTOs, Actuator monitoring, and REST API testing and documentation.

---

## 📘 Spring Boot REST Hands-On Projects

### 1️⃣ Spring REST Basics
- ✔️ Project: spring-rest-handson  
- ✔️ Tech Stack: Java, Spring Boot 3, Maven, Eclipse

✅ Created a Spring Web project using Spring Initializr  
✅ Explored Maven structure: src/main/java, src/test/java, and resources  
✅ Explored @SpringBootApplication and main() method execution flow

---

### 2️⃣ Spring Core – XML Configuration

Configured country.xml using Spring beans:
```xml
<bean id="country" class="com.cognizant.springlearn.Country">
  <property name="code" value="IN" />
  <property name="name" value="India" />
</bean>
```

Developed Country class with:
- Logging in constructor, getters, setters  
- Debug logging inside toString()  
- Used ApplicationContext and ClassPathXmlApplicationContext to load bean

---

### 3️⃣ Hello World REST API

✅ Created a simple GET endpoint:  
- URL: `/hello`  
- Response: `"Hello World!!"`  
- Controller: `HelloController.java`  

✔️ Tested using Postman and browser  
✅ Analyzed HTTP headers via DevTools and Postman

---

### 4️⃣ REST - Country Web Service

✅ Created endpoint `/country` to return India details  
✅ Loaded country from Spring XML and returned as JSON

---

### 5️⃣ REST - Country Lookup by Code

✅ Endpoint: `/countries/{code}` (case-insensitive)  
✅ Loaded list of countries from XML and searched by code  
✅ Returned matching Country object as JSON

---

## 🔐 JWT Authentication – Secure REST APIs

- ✔️ Project: jwt-handson  
- ✔️ Built a Spring Boot-based JWT Authentication Service

✅ Created Authentication Controller  
✅ Enabled Basic Auth using SecurityConfig  
✅ Handled Authorization header manually to extract credentials  
✅ Generated JWT tokens for valid users  

**Sample cURL Test:**
```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

**Sample Response:**
```json
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNzUyMzQyMzMyLCJleHAiOjE3NTIzNDU5MzJ9.oIHQ-dj63zYKRtHhqHTfEfO0-m5fP6Y-OgB5kfcgWew"}
```

---

## 🧠 Deep Dive – REST Concepts & Best Practices

✅ Spring REST and Boot 3  
- REST principles and Spring Boot 3 highlights  
- Explored project setup, devtools, and dependency hierarchy

✅ REST Controller Design  
- Handled GET, POST, PUT, DELETE methods  
- Returned JSON via Spring Web automatically

✅ Request & Response Handling  
- Path variables, query parameters  
- Custom headers, status codes  
- Exception handling in controllers

✅ RESTful DTOs & Representation  
- Used DTOs for clean API responses  
- Explored JSON serialization & versioning strategies

✅ CRUD Operations with REST  
- Implemented Create, Read, Update, Delete endpoints  
- Applied annotations for validation  
- Used optimistic locking where needed

✅ Content Negotiation  
- Supported both JSON & XML using Accept header  
- Configured media types and custom format support

✅ Spring Security & JWT  
- Secured endpoints using JWT  
- Configured CORS, Authentication, and Authorization

---

## 📅 Summary

Week 4 was about building secure, testable, and scalable REST APIs. From learning basic controllers to securing with JWT and documenting with Swagger, this week elevated backend capabilities to enterprise-level development.

✅ Successfully completed REST API development, JWT-based security, and advanced REST features in Spring Boot 3.
