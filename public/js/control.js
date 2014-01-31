window.onload = function() {

    var elem = document.body; // Make the body go full screen.
	requestFullScreen.call(elem);
 
    var messages = [];
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




