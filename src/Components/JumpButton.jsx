export default function JumpButton() {
  return (
    <a
      className="hero-jump"
      href="#profile"
      aria-label="Scroll to profile"
    >
      <span className="hero-jump__chevron" aria-hidden="true" />
      <span className="hero-jump__chevron" aria-hidden="true" />
    </a>
  );
}