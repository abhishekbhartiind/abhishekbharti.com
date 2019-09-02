let express = require('express'),
	partials = require('express-partials'),
	app = express(),
	routes = require('./routes'),
  minifyHTML = require('express-minify-html'),
  compression = require('compression')
;
	
app.set('view engine', 'ejs');
app.set('view options', {defaultLayout: 'layout'});

app.use(partials());
app.use(express.static(__dirname + '/static'));

app.use(minifyHTML({
  override:      true,
  exception_url: false,
  htmlMinifier: {
      removeComments:            true,
      collapseWhitespace:        true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes:     true,
      removeEmptyAttributes:     true,
      minifyJS:                  true
  }
}));
app.use(compression());

//routes
app.get('/', routes.index);
//app.get('/about-us',routes.about);
app.get('/contact', routes.contact);
app.get('/activities', routes.activities);


app.get('/error', function(req, res, next){
 	next(new Error('A contrived error'));
});
app.listen(3003, () => {
  console.log("App server running on port 3003");
});
