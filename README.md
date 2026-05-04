# 🚀 Enterprise Conduit Automation Framework (ECAF)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Allure Report](https://img.shields.io/badge/Allure_Report-FFB000?style=for-the-badge&logo=qameta&logoColor=white)

A robust, highly scalable, and production-ready Fullstack End-to-End (E2E) Testing Framework built to validate the **Conduit** application. This project serves as a showcase of **Enterprise Quality Engineering Architecture** and modern test automation best practices.

## 📖 About The Project & Reference
This framework is designed to test **Conduit**, a social blogging site (similar to Medium.com) powered by the open-source **[RealWorld Project](https://github.com/gothinkster/realworld)** initiative by Thinkster. 
- **Target UI Domain:** `https://demo.realworld.show`
- **Target API Domain:** `https://api.realworld.show/api`

## 🏗️ Architectural Highlights (Portfolio Showcase)
This framework goes beyond basic automation scripts by implementing industry-standard architectural patterns:

1. **Hybrid State Injection (The Silver Bullet)**: Bypasses slow UI login flows by utilizing Playwright's custom fixtures to perform instantaneous API authentication and inject valid session cookies/tokens directly into the browser state. Reduces execution time by ~70%.
2. **Component-Based Page Object Model (POM)**: Implements OOP principles (`Inheritance` & `Composition`) using Abstract `BasePage` and `BaseComponent` classes to ensure D.R.Y (Don't Repeat Yourself) locator management.
3. **API Contract Validation (Shift-Left Testing)**: Utilizes `AJV (Another JSON Schema Validator)` to strictly validate backend API response schemas, preventing silent failures caused by undocumented backend data mutations.
4. **Dynamic Data Generation**: Integrates `Faker.js` to dynamically generate randomized, human-readable test data (Article Titles, Bodies, Tags) to prevent Data Collision during parallel CI/CD execution.
5. **Strict TypeScript Engineering**: Enforces absolute imports (Path Aliases) and 100% Strict Mode (`noImplicitAny`, `strictNullChecks`) to catch errors at compile-time rather than runtime.

## 🧰 Tech Stack
- **Core Engine:** [Playwright Test](https://playwright.dev/)
- **Language:** TypeScript
- **Schema Validator:** AJV
- **Test Data Provider:** Faker.js
- **Environment Management:** Dotenv
- **Reporting:** Allure Report
- **CI/CD Pipeline:** GitHub Actions

## 📂 Project Structure
```text
conduit-automation-framework/
├── .github/workflows/       # CI/CD Pipeline configurations
├── src/
│   ├── api/                 # API Clients & Base API setup
│   ├── fixtures/            # Custom Playwright fixtures (Hybrid Flow)
│   ├── schemas/             # AJV JSON Schemas for Contract Validation
│   ├── tests/               # Test spec files
│   │   ├── api/             # API/Backend tests
│   │   └── ui/              # UI/E2E tests
│   ├── ui/                  # Page Object Model Layer
│   │   ├── base/            # Abstract BasePage & BaseComponent
│   │   ├── components/      # Reusable UI components (e.g., Navbar)
│   │   └── pages/           # Application-specific pages
│   └── utils/               # Helper utilities (AJV validator)
├── .env                     # Local environment variables (Git-ignored)
├── playwright.config.ts     # Global Playwright configuration
└── tsconfig.json            # Strict TypeScript compiler options
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (Node Package Manager)
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone <YOUR_GITHUB_REPOSITORY_URL>
   cd conduit-automation-framework
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps chromium
   ```

### Environment Configuration
Create a `.env` file in the root directory and define your test credentials (you can register a free account manually at `https://demo.realworld.show/register`):
```env
TEST_EMAIL=your_test_account@example.com
TEST_PASSWORD=your_secure_password
```

## 🏃‍♂️ Execution

### Running Tests Locally
Run all test suites (API, UI, and Hybrid) in headless mode (default):
```bash
npx playwright test
```

Run specific test in headed mode (visible browser):
```bash
npx playwright test src/tests/ui/article.spec.ts --headed
```

Run tests with UI mode (Interactive Playwright App):
```bash
npx playwright test --ui
```

## 📊 Reporting & Living Documentation
This project uses **Allure Report** to generate comprehensive, visual, and interactive test execution reports.
To generate and open the report after a test run:
```bash
npx allure serve allure-results
```

## ☁️ Continuous Integration (CI/CD)
The framework is fully integrated with **GitHub Actions**. Upon every `push` or `pull_request` to the `main` branch, the pipeline will automatically:
1. Provision a Linux container.
2. Setup Node.js & dependencies.
3. Inject GitHub Secrets for secure execution.
4. Run all E2E & API tests in parallel.
5. Upload the test execution artifacts.

---
*Built with ❤️ and extreme attention to detail as a demonstration of Quality Engineering Excellence.*
