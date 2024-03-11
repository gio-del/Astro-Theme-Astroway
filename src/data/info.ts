export const info = {
  name: "John Doe",
  title: "Full Stack Developer",
  brief_description:
    "I'm a full stack developer with a passion for web development.",
  role: "Full Stack Developer",
  picture: "/pic.jpg",
  location: "New York, USA",
  cv: "/Resume.pdf", // Make sure the file is in the public folder or modify the path/name

  about: {
    description: `I'm a full stack developer with a passion for web development.
    I have a strong foundation in computer science and I'm always eager to learn new technologies.
    I have experience in building web applications using React, Node.js, and MongoDB.
    I'm also familiar with TypeScript and GraphQL.
    I'm a team player and I'm always looking for ways to improve my skills.`,
    education: [
      {
        title: "Preschool",
        date: "1998 - 2000",
        location: "New York Preschool",
      },
      {
        title: "Elementary School",
        date: "2000 - 2006",
        location: "New York Elementary School",
      },
      {
        title: "High School Diploma",
        date: "2006 - 2010",
        location: "New York High School",
      },
      {
        title: "Bachelor of Computer Science",
        date: "2010 - 2014",
        location: "University of New York",
        gpa: "3.8",
        thesis: "A survey about portfolio websites",
      },
      {
        title: "Master of Computer Science",
        date: "2014 - 2016",
        location: "University of New York",
        gpa: "3.9",
        thesis: "A more in-depth survey about portfolio websites",
      },
      {
        title: "PhD in Computer Science",
        date: "2016 - 2018",
        location: "Massachusetts Institute of Technology",
        thesis: "A comprehensive survey about portfolio websites",
      },
    ],
    experience: [
      {
        title: "Full Stack Developer",
        date: "2018 - Present",
        location: "ABC Company",
        description:
          "Developed and maintained web applications using React, Node.js, and MongoDB.",
      },
      {
        title: "Frontend Developer",
        date: "2016 - 2018",
        location: "XYZ Company",
        description:
          "Built and maintained web applications using React and Redux.",
      },
      {
        title: "Software Engineer",
        date: "2014 - 2016",
        location: "DEF Company",
        description: "Worked on various projects using Java, C++, and Python.",
      },
      {
        title: "Intern",
        date: "2013 - 2014",
        location: "GHI Company",
        description:
          "Assisted with various tasks and learned about software development.",
      },
    ],

    skills: ["JavaScript", "TypeScript"],
  },

  projects: [
    {
      title: "Portfolio Website",
      date: "2021",
      description:
        "A personal portfolio website built with Next.js and TypeScript.",
      link: "https://www.github.com",
      tech: ["Next.js", "TypeScript"],
      img_path: "/pic.jpg",
    },
    {
      title: "E-commerce Website",
      date: "2020",
      description:
        "An e-commerce website built with React, Node.js, and MongoDB.",
      link: "https://www.github.com",
      tech: ["React", "Node.js", "MongoDB"],
      img_path: "/pic.jpg",
    },
    {
      title: "Blog Website",
      date: "2019",
      description: "A blog website built with Gatsby and GraphQL.",
      link: "https://www.github.com",
      tech: ["Gatsby", "GraphQL"],
      img_path: "/pic.jpg",
    },
    {
      title: "Social Media App",
      date: "2018",
      description: "A social media app built with React and Redux.",
      link: "https://www.github.com",
      tech: ["React", "Redux"],
      img_path: "/pic.jpg",
    },
    {
      title: "Todo App",
      date: "2017",
      description: "A todo app built with Angular and Firebase.",
      link: "https://www.github.com",
      tech: ["Angular", "Firebase"],
      img_path: "/pic.jpg",
    },
  ],

  contact: {
    email: "john.doe@notsofake.com",
    linkedin: "https://www.linkedin.com/in/veryfakenamethatisnotreal",
    github: "https://www.github.com/veryfakenamethatisnotreal",
    twitter: "https://www.twitter.com/veryfakenamethatisnotreal",
    // Add or remove social media links, then update the Contact.tsx component accordingly
  },
};
