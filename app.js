//npm includes files
var express = require('express'), 
   app = express(), 
   cons = require('consolidate'), 
   swig = require('swig'), 
   routes = require('./routes'); 

//set up path variable
var path = require('path');

//Swig template engine
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
	
//default swig directory, more work required here
swig.init({ root: __dirname + '/views' });
    
//cookie
app.use(express.cookieParser());

//body parser
app.use(express.bodyParser());
	
//add public paths
app.use("/images", express.static(path.join(__dirname, '/public/images')));
app.use("/css", express.static(path.join(__dirname, '/public/css')));
app.use("/js", express.static(path.join(__dirname, '/public/js')));
app.use("/fonts", express.static(path.join(__dirname, '/public/fonts')));
app.use("/html", express.static(path.join(__dirname, '/public/html')));
	
//add favicon
app.use(express.favicon(path.join(__dirname, '/public/images/favicon.ico'))); 

// Application routes
routes(app);

var io = require('socket.io').listen(app.listen(80));
	
io.sockets.on('connection', function (socket) {
	socket.emit('message', { message: 'Welcome to Chat' });
	socket.on('send', function (data) {
		io.sockets.emit('message', data);
	});
});
console.log('Express server listening on port 80');