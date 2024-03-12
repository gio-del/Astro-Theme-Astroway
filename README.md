# Astro Portfolio Template

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gio-del/Astro-Portfolio-Template)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/gio-del/Astro-Portfolio-Template)

## Table of Contents

- [Astro Portfolio Template](#astro-portfolio-template)
  - [Table of Contents](#table-of-contents)
  - [1.1. Features :open\_hands:](#11-features-open_hands)
  - [1.2. Personal Information :computer:](#12-personal-information-computer)
  - [1.3. Project Structure :rocket:](#13-project-structure-rocket)
  - [1.4. Commands :genie\_man:](#14-commands-genie_man)
  - [1.5. Tools Used :hammer\_and\_wrench:](#15-tools-used-hammer_and_wrench)
  - [1.6. Styling :art:](#16-styling-art)
  - [1.7. Contributing :building\_construction:](#17-contributing-building_construction)
  - [1.8. License :memo:](#18-license-memo)

## 1.1. Features :open_hands:

- Fuzzy search for blog posts
- Dark mode toggle
- Responsive design
- Easy to customize and extend personal data

## 1.2. Personal Information :computer:

To modify the personal data shown in the portfolio template, you need to update the `info.ts` file located in the `data/` folder.

Open the `info.ts` file, and you will find an object with properties representing different sections of your personal data, such as `name`, `title`, `about`, `education`, `experience`, and more.

Update the values of these properties with your own personal information. You can also add or remove properties as needed.

Once you have made the necessary changes, save the file and the portfolio template will reflect the updated personal data.

## 1.3. Project Structure :rocket:

Inside of this portfolio template, you will find the following files and directories:

```text
├── astro.config.mjs
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   └── pic.jpg
├── README.md
├── src
│   ├── components
│   │   ├── about_section
│   │   │   ├── About.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Experience.tsx
│   │   ├── contact_section
│   │   │   └── Contact.tsx
│   │   ├── Nav.jsx
│   │   ├── post_section
│   │   │   ├── Post.astro
│   │   │   └── PostCarousel.tsx
│   │   ├── projects_section
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectCarousel.tsx
│   │   ├── ToggleDarkMode.jsx
│   │   └── TopButton.jsx
│   ├── data
│   │   └── info.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   ├── posts
│   │   │   └── fake_post.md
│   │   └── posts.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
└── tsconfig.json
```

## 1.4. Commands :genie_man:

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 1.5. Tools Used :hammer_and_wrench:

This portfolio template uses the following tools/libraries/resources:

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fuse.js](https://fusejs.io/)

## 1.6. Styling :art:

This portfolio template uses Tailwind CSS for styling. You can modify the colors used in the portfolio by updating the `tailwind.config.js` file located in the root of the project.

## 1.7. Contributing :building_construction:

If you would like to contribute to the Astro Portfolio Template, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Thank you very much for your contributions!

## 1.8. License :memo:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
