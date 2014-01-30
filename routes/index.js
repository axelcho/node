var ContentHandler = require('./content') 
  , ErrorHandler = require('./error').errorHandler;

module.exports = exports = function(app) {
    
    var contentHandler = new ContentHandler();

    // The main page
    app.get('/', contentHandler.displayMainPage);
	
	//about page
	app.get('/page/:page', contentHandler.displayPage);

    // Error handling middleware
    app.use(ErrorHandler);
}
