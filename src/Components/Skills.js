import React from 'react';
import { Icon } from 'semantic-ui-react';


const DataLeft = {
		skillsLeft : [
    { name: 'JavaScript, (ES5 - ES6)', score: 5 },
    { name: 'CSS(3)', score: 5},
    { name: 'HTML(5)', score: 5},
    { name: 'Bootstrap Framework', score: 5},
    { name: 'Semantic Framework', score: 5},
    { name: 'JSON', score: 5},
    { name: 'JQuery', score: 4},
    { name: 'Ruby on Rails', score: 4 },
    { name: 'SQL, MySQL', score: 4 },
    { name: 'Test-driven Development', score: 4 },    
    { name: 'Bash, Vim, Less, Regex', score: 4}
  	]
  };

 const DataRight = {
  		skillsRight : [
  	{ name: 'React.JS, SPAs', score: 4},
  	{ name: 'Python, Flask', score: 4 },
  	{ name: 'Github', score: 4},
    { name: 'OOP, ORM, MVC', score: 4},
    { name: 'HTTP Protocol', score: 4},
    { name: 'REST', score: 4},
    { name: 'Documentation', score: 4 },
    { name: 'Network Communication', score: 3},
    { name: 'Optimizely / AB Tests', score: 3 },
    { name: 'Redux, Firebase', score: 3},
	{ name: 'IoT, Telematics programming', score: 3}, 
    { name: 'AWS', score: 2}
  	]
  };

const leftEntries = Object.keys(DataLeft);
const rightEntries = Object.keys(DataRight);

const colorStars = <Icon name='star' size="small" />;
const blankStars = <Icon name='star outline' size="small" />;

const fiveStars = () => {
	return <li className="star-right">{colorStars} {colorStars} {colorStars} {colorStars} {colorStars}</li>
}
const fourStars = () => {
	return <li className="star-right">{colorStars} {colorStars} {colorStars} {colorStars} {blankStars}</li>
}
const threeStars = () => {
	return <li className="star-right">{colorStars} {colorStars} {colorStars} {blankStars} {blankStars}</li>
}
const twoStars = () => {
	return <li className="star-right">{colorStars} {colorStars} {blankStars} {blankStars} {blankStars}</li>
}
const oneStar = () => {
	return <li className="star-right">{colorStars} {blankStars} {blankStars} {blankStars} {blankStars}</li>
}

export class LeftSkills extends React.Component {
	render() {

		const leftTech = leftEntries.map((skill) =>
			DataLeft[skill].map((tech) => {
				let techName = tech.name
				let techScore = tech.score
				for (let key in DataLeft.skillsLeft) {
					if (tech.score == 5) { return <li className="tech-list">{techName} {fiveStars()}</li> }
					else if (tech.score == 4) { return <li className="tech-list">{techName} {fourStars()}</li> }
					else if (tech.score == 3) { return <li className="tech-list">{techName} {threeStars()}</li> }
					else if (tech.score == 2) { return <li className="tech-list">{techName} {twoStars()}</li> }
					else if (tech.score == 1) { return <li className="tech-list">{techName} {oneStar()}</li> }
				}
			}))
		
		return (
		    <ul className="skillStar">
				{leftTech}		
		    </ul>
		);
	}
};

export class RightSkills extends React.Component {
	render() {

		const rightTech = rightEntries.map((skill) =>
			DataRight[skill].map((tech) => {
				let techName = tech.name
				let techScore = tech.score
				for (let key in DataRight.skillsRight) {
					if (tech.score == 5) { return <li className="tech-list">{techName} {fiveStars()}</li> }
					else if (tech.score == 4) { return <li className="tech-list">{techName} {fourStars()}</li> }
					else if (tech.score == 3) { return <li className="tech-list">{techName} {threeStars()}</li> }
					else if (tech.score == 2) { return <li className="tech-list">{techName} {twoStars()}</li> }
					else if (tech.score == 1) { return <li className="tech-list">{techName} {oneStar()}</li> }
				}
			}))

		return (
		    <ul className="skillStar">
				{rightTech}		
		    </ul>
		);
	}
}
