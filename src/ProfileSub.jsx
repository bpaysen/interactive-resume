const identities = [
  "an AI Solutions Architect",
  "a Systems Builder",
  "a Developer",
  "a Product Thinker",
  "a Founder",
  "a Classical Percussionist 🎶",
];

export default function ProfileSub() {
  return (
    <div className="identity" aria-label="Professional identities">
      <span className="identity-prefix">I am</span>

      <span className="identity-window" aria-hidden="true">
        <span className="identity-list">
          {identities.map((identity) => (
            <span className="identity-item" key={identity}>
              {identity}
            </span>
          ))}
        </span>
      </span>

      <span className="sr-only">
        {identities.join(", ")}
      </span>
    </div>
  );
}