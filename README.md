# Astro Portfolio Template

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gio-del/Astro-Portfolio-Template)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/gio-del/Astro-Portfolio-Template)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── about_section/
│   │   |   ├── About.tsx
│   │   |   └── Education.tsx
│   |   |   └── Experience.tsx
│   │   ├── contact_section/
│   │   |   └── Contact.tsx
│   │   ├── project_section/
|   |   |   ├── ProjectCard.tsx
|   |   |   └── ProjectCarousel.tsx
│   │   ├── Nav.jsx
│   │   ├── ToggleDarkMode.jsx
│   │   └── TopButton.jsx
│   ├── data/
│   |   └── info.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 💻 Personal Data

To modify the personal data shown in the portfolio template, you need to update the `info.ts` file located in the `data/` folder.

Open the `info.ts` file, and you will find an object with properties representing different sections of your personal data, such as `name`, `title`, `about`, `education`, `experience`, and more.

Update the values of these properties with your own personal information. You can also add or remove properties as needed.

Once you have made the necessary changes, save the file and the portfolio template will reflect the updated personal data.

## 🛠️ Tools Used

This portfolio template uses the following tools/libraries/resources:

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## 🎨 Styling

This portfolio template uses Tailwind CSS for styling. You can modify the colors used in the portfolio by updating the `tailwind.config.js` file located in the root of the project.

## 🏗️ Contributing

If you would like to contribute to the Astro Portfolio Template, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Thank you for your contribution!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
