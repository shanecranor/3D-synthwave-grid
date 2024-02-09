interface Project{
	eventName: string,
	year: number,
	title: string,
	tags: string[],
	img?: string,
	awards?: {award: string, organization: string}[]
	languages: string[],
	summary: string,
	description: string,
	links?: {link: string, description: string}[],
}
export const projects: Project[] = [
	{
		eventName: 'Truffle',
		year: 2022,
		title: 'Spotify Integration For Streamers',
		// img: '',
		tags: ['Web Stack'],
		languages: ['JavaScript', 'TypeScript', 'React'],
		summary: 'Building a cloudflare worker to interact with spotify servers and parse song data on the edge. Then displaying that data in an iframe overlay for viewers.',
		description: `Over the summer of 2022 I worked with Truffle and built a little GUI and backend that enables streamers to share what they are listing to on spotify with their listeners without cluttering up their stream. Using some tech from the Truffle developer platform I can inject an iframe into the Youtube or Twitch page. I made the overlay draggable, by controlling the iframe styles and listening to mouse events on the iframe.`
	},
	{
		eventName: 'HASS327, Music Technology',
		year: 2022,
		title: 'Math Synth Experiment',
		// img: '',
		tags: ['Web Stack'],
		languages: ['JavaScript', 'HTML', 'CSS'],
		summary: 'Have you ever wanted to manipulate synthesized sound with math? Create the music of your dreams by controlling volume and pitch with functions that you can easily write yourself.',
		description: `I created this synth for my Music Technology class. The requirements for the synth stated that it needed to play multiple notes and have multiple waveforms. I had always wanted to be able to modify synth properties with equations similar to how you can control any parameter with any output in a traditional rack mount modular synth so I figured out the web audio API and built it myself.
		
		To implement equations, instead of writing my own function parser I take advantage of some of the quirks in vanilla javascript. When the user types a function into a text box my code calls the 'new Function' constructor in javascript to create a function that is called to determine the value for the parameter. A side effect of the user actually writing javascript functions is that they can use any global variable that is specified in the code. I use this to my advantage by making the current note that is being pressed a global variable 'note' to make an oscillator that is an octave higher you can simply change 'note' to 'note*2'. 
		
		Feel free to check it out or read more about the inner workings and perfomance by using the links below! `,
		links: [
			{
				link: '...',
				description: 'Learn More'
			},
			{
				link: 'https://shane.cranor.org/synth/',
				description: 'Try it out!'
			}]
	},
	{
		eventName: 'MEGN540, Mechatronics',
		year: 2022,
		title: 'Building A Rotary Subwoofer',
		// img: '',
		tags: ['Hardware'],
		languages: ['Embedded C / Arduino C'],
		summary: 'I built an ultra low frequency speaker system. The project involved milling a custom PCB with a Sallen-Key low-pass filter, implementing a PID controller to maintain fan speed, and shaking my entire house.',
		description: `In this project, we designed a rotary subwoofer to bypass	the physical constraints of traditional subwoofer design in attempt to produce high amplitude infrasonic frequencies. We	constructed and tested a functioning prototype and found that even at low RPM, the rotary subwoofer had superior infrasonic	performance to a traditional subwoofer at full volume. While there are some minor drawbacks to the fan subwoofer design, like a higher noise floor, the fan subwoofer has proven to be an effective and low cost method of reproducing ultra low frequencies.`,
		links: [
			{
				link: '...',
				description: 'See it in action'
			},
			{
				link: 'https://shane.cranor.org/synth/',
				description: 'Learn More'
			}]
	},
	{
		eventName: 'CSCI437, Computer Vision',
		year: 2021,
		title: 'ChArUco Draw',
		// img: '',
		tags: ['Machine Learning', 'Graphics'],
		languages: ['Python'],
		summary: 'Using ORB feature detection, ChArUco boards, and OpenCV in Python to create an augmented reality drawing system that can create, store, and view 3D drawings.',
		description: `ChArUco Draw is a drawing program that allows the user to draw anywhere in 3D space. Using a special marker, the user can draw by moving the marker throughout the room. We use Checkerboard/ArUco(Charuco) markers on the walls, ceiling, and floor of a room, to create the canvas, which estimates the position of the marker in a room. The marker is a ChArUco code or an object of the user's choice.`
	},
	{
		eventName: 'CSCI250, Sensor Systems',
		year: 2021,
		title: 'Raspberry Pi Door Camera',
		// img: '',
		tags: ['Web Stack', 'Hardware'],
		languages: ['JavaScript', 'HTML', 'CSS', 'Python'],
		summary: 'A doorbell camera clone created with a Rapberry Pi',
		description: `The doorbell camera was built in a team of 4 and includes a temperature and humidity sensor as well as a camera making it function as a mini weather station and door bell.`
	},
	{
		eventName: 'Datava',
		year: 2021,
		title: 'End to End Testing With Cypress',
		// img: '',
		tags: ['Web Stack'],
		languages: ['JavaScript'],
		summary: 'Led a team that implemented end to end testing on Datava’s cloud based interface using Javascript, Cypress, and ExtJS.',
		description: `Over the summer of 2021 I led a team working to build Cypress tests for Datava's web based enteprise management system. Our project was less successful than expected because their interface did not have static classes or IDs. We eventually determined that we needed to add 'data-cy' tags to all the interface elements to make testing anything viable.`
	},
	{
		eventName: 'HackUMBC',
		year: 2020,
		title: 'bubblz.space',
		img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/285/069/datas/gallery.jpg',
		tags: ['Web Stack'],
		languages: ['Javascript', 'NodeJS', 'HTML', 'CSS'],
		awards: [
			{
				award: "Best use of secured cloud technologies",
				organization: "General Dynamics Mission Systems"
			},
			{
				award: "Presented by Wolfram",
				organization: "Wolfram"
			}
		],
		summary: 'Building a Zoom clone (with a twist) using open source software in 24 hours for a hackathon.',
		description: `Bubblz.space is peer to peer zoom competitor that I made in 24 hours in a team with two other ACM students (all collaborating remotely during the pandemic) for the HackUMBC hackathon. We used NodeJS and WebRTC (with the help of socket.io and peer.js) to build our application. We hosted our solution on Google Cloud. 

	Here is the pitch for our project: 
	Existing video call platforms have serious limitations. Most platforms only really let one person talk at a time, making it difficult to have natural conversations, where there may be many conversations going on in the same room at once. Furthermore, existing platforms are restrictive for remote learning, making it hard for professors and students to interact with each other in the same way they would in in-person classes.
	
	The advantage bubblz.space has over other video sharing software is the concept of “the bubble.” Bubbles are like public breakout rooms. When you go into a bubble you can only hear people who are talking in your bubble. Going in and out of bubbles is as easy as dragging your video feed to whichever bubble you want! This is nice because a professor or TA can see everyone in the class, even when in breakout rooms to more easily gauge how well the class is doing on the discussion or assignment. The site was live at bubblz.space in November 2020`
	},
	{
		eventName: 'CSCI306 Software Engineering',
		year: 2020,
		title: 'Campus Themed Clue Game',
		img: 'https://shane.cranor.org/code/imgs/ClueGame.png',
		tags: ['Application'],
		languages: ['Java'],
		summary: 'Recreating the Clue board game in Java',
		description: `An accurate reconstruction of the board game Clue with a new campus themed map, bad sound effects, fun music, and pictures. Play against smart AI computer players. The game was written in a team of two using OOP principles and test driven development in Java. The final product is over 4000 lines of code. `
	},
	{
		eventName: 'Random Quarantine Project',
		year: 2020,
		title: 'Procedural Interactive Pixel Art Kaleidoscope',
		// img: 'https://shane.cranor.org/code/imgs/ClueGame.png',
		tags: ['Graphics', 'Web Stack'],
		languages: ['JavaScript', 'PixiJS'],
		summary: 'Using Javascript and some arbitrary math to make some cool looking pixel art!',
		description: `I made this in my spare time over the summer of 2020 while hiding from the rona with my family. The image is generated from a strange modified iterative XOR function. Each coordinate is passed through 3 instances of the XOR function, one for the hue, saturation, and lightness. Based on the current FPS, the program dynamically changes the number of pixels rendered. The Kaleidoscope effect looks cool, but also serves to increase the framerate by reducing the number of calls to the XOR function as my iterative XOR function is not particularly efficient.`
	},
	{
		eventName: 'Science Fair',
		year: 2019,
		title: 'Using neural networks to monitor parking lots',
		links: [
			{
				link: 'https://docs.google.com/presentation/d/1s76drEdBIL2nWBRRvm437i2gE22_n4uiu6_yqZVG63I/edit?usp=sharing',
				description: 'Poster Board (Google Slides)'
			},
			{
				link: 'https://docs.google.com/presentation/d/1Oo2V2g9wou79Sg-pdO02ykM4uOtl7vUhKkzTsef9Lno/edit?usp=sharing',
				description: 'Presentation (Google Slides)'
			}],
		img: 'https://shane.cranor.org/code/imgs/scifi.jpg',
		tags: ['Machine Learning'],
		languages: ['Python'],
		awards: [
			{
				award: "1st Award at Regional Competition",
				organization: "PJAS (Pennsylvania Junior Academy of Science)"
			},
			{
				award: "1st Award at State Competition",
				organization: "PJAS (Pennsylvania Junior Academy of Science)"
			}
		],
		summary: 'Detecting cars and empty parking spaces using machine learning and a Raspberry Pi.',
		description: `This project was born out of the struggle of finding a parking spot at the airport (pre pandemic). I wondered if there was a simple solution to driving through endless rows full of parked cars. My first thought was to have a fleet of drones that fly above the lot every half hour or so and direct users to empty spots with laser pointers, or through a cellphone app. After thinking about it for a while I decided to ditch the moving parts and just mount the camera to light posts that are often found in parking lots as an easy way to get high elevation without needing to deal with drones. 
		
		A Raspberry Pi was used as the camera to collect images and I used Tensorflow to identify parked cars. Market research on existing solutions revealed that most solutions cost over $100 per parking space. My solution is over 100 times cheaper for 50 or more parking spaces with much lower installation costs. I took my project to the Regional Pennsylvania Junior Academy of Science, got first award, and then went on to win first award at the state wide competition as well. I also presented at PRSEF, the Pittsburgh Regional Science & Engineering Fair, and won a sponsor award. I really enjoyed teaching myself how to set up tensorflow for use in a real world scenario as well as learning how to set up and use a Raspberry Pi.`
	},
	{
		eventName: 'CSCI101/CSCI261',
		year: 2019,
		title: '3D Space Game With Procedural Planets',
		tags: ['Graphics'],
		languages: ['Python'],
		summary: 'Fly around a line based 3D environment with stars and procedurally generated planets!',
		description: `Using the 3D engine I built in 2017, I created a space flight simulator demo in Python. For this project I also built a procedural planet generator that creates 3D planets with a specified level of detail. I use an algorithm that maps a 2D plane to points on a sphere and then use random noise to plot points on the planet's surface and to generate peaks and valleys. I also created a simple file type to store the 3D data for easy import and export.`
	},
	{
		eventName: 'CMU 15-112 Fundamentals of Programming & Computer Science',
		year: 2017,
		title: '3D Arcade Game',
		tags: ['Graphics'],
		languages: ['Python'],
		awards: [
			{
				award: "Best Term Project",
				organization: "CMU 15-112 Summer 2017: Class Vote"
			}
		],
		summary: 'An infinite runner game built in a homemade 3D engine.',
		description: `I built a 3D engine and implemented it in my own arcade game as the final project for 15-112, the intro to programing course at Carnegie Mellon University. The game is an infinite runner game where you play as a cube inside of a cubic snow globe. Your character can move left and right as well as jump to avoid obstacles. If you rotate the snow globe while dodging an obstacle you get points based on the speed that you are rotating. However, as you dodge more obstacles, the rate at which they move increases, making your odds of avoiding them significantly worse.`
	},
]

export function getProjectsByLanguage(language: string) {
	return projects.filter(p => (p.languages.includes(language)))
}
export function getProjectsByTag(category: string) {
	return projects.filter(p => (p.tags.includes(category) || category == "All"))
}
export function getProjectsByLanguages(projects: Project[], languages: string[]) {
	return projects.filter(
		(proj: Project) => proj.languages.some(l => languages.includes(l))
	)
}