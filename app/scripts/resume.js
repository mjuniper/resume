var resume = {
	name: 'Mike Juniper',
	email: 'mike@mikejuniper.com',
	/* To see a nicely formatted version, please go to: */
	website: 'http://mikejuniper.com/resume',
	phone: '(970) 430-6685',
	description: 'A software developer who wants to use his skills to make the world a better place. Also, a dedicated bicycle commuter.',
	skills: {
		languages: [
			'javascript',
			'HTML',
			'CSS',
			'SQL',
			'C#.NET'
		],
		libraries: [
			'jquery' /* of course */,
			'backbone.js',
			'underscore.js',
			'icanhaz.js',
			'moment.js'
			/* I use lots of others as needed, of course, but these are the ones I tend to use frequently */
		],
		tools: [
			'subversion',
			'git', /* not a ninja, I'm learning */
			'visual studio',
			'sublime text'
		]
	},
	experience: [
		{
			title: 'Software Engineer',
			organization: 'Esri Washington DC R&D Center',
			location: 'Fort Collins, CO',
			begDate: new Date(2013, 8),
			endDate: new Date(),
			description: ''
		},
		{
			title: 'Senior Software Developer',
			organization: 'DTS Agile',
			location: 'Fort Collins, CO',
			begDate: new Date(2008, 0),
			endDate: new Date(2013, 8),
			description: 'I architected, and built fairly complex web applications for state DOTs. I often also served as a technical project manager with frequent client contact. I occasionally supervised junior developers - typically only one. The apps I built usually deal with management or visualization of traffic data or highway construction projects. There was typically a mapping component; sometimes it was central to the app, sometimes not.'
		},
		{
			title: 'GIS Software Developer',
			organization: 'Sanborn Map Company',
			location: 'Fort Collins, CO',
			begDate: new Date(2007, 0),
			endDate: new Date(2007, 11),
			description: 'Served as a member of a team building desktop applications for government clients utilizing Microsoft .NET and ESRI ArcObjects.'
		},
		{
			title: 'GIS Technician',
			organization: 'Ramsey County',
			location: 'St Paul, MN',
			begDate: new Date(2004, 8),
			endDate: new Date(2006, 11),
			description: 'Developed various ArcGIS extensions to automate colleague\'s tasks. Served as guest lecturer on ArcGIS at St Paul College.'
		},
		{
			title: 'Database/Systems Administrator',
			organization: 'Rainbow Tree Company',
			location: 'St Louis Park, MN',
			begDate: new Date(2000, 1),
			endDate: new Date(2004, 8),
			description: 'I was the IT department for a small-ish tree company. Notably I got my start as a developer by coordinating the development of an Access/VBA front end to a SQL server database.'
		}
	],
	projects: [
		{
			title: 'Singletracker.net',
			url: 'http://singletracker.net',
			client: 'Personal project',
			description: 'Crowd sourced trail conditions for mountain bikers, hikers, & trail runners.'
		},
		{
			title: 'Online Transportation Information System (OTIS)',
			url: 'http://dtdapps.coloradodot.info/otis',
			client: 'Colorado Department of Transportation',
			description: 'A public facing portal for disseminating CDOT\'s traffic count and highway data to the public.'
		},
		{
			title: 'Traffic Analysis Geospatial Information System (TAGIS)',
			url: 'http://www.mikejuniper.com/wp-content/uploads/tagis.png',
			client: 'Colorado Department of Transportation',
			description: 'A secure web application for visualizing detailed traffic count data.'
		},
		{
			title: 'Interactive Funding Map',
			url: 'http://maps.saferoutesinfo.org',
			client: 'National Center for Safe Routes to School',
			description: 'A web mapping application which visualizes federally funded Safe Routes to Scholl projects across the US.'
		}
	],
	education: [
		{
			title: 'BS, Geology',
			institution: 'Juniata College',
			location: 'Huntingdon, PA',
			date: new Date(1992, 4)
		}
	],
	presentations: [
		{
			title: 'Javascript in the Enterprise (with Dave Bouwman)',
			event: 'Js.Geo13',
			year: 2013
		},
		{
			title: 'Have a Little Backbone: An MVC JavaScript Framework for Your Next Generation Apps (with Brian Noyle)',
			event: 'ESRI Developer Summit',
			year: 2012
		},
		{
			title: 'Getting Real-Time: Asp.NET MVC and SignalR',
			event: 'ESRI Developer Summit',
			year: 2012
		},
		{
			title: 'HTML5 Not Just for Breakfast Anymore (with Brian Noyle)',
			event: 'ESRI Developer Summit',
			year: 2011
		},
		{
			title: 'There\'s an App for that: Developing iPhone/Android Applications with OpenLayers and the ArcGIS Server API\'s (with Brian Noyle)',
			event: 'ESRI Developer Summit',
			year: 2010
		}
	],
};

//awards?, presenter at dev summit, more education, about dialog, notable projects, link from blog, stuff I'm interested in: node, express, meteor, mongo; singletracker, more tests
