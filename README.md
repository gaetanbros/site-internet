# Gaëtan Bros

A modern landing page designed using cutting-edge web technologies to ensure responsiveness and a sleek design.

## 🚀 Purpose

The primary objective of **Gaëtan Bros** is to create an elegant and lightweight landing page that showcases a clean design with robust performance.

---

## 🛠️ Technologies Used

- **[Astro](https://astro.build/):** A modern, fast framework for building static websites.
- **[React](https://react.dev/):** A JavaScript library for building user interfaces.
- **[Tailwind CSS](https://tailwindcss.com/):** A utility-first CSS framework for rapid UI development.

---

## 📦 Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:AlessandroMA/projet-gb.git
   cd gaetan-bros
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:4321/` in your browser to view the project.

---

## 📦 Deployment

To deploy the website, push on the main branch.
Cloudflare will build and deploy the website automatically.

---

## ⚙️ Configuration and Prerequisites

- No additional configuration or prerequisites are required. The project is ready to go out of the box.

---

## 🚀 CI/CD Pipeline

The project uses GitHub Actions to automate deployment to GitHub Pages. Below is an explanation of the pipeline:

1. **Trigger Events**:  
   The workflow is triggered on every push to the `main` branch or manually through GitHub Actions.

2. **Build Job**:

   - **Checkout Code**: The `actions/checkout@v4` action clones the repository.
   - **Install, Build, and Upload**: The `withastro/action@v3` action builds the Astro project.

3. **Deploy Job**:
   - After a successful build, the `actions/deploy-pages@v4` action publishes the site to GitHub Pages.

The `yaml` file looks like this:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v4
      - name: Install, build, and upload your site
        uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 🤝 Contribution

This project does not currently accept contributions.

---

## 📜 License

This project does not have a license.
