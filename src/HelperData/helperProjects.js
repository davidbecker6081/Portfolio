export const getProjectData = () => {
	return [
		{
			name: 'MovieTracker',
			about: 'The goal of MovieTracker was to create a web application that allows users to look at information for newly released movies, create an account to save favorites, and login or logout from that account. This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api). User interface design came with challenges such as what to do if a user was not logged in and tried to add a favorite? This was a week and a half long team project. Credits: Margo Schaedel, Laura Caroselli.',
			gitHub: 'https://github.com/davidbecker6081/movie-tracker',
			liveLink: '',
			imageUrl: 'https://i.imgur.com/EQ0uUzp.png',
			technologies: ['React', 'Redux', 'React Router', 'PostgreSQL', 'Knex', 'CSS Grid'],
			testing: 'Enzyme/Jest, fetch-mock',
			dateCompleted: 'September 7, 2017',
		},
		{
			name: 'BYOB',
			about: 'The goal of BYOB was to collect some data and build an API to access, manipulate, and delete the data, with focus on solidifying CRUD methods, querying a database, and responding with JSON data. BYOB API provides access to information about Colorado breweries and beers with endpoints for GET, POST, PATCH, and DELETE. This API follows RESTful principles and uses JSON Web Tokens for authentication and authorization. The API contains two tables with access to breweries and beers and returns all data in JSON format. This was a week-long partner project. Credits: Tyler Hevia',
			gitHub: 'https://github.com/davidbecker6081/BYOB',
			liveLink: 'https://byob-db-th.herokuapp.com/',
			imageUrl: 'https://i.imgur.com/VT38K9D.png',
			technologies: ['Javascript', 'JQuery', 'PostgreSQL', 'Express', 'Knex'],
			testing: 'Mocha/Chai, chai-http',
			dateCompleted: 'October 6, 2017',
		},
		{
			name: 'SWAPI-Box',
			about: 'Who doesn\'t like Star Wars?! SWAPI-Box used the Star Wars API to tap into various data sets with nested URLs of more data. The goal was to create an application that allowed users to view and favorite different people, planets, and vehicles from Star Wars, create a scrolling effect, and design a loading screen. Challenges with the project included learning Promise.all, writing nested Promises, using React Lifecycle Methods, implementing propTypes, and testing with fetch-mock. This was a 3-day partner project. Credits: Dan Alvarez.',
			gitHub: 'https://github.com/davidbecker6081/SWAPI-Box',
			liveLink: '',
			imageUrl: 'https://i.imgur.com/dFlmnE6.png',
			technologies: ['React', 'React Router'],
			testing: 'Enzyme/Jest, fetch-mock',
			dateCompleted: 'August 24, 2017',
		},
		{
			name: 'Weathrly',
			about: 'Since everyone needs another weather app, here is Weathrly for you. Weathrly used the Wunderground API to grab the current weather, 7-hour forecast, and 10-day forecast for cities. To implement the search/autocomplete feature, we used a previously built prefix trie from a project called Complete-Me (https://github.com/davidbecker6081/complete-me). Some of the challenges involved in this project included hooking up the prefix trie to the autocomplete feature, designing a UI from scratch, using LocalStorage to persist location, and organizing all of the data. This was a week and a half long partner project. Credits: Nick Svetnicka.',
			gitHub: 'https://github.com/davidbecker6081/weathrly',
			liveLink: '',
			imageUrl: 'https://i.imgur.com/F3v02xi.png',
			technologies: ['React', 'HTML5', 'CSS3'],
			testing: 'Enzyme/Jest',
			dateCompleted: 'August 3, 2017',
		},
		{
			name: 'TRON',
			about: 'If you haven\'t played TRON before, get yourself to an arcade and put in a quarter. We built a recreation of one of the classic arcade games\' \'Light Cycle Battle\' using HTML5 Canvas and JavaScript. The focus for the project was writing in an OOP style; we had multiple classes to deal with each player, the game area, the trail element, and soundFX. Some of the challenges of this project were collision detection with two players, learning how to use a game loop (and getting out of it), and creating a friendly UI. This was a week and a half long partner project. Credits: Jack Mallahan',
			gitHub: 'https://github.com/jackmallahan/game-time',
			liveLink: '',
			imageUrl: 'https://i.imgur.com/7R2T3TV.png',
			technologies: ['HTML5', 'CSS3', 'JavaScript'],
			testing: 'Mocha/Chai',
			dateCompleted: 'July 20, 2017',
		},
		{
			name: 'PattrnParty',
			about: 'The goal of Pattrn Party was to create a small style guide with three components: Accordion Tabs, Flexible Cards, and a Header Bar. The focus was on semantic HTML, well organized and clear CSS, and DRY, well factored Javascript. Each component needed to be responsive from desktop to mobile and persist its current setting. This was a personal project.',
			gitHub: 'https://github.com/davidbecker6081/PattrnParty',
			liveLink: 'https://davidbecker6081.github.io/PattrnParty/',
			imageUrl: 'https://i.imgur.com/DJQ5xeK.png',
			technologies: ['HTML5', 'CSS3', 'JavaScript'],
			testing: 'N/A',
			dateCompleted: 'November 1, 2017',
		}
	];
};

//Extras

// {
// 	name: 'ConnectME',
// 	about: 'The goal of ConnectME was to create a platform to search friends in a particular location and then message one particular friend or a group of friends in that location. A user should be able to login and logout, send and store messages to and from friends, and eventually, store groups of friends in particular locations. In this project, I implemented Firebase OAuth and database, used the Facebook Graph API, and tested with Enzyme/Jest. This was a 2-week personal project.',
// 	gitHub: 'https://github.com/davidbecker6081/ConnectME',
// 	liveLink: '',
// 	imageUrl: 'https://i.imgur.com/E4aPHt0.png',
// 	technologies: ['React', 'Redux', 'React Router', 'Firebase OAuth/Database'],
// 	testing: 'Enzyme/Jest, fetch-mock',
// 	dateCompleted: 'September 20, 2017',
// },
