import { useEffect } from "react";
import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
  size: "md" | "lg";
}

export default function Contact({ contact, size }: ContactProps) {
  const socialMediaLinks = [
    // Fix this if you add or remove social media links in info.ts
    {
      name: "email",
      icon: "fas fa-envelope",
      link: `mailto:${contact.email}`,
      link_alt: "Email",
    },
    {
      name: "github",
      icon: "fab fa-github",
      link: contact.github,
      link_alt: "GitHub",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: contact.linkedin,
      link_alt: "LinkedIn",
    },
    {
      name: "twitter",
      icon: "fab fa-x-twitter",
      link: contact.twitter,
      link_alt: "Twitter",
    },
  ];

  return (
    <div
      className={
        "flex  justify-center items-center border-t-2 border-b-2 border-secondary dark:border-dk-secondary hover:border-accent dark:hover:border-dk-accent  " +
        (size === "md"
          ? "lg:text-3xl text-4xl space-x-20 lg:space-x-16 py-2"
          : "lg:text-9xl text-5xl space-x-10 lg:space-x-28  py-10")
      }
      aria-label="Contact Information"
    >
      {socialMediaLinks.map((link) => (
        <a
          href={link.link}
          rel="noreferrer"
          key={link.name}
          className="text-secondary dark:text-dk-secondary"
          aria-label={link.link_alt}
        >
          <i
            className={`${link.icon} hover:text-accent dark:hover:text-dk-accent`}
          ></i>
        </a>
      ))}
    </div>
  );
}
