# bhrigukansra.github.io

A modern, minimalist portfolio website built with **React + Vite + Tailwind CSS**. It includes:

- Responsive landing page (Hero, About, Skills, Projects, Contact)
- Markdown-powered blog page with example posts
- Accessible navigation and semantic HTML structure
- Sample API route for contact form submission
- GitHub Actions workflow for automated build and deployment

## Tech Stack

- React 18
- Vite 6
- Tailwind CSS 3
- React Router
- gray-matter + marked for markdown blog posts

## Project Structure

```text
.
├── .github/workflows/deploy.yml
├── api/contact.js
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── content/blog/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── index.html
├── package.json
└── tailwind.config.js
```

## Getting Started

### 1) Install

```bash
npm install
```

### 2) Run locally

```bash
npm run dev
```

### 3) Build production files

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Blog Markdown Support

Add markdown files in `src/content/blog/` with frontmatter:

```md
---
title: My Post
date: 2026-02-01
excerpt: Short summary
---

# Heading
Post content...
```

## Contact Form API Route

A starter API route is provided at `api/contact.js`.

- It validates `name`, `email`, and `message`.
- Replace the placeholder logic with your provider (Resend, Formspree, etc.).

> Note: GitHub Pages is static hosting, so API routes do not run there.
> Use an external backend/serverless service for live contact submissions.

## Deployment (GitHub Pages)

The workflow at `.github/workflows/deploy.yml`:

1. Installs dependencies
2. Builds the app (`npm run build`)
3. Publishes `dist/` to GitHub Pages

### Repository settings checklist

- Set Pages source to **GitHub Actions**.
- Ensure default branch is `main` (or adjust workflow trigger).

## Customization

- Update personal details in `src/pages/HomePage.jsx`
- Replace images in `public/images/`
- Update social links and email
- Add real project demo/GitHub links
