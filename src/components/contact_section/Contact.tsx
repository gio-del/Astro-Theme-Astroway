import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
}

export default function Contact(props: ContactProps) {
  const { contact } = props;

  return (
    <div className="flex lg:space-x-28 space-x-10 justify-center items-center border-t-2 border-b-2 border-secondary dark:border-dk-secondary py-10 hover:border-accent dark:hover:border-dk-accent">
      <a
        href={`mailto:${contact.email}`}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fas fa-envelope lg:text-9xl text-5xl hover:text-accent dark:hover:text-dk-accent hover:animate-spin"></i>
      </a>
      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fab fa-github lg:text-9xl text-5xl hover:text-accent dark:hover:text-dk-accent hover:animate-spin"></i>
      </a>
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fab fa-linkedin lg:text-9xl text-5xl hover:text-accent dark:hover:text-dk-accent hover:animate-spin"></i>
      </a>
      <a
        href={contact.twitter}
        target="_blank"
        rel="noreferrer"
        className="text-secondary dark:text-dk-secondary"
      >
        <i className="fab fa-x-twitter lg:text-9xl text-5xl hover:text-accent dark:hover:text-dk-accent hover:animate-spin"></i>
      </a>
    </div>
  );
}
