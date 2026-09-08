import React from "react";

export default function Section({
  title,
  quote,
  attribution,
  copy,
  dark,
  id,
}) {
  const quoteIsText = typeof quote === "string";

  return (
    <section
      id={id}
      className={`section${dark ? " section-dark" : ""}`}
    >
      <div className="section-content">
        <h2 className="section-title">{title}</h2>

        {quote &&
          (quoteIsText ? (
            <blockquote className="section-quote">
              <p>“{quote}”</p>
              {attribution && <cite>{attribution}</cite>}
            </blockquote>
          ) : (
            <div className="section-interstitial">{quote}</div>
          ))}

        <div className="section-body">{copy}</div>
      </div>
    </section>
  );
}