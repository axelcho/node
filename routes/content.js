/* The ContentHandler must be constructed with a connected db */
function ContentHandler () {
    "use strict";

	//site main page
	this.displayMainPage = function(req, res, next) {
        "use strict";
        return res.render('main_template', {
            title: 'main',
        });
    }	
	
    this.displayPage = function(req, res, next) {
        "use strict";
	    var page = req.params.page;

        return res.render("page_" + page, {
            title: page,
        });
    }	
}

module.exports = ContentHandler;
