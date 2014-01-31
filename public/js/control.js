function requestFullScreen(element) {
    // Supports most browsers and their versions.
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;

    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
            wscript.SendKeys("{F11}");
        }
    }
}

window.onload = function() { 

    var elem = document.body; // Make the body go full screen.
	requestFullScreen(elem);
    
    var socket = io.connect('http://localhost');
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("name");		
 
    socket.on('message', function (data) {		
		if (data.choice) {
			$('#main').load('http://localhost/html/' + data.choice + '.html');		
		}
		
		else {
            console.log("There is a problem:", data);
        }
		
		
    });
 
	//sendmessage event
    sendButton.onclick = sendMessage = function() {
        socket.emit('send', {choice: station.value });        
    };
}




