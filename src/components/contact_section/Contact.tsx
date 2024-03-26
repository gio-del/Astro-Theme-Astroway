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
    {
      name: "rss",
      icon: "fas fa-rss",
      link: "/rss.xml",
      link_alt: "RSS Feed",
    },
  ];

  return (
    <div
      className={
        "flex flex-row items-center container justify-around"
      }
    >
      {socialMediaLinks.map((socialMedia, index) => (
        <a
          key={index}
          href={socialMedia.link}
          target="_blank"
          rel="noreferrer"
          className={
            "text-secondary dark:text-dk-secondary hover:text-accent dark:hover:text-dk-accent " +
            (size === "md" ? "text-3xl lg:text-4xl" : "text-5xl lg:text-9xl")
          }
          aria-label={socialMedia.link_alt}
        >
          <i className={socialMedia.icon}></i>
        </a>
      ))}
    </div>
  );
}
