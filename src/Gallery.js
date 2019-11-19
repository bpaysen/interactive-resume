import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import { Grid, Responsive, Divider } from "semantic-ui-react";


const skillsLine = {
  background: "#b1cbcc",
    width: 875,
    margin: 'auto',
    marginBottom: 50,
    marginTop: 20
}

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
  position: "absolute",
  bottom: "40px",
  left: "20px",
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

const HungerOutreachSite = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "400px",
  height: "250px",
  margin: "20px",
  cursor: "pointer",
  backgroundImage: "url(/saketh-garuda-fXlkomo5tCQ-unsplash.jpg)",
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
			<Grid columns={2}>
      <Responsive as={Divider} style={skillsLine}> </Responsive>
        <Grid.Row>
  				<Grid.Column className="EnvironmentalSite" >
  					<EnvironmentBg alt="Photo by Valentino Funghi on Unsplash">
  						<DisplayOver>
  							<BigTitle>Environmental Activism</BigTitle>
  							<Hover>
  								<SubTitle>An environmental guide in a defining moment..</SubTitle>
  								<Paragraph>
  									Tags: Design, Development, Founder, React.js, Bootstrap, 
  								</Paragraph>
  								<CTA>visit website +</CTA>
  							</Hover>
  						</DisplayOver>
  					</EnvironmentBg>
  				</Grid.Column>
  				<Grid.Column className="MusicSite" >
  					<MusicBg alt="Photo by Valentino Funghi on Unsplash">
  						<DisplayOver>
  							<BigTitle>Composer's personal website</BigTitle>
  							<Hover>
  								<SubTitle>A multimedia site of compositions and media projects.</SubTitle>
  								<Paragraph>
  									Tags: Design, Development, Creator, Javascript, Typescript, AWS
  								</Paragraph>
  								<CTA>visit website +</CTA>
  							</Hover>
  						</DisplayOver>
  					</MusicBg>
  				</Grid.Column>
        </Grid.Row>

        <Grid.Row>
  				<Grid.Column className="PhotojournalSite" >
  					<PhotojournalSite>
  						<DisplayOver>
  							<BigTitle>A Photojournal to celebrate my son</BigTitle>
  							<Hover>
  								<SubTitle>A photo catalogue.</SubTitle>
  								<Paragraph>
  									Tags: Design, Development, React.js, Semantic, Lightbox, Now.sh, 
  								</Paragraph>
  								<CTA>visit website +</CTA>
  							</Hover>
  						</DisplayOver>
  					</PhotojournalSite>
  				</Grid.Column>
          <Grid.Column className="HungerOutreachSite" >
            <HungerOutreachSite alt="Photo by Saketh Garuda on Unsplash">
              <DisplayOver>
                <BigTitle>Hunger and Homelessness Project</BigTitle>
                <Hover>
                  <SubTitle>Helping Humans in crisis break the chains of poverty.</SubTitle>
                  <Paragraph>
                    Tags: Design, Development, Founder, Ruby on Rails, PostgreSQL
                  </Paragraph>
                  <CTA>visit website +</CTA>
                </Hover>
              </DisplayOver>
            </HungerOutreachSite>
          </Grid.Column>
        </Grid.Row>
			</Grid>

		);
	}
}

export default Gallery;