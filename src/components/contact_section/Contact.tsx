import { useEffect } from "react";
import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
  size: "md" | "lg";
}

export default function Contact(props: ContactProps) {
  const { contact } = props;
  const { size } = props;

  const socialMediaLinks = [
    // Fix this if you add or remove social media links
    { name: "email", icon: "fas fa-envelope", link: `mailto:${contact.email}` },
    { name: "github", icon: "fab fa-github", link: contact.github },
    { name: "linkedin", icon: "fab fa-linkedin", link: contact.linkedin },
    { name: "twitter", icon: "fab fa-x-twitter", link: contact.twitter },
  ];

  return (
    <div
      className={
        "flex  justify-center items-center border-t-2 border-b-2 border-secondary dark:border-dk-secondary hover:border-accent dark:hover:border-dk-accent  " +
        (size === "md"
          ? "lg:text-5xl text-4xl space-x-20 lg:space-x-10  py-2"
          : "lg:text-9xl text-5xl space-x-10 lg:space-x-28  py-10")
      }
    >
      {socialMediaLinks.map((link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noreferrer"
          key={link.name}
          className="text-secondary dark:text-dk-secondary"
        >
          <i
            className={`${link.icon} hover:text-accent dark:hover:text-dk-accent`}
          ></i>
        </a>
      ))}
    </div>
  );
}
