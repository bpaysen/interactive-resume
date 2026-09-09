export default function ContactLinks() {
  return (
    <nav className="contact-links" aria-label="Contact links">
      <a
        href="https://github.com/bpaysen"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M12 .7a11.3 11.3 0 0 0-3.6 22c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.3 11.3 0 0 0 12 .7Z" />
        </svg>
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/benpaysen"
        target="_blank"
        rel="noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M5.3 7.8H1.7V22h3.6V7.8ZM3.5 2A2.1 2.1 0 1 0 3.5 6.2 2.1 2.1 0 0 0 3.5 2ZM22 13.8c0-4.3-2.3-6.3-5.4-6.3-2.5 0-3.6 1.4-4.2 2.3v-2H8.8V22h3.6v-7c0-1.8.3-3.6 2.6-3.6 2.2 0 2.3 2.1 2.3 3.7V22H21v-8.2Z" />
        </svg>
        LinkedIn
      </a>

      <a href="mailto:ben@acceliqtech.com">
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
          fill="currentColor"
        >
          <path d="M2.5 5.5A2.5 2.5 0 0 1 5 3h14a2.5 2.5 0 0 1 2.5 2.5v13A2.5 2.5 0 0 1 19 21H5a2.5 2.5 0 0 1-2.5-2.5v-13Zm2.1-.5 7.4 5.4L19.4 5H4.6Zm14.9 2.1-6.9 5a1 1 0 0 1-1.2 0l-6.9-5v11.4c0 .3.2.5.5.5h14c.3 0 .5-.2.5-.5V7.1Z" />
        </svg>
        Email
      </a>
    </nav>
  );
}