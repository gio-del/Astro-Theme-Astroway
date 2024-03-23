# 1. Astro Portfolio Template

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gio-del/Astro-Portfolio-Template)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/gio-del/Astro-Portfolio-Template)

## 1.1. Table of Contents

- [1. Astro Portfolio Template](#1-astro-portfolio-template)
  - [1.1. Table of Contents](#11-table-of-contents)
  - [1.2. Features :open\_hands:](#12-features-open_hands)
  - [1.3. What's next? :rocket:](#13-whats-next-rocket)
  - [1.4. How to use this template :toolbox:](#14-how-to-use-this-template-toolbox)
    - [1.4.1. Notes about the contact section :email:](#141-notes-about-the-contact-section-email)
    - [1.4.2. Notes about RSS feed :newspaper:](#142-notes-about-rss-feed-newspaper)
    - [1.4.3. Notes about SEO :robot:](#143-notes-about-seo-robot)
    - [1.4.4. Notes about styles :art:](#144-notes-about-styles-art)
  - [1.5. Project Structure :rocket:](#15-project-structure-rocket)
  - [1.6. Commands :genie\_man:](#16-commands-genie_man)
  - [1.7. Tools Used :hammer\_and\_wrench:](#17-tools-used-hammer_and_wrench)
  - [1.8. Contributing :building\_construction:](#18-contributing-building_construction)
  - [1.9. License :memo:](#19-license-memo)

## 1.2. Features :open_hands:

- Dark mode toggle
- Responsive design
- Easy to customize and extend personal data
- Fuzzy search for blog posts
- SEO friendly (robots.txt, sitemap.xml)
- RSS feed

## 1.3. What's next? :rocket:

- [ ] Internationalization (i18n)
- [ ] Projects collection
- Feel free to open an issue or submit a pull request with your ideas for improving this portfolio template (see [Contributing](#18-contributing-building_construction))

## 1.4. How to use this template :toolbox:

Note: this mini-guide assumes you have `npm` installed on your machine, if you don't, you can download it following the instructions [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. Click on the "Use this template" button at the top of the repository.
2. Create a new repository based on this template.
3. Clone the repository to your local machine.
4. Install the dependencies by running `npm install`
5. You can now start the development server by running `npm run dev` (see this [section](#16-commands-genie_man) for more commands)
6. Now you can start customizing the portfolio template by updating the `/data/info.ts` file with your personal information.

### 1.4.1. Notes about the contact section :email:

If you add/remove something from the contact section in the `info.ts` file, you will need to update the `Contact.tsx` file located in the `src/components/contact_section` directory by simply reflecting the changes you made in the `info.ts` file. Although, this choice may seem redundant, it allows to separate the data from the view.

### 1.4.2. Notes about RSS feed :newspaper:

The RSS feed is generated using the `astro-plugin-feed` plugin.

To customize it:

1. Update the `site` entry in the `astro.config.mjs` file with your site url.
2. Modify the `rss.xml.js` file located in the `pages` directory to reflect your site's information.

### 1.4.3. Notes about SEO :robot:

Modify the head section of the `BaseLayout.astro` file located in the `src/layouts` directory to reflect your site's information.

### 1.4.4. Notes about styles :art:

This portfolio template uses Tailwind CSS for styling. You can modify the colors used in the portfolio by updating the `tailwind.config.js` file located in the root of the project.

## 1.5. Project Structure :rocket:

Inside of this portfolio template, you will find the following files and directories:

```text
.
├── astro.config.mjs
├── LICENSE
├── package.json
├── package-lock.json
├── public
│   ├── favicon.svg
│   ├── pic.jpg
│   └── Resume.pdf
├── README.md
├── src
│   ├── components
│   │   ├── about_section
│   │   │   ├── About.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Experience.tsx
│   │   ├── contact_section
│   │   │   └── Contact.tsx
│   │   ├── navbar
│   │   │   ├── Hamburger.tsx
│   │   │   └── Nav.jsx
│   │   ├── post_section
│   │   │   ├── Blog.astro
│   │   │   └── Post.astro
│   │   ├── projects_section
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectCarousel.tsx
│   │   ├── search
│   │   │   └── Search.tsx
│   │   ├── ToggleDarkMode.jsx
│   │   └── TopButton.jsx
│   ├── data
│   │   └── info.ts
│   ├── env.d.ts
│   ├── layouts
│   │   ├── BaseLayout.astro
│   │   └── PostLayout.astro
│   ├── pages
│   │   ├── index.astro
│   │   ├── posts
│   │   │   └── your-post-title.md
│   │   └── posts.astro
│   └── styles
│       └── global.css
├── tailwind.config.mjs
└── tsconfig.json
```

## 1.6. Commands :genie_man:

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 1.7. Tools Used :hammer_and_wrench:

This portfolio template uses the following tools/libraries/resources:

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fuse.js](https://fusejs.io/)

## 1.8. Contributing :building_construction:

If you would like to contribute to the Astro Portfolio Template, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Thank you very much for your contributions!

See the [CONTRIBUTING.md](CONTRIBUTING.md) file for more information.

## 1.9. License :memo:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
