import React, { Component } from "react";
import styled from "@emotion/styled/macro";



const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

const BigTitle = styled.h2({
  // textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});
const EnvironmentBg = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "400px",
  height: "250px",
  margin: "20px",
  cursor: "pointer",
  backgroundImage: "url(/limantourSunset2.JPG)",
  [`:hover ${DisplayOver}`]: {
  	backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});
const MusicBg = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "400px",
  height: "250px",
  margin: "20px",
  cursor: "pointer",
  backgroundImage: "url(/valentino-funghi-VRr9a2rOoBI-unsplash.JPG)",
  [`:hover ${DisplayOver}`]: {
  	backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});
const PhotojournalSite = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "400px",
  height: "250px",
  margin: "20px",
  cursor: "pointer",
  backgroundImage: "url(/Julian_website_background.jpg)",
  [`:hover ${DisplayOver}`]: {
  	backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});



class Gallery extends Component {
	render() {
		return(
			<div>
				<div className="EnvironmentalSite">
					<EnvironmentBg alt="Photo by Valentino Funghi on Unsplash">
						<DisplayOver>
							<BigTitle>Environmental Activism</BigTitle>
							<Hover>
								<SubTitle>An environmental commentary on current topics.</SubTitle>
								<Paragraph>
									Click here to visit the site. It was built using React Components.
								</Paragraph>
								<CTA>visit website +</CTA>
							</Hover>
						</DisplayOver>
					</EnvironmentBg>
				</div>
				<div className="MusicSite">
					<MusicBg alt="Photo by Valentino Funghi on Unsplash">
						<DisplayOver>
							<BigTitle>Composer's personal website</BigTitle>
							<Hover>
								<SubTitle>A multimedia site of compositions and media projects.</SubTitle>
								<Paragraph>
									Click here to visit the site. It was built using React Components.
								</Paragraph>
								<CTA>visit website +</CTA>
							</Hover>
						</DisplayOver>
					</MusicBg>
				</div>
				<div className="PhotojournalSite">
					<PhotojournalSite>
						<DisplayOver>
							<BigTitle>A Photojournal to celebrate my son</BigTitle>
							<Hover>
								<SubTitle>A photo catalogue using React-photo-Gallery and a lightbox Modal.</SubTitle>
								<Paragraph>
									Click here to visit the site. It was built using React Components.
								</Paragraph>
								<CTA>visit website +</CTA>
							</Hover>
						</DisplayOver>
					</PhotojournalSite>
				</div>
			</div>
		);
	}
}

export default Gallery;