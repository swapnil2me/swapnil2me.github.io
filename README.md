# Swapnil More - Personal Portfolio

This is a modern, responsive personal portfolio built with React and Vite. It serves as a centralized hub for professional experience, skills, and projects.

## Project Architecture & Configuration

The application is built to be easily scalable. Data is completely decoupled from the UI components to allow quick updates.
To update your content, you do **not** need to touch the core React code (`.jsx` components). Simply update the data configuration files.

### How to Add/Edit Skills & Categories ("The things I am good at")
All skills (which also act as the filtering categories on the Home page) are managed in `src/data/skillsData.jsx`.
1. Open `src/data/skillsData.jsx`.
2. Add a new object to the `skillsData` array.
3. Ensure you add a unique `id` string (e.g., `my-new-category`). This `id` is extremely important as it links projects to this specific category.

### How to Add a New Project
All projects are managed in `src/data/projectsData.js`.
1. Open `src/data/projectsData.js`.
2. Add a new object to the array.
3. For the `categories` property, add an array of strings that perfectly match the `id` values you created in `skillsData`. You can assign multiple categories to a single project!

**Example:**
```javascript
{
  title: "My Awesome New Project",
  desc: "A brief description here.",
  link: "https://link-to-paper.com", // Optional
  github: "https://github.com/link", // Optional
  demo: "https://demo-link.com", // Optional
  color: "#3b82f6", // Add a custom hex color for the card's visual accent
  type: "code", // E.g., 'code', 'publication', 'hardware'. Displayed as a subtitle.
  categories: ["data-science", "eda-simulation"] // Matches IDs from skillsData.jsx
}
```

## Running Locally

1. Ensure you have Node.js installed.
2. Run `npm install`
3. Run `npm run dev` to start the local development server with hot-reload.

## Automated Deployment
This repository is configured with a GitHub Action pipeline (`.github/workflows/deploy.yml`). Any new commits or data updates pushed to the `main` or `master` branch will automatically compile the Vite application and publish the live site seamlessly to GitHub Pages.
