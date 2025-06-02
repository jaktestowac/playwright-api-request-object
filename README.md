# Playwright Webinar: LEVEL UP! Architecture and AI in API Testing with Playwright

This repository contains code used during Webinar organized by jaktestowac.pl:
# [Playwright Webinar: LEVEL UP! Architecture and AI in API Testing with Playwright](https://jaktestowac.pl/pwapi/)

that demonstrate the evolution of API testing architecture using Playwright, focusing on advanced patterns and AI integration.

To see more details about the webinar, please visit our website: [jaktestowac.pl](https://jaktestowac.pl/pwapi/)
by [jaktestowac.pl](https://jaktestowac.pl/contribution-playwright/) team.

## Who we are?

We are **Test Architects and Senior Lead Tech Quality Engineers**, who are passionate about testing.
We are constantly looking for new ways to improve our skills and share our knowledge with others.

We are actively involved in the Playwright community, contributing to the project and sharing our knowledge with others. We have been using Playwright in **different companies and projects since 2021**.

We believe in the power of open source and the importance of giving back to the community.

Read more about our **[Contribution to Playwright and Community](https://jaktestowac.pl/contribution-playwright/)**

## 🛠️ Technical Stack

| Component                   | Technology | Version  | Purpose                    |
| --------------------------- | ---------- | -------- | -------------------------- |
| **Testing Framework**       | Playwright | ^1.50.0  | E2E test automation        |
| **Language**                | TypeScript | Latest   | Type safety & IntelliSense |
| **Runtime**                 | Node.js    | v20+ LTS | JavaScript runtime         |
| **Package Manager**         | npm        | Latest   | Dependency management      |

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v20 or later LTS version)
- our free application to practice automation - [🦎 GAD](https://github.com/jaktestowac/gad-gui-api-demo)
- [VSCode] (https://code.visualstudio.com) IDE for coding

## 🏃‍♂️ Quick Start

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (v20 or later LTS version)
- [VSCode](https://code.visualstudio.com) IDE for optimal development experience
- Our practice application - [🦎 GAD](https://github.com/jaktestowac/gad-gui-api-demo) (optional)

### **Installation & Setup**

1. **Clone the repository**
   ```bash
   git clone https://github.com/jaktestowac/playwright-api-request-object-webinar.git
   cd playwright-api-request-object-webinar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

4. **Start the GAD application** (required for tests)
   
   Download and run the [🦎 GAD application](https://github.com/jaktestowac/gad-gui-api-demo) on `http://localhost:3000`
   
### **Project Structure & Learning Path**

This repository follows a progressive learning approach with numbered folders representing different architectural patterns:

- `00_web_1_api/` - Basic API tests with Playwright request object
- `01_extracting_commons/` - Extracting common variables and page objects
- `02-05_*_request_object/` - Simple request object patterns (GET/POST)
- `06-11_*_login_ro/` - Advanced request objects with authentication
- `12-15_fixture_*` - Fixture-based architecture with session management

### **Running Tests**

```bash
cd 00_web_1_api
# Run all tests in the current folder
npx playwright test

# Run tests in headed mode
npx playwright test --headed

# Run tests with UI mode
npx playwright test --ui

# Generate HTML report
npx playwright show-report
```

---

## 📖 Resources & Learning Materials

### **🦎 Practice Application**

- [GAD (GUI API Demo)](https://github.com/jaktestowac/gad-gui-api-demo) - Our free application for automation practice

### **🇵🇱 Polish Resources**

- [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Comprehensive Polish learning materials
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - YouTube series (Polish)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Advanced concepts (Polish)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - MCP course (Polish)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - First Polish Playwright community!
- [Playwright Info](https://playwright.info/) - first and only Polish Playwright blog

### **🇬🇧 English Resources**

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Our free Playwright plugins
- [Playwright Documentation](https://playwright.dev/docs/intro) - Official documentation
- [Playwright GitHub](https://github.com/microsoft/playwright) - Source code and issues

## Contact

Feel free to reach out to us:

- 🌐 Website: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 LinkedIn: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 Discord: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 Support: Check our website for contact details

---

**Happy testing and automating tests!** 🚀

**jaktestowac.pl Team** 💚❤️

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

> **⭐ Star this repository** if you found it helpful and want to support our work!
>
> **🔄 Share with your team** to help spread knowledge about advanced Playwright testing patterns!

---

_Built with 💚❤️ for the Playwright and testing automation community_
