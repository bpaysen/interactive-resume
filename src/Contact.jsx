import ContactLinks from "./Components/ContactLinks";

export default function Contact() {
  return (
    <div className="contact-content">

      <p className="contact-copy">
        Interested in applied AI, products, integrations, or the systems behind them?
        Feel free to reach out.
      </p>

      <ContactLinks />
    </div>
  );
}