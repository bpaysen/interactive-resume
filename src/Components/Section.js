import React from "react";


const titleText = {
	color: "#b1cbcc",
  	fontSize: 60,
  	fontWeight: 'lighter',
  	textAlign: 'center',

}

const quoteText = {
	color: "#b1cbcc",
  	fontSize: 26,
  	opacity: 7,
  	textAlign: 'center',
  	fontStyle: 'italic',
  	padding: 20,
}

export default function Section({ title, quote, copy, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 style={titleText}>{title}</h1>
        <p style={quoteText}>{quote}</p>
        <p>{copy}</p>
      </div>
    </div>
  );
}