module.exports.index = index;
module.exports.about = about;
module.exports.contact = contact;
module.exports.activities = activities;

function index(req,res){
	res.render('index', {
		layout: 'layout',
		title: 'Abhishek Bharti',
		description: 'Personal',
		keywords: 'Life & Activities'
	});
};

function about(req,res){
	res.render('about-us', {
		layout: 'layout',
		title: 'About Me',
		description: 'Personal',
		keywords: 'Life & Activities'
	});
};

function contact(req,res){
	res.render('contact', {
		layout: 'layout',
		title: 'Contact Me',
		description: 'Personal',
		keywords: 'Life & Activities'
	});
};

function activities(req,res){
	res.render('activities', {
		layout: 'layout',
		title: 'Activities',
		description: 'Personal',
		keywords: 'Life & Activities'
	});
};
