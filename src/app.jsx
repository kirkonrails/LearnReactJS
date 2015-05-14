// ---------------------------------------------------------------------------------------
// Main 
// ---------------------------------------------------------------------------------------
var options = {
	thumbnailData: [{
		title: "Show Courses",
		number: 12,
		header: "Learn ReactJS",
		description: "ReactJS is a fantastic new front-end library for rendering web pages. It is growing fast and has a large community already and it's only at version 0.13!",
		imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRo2D2eH0ujipooBuRnpnFAYjKJOxSNapvKeifh4Ybzx6bfgOdGOvPtmMxtjA"
	},
	{
		title: "Show Courses",
		number: 25,
		header: "Learn Gulp",
		description: "Gulp will speed up your development work flow. It is similar to a build too like grunt but actually a quite a bit different.",
		imageUrl: "https://pbs.twimg.com/profile_images/417078109075034112/iruTC031_400x400.png"
	}
	]
};	


console.log('thhii')

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));

