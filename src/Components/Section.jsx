import React from "react";



const titleText = {
	color: "#b1cbcc",
  	fontSize: 60,
  	fontWeight: 'lighter',
  	textAlign: 'center',

}
// .engraved {
//     font-size: 100px;
//     font-family: Futura;
//     background-color: #666666;
//     -webkit-background-clip: text;
//     -moz-background-clip: text;
//     background-clip: text;
//     color: transparent;
//     text-shadow: rgba(245,245,245,0.5) 3px 5px 1px;
//  }

const quoteText = {
	color: "#b1cbcc",
  	fontSize: 23,
    backgroundClip: "text",
  	textAlign: 'center',
  	fontStyle: 'italic',
  	padding: 20,
}

export default function Section({ title, quote, attribution, copy, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1 style={titleText}>{title}</h1>
        <p style={quoteText}><q>{quote}</q>{attribution}</p>
        <p>{copy}</p>
      </div>
    </div>
  );
}