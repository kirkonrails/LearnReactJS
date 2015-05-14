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

var element = React.createElement(ThumbnailList, options);
React.render(element, document.querySelector('.container'));
// ---------------------------------------------------------------------------------------
// Badge 
// ---------------------------------------------------------------------------------------
var Badge = React.createClass({displayName: "Badge",
	render: function(){
		this.props // {} 
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			  this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
			)
	}
});

var Thumbnail = require('thumbnail');

// ---------------------------------------------------------------------------------------
// ThumbnailList 
// ---------------------------------------------------------------------------------------
var ThumbnailList = React.createClass({displayName: "ThumbnailList",

	render: function(){
		var list = this.props.thumbnailData.map(function(thumbnailProps){
			return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
		});

		return React.createElement("div", null, 
			list
		)
	}	

});
// ---------------------------------------------------------------------------------------
// Thumbnail 
// ---------------------------------------------------------------------------------------
var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function(){
		return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
	    React.createElement("div", {className: "thumbnail"}, 
	      React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
	      React.createElement("div", {className: "caption"}, 
	        React.createElement("h3", null, this.props.header), 
	        React.createElement("p", null, this.props.description), 
	        React.createElement(Badge, {title: this.props.title, number: this.props.number})
	      )
	    )
	  )
	}
});