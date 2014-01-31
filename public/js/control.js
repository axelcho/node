window.onload = function() { 
   
    var socket = io.connect('http://localhost');    
    var sendButton = document.getElementById("send");  	
 
    socket.on('message', function (data) {		
		if (data.choice) {
			$('#main').load('http://localhost/html/' + data.choice + '.html');		
		}
		
		else {
            console.log("There is a problem:", data);
        }
		
		
    });
 
	//sendmessage event
    $("#send").click(function() {
        socket.emit('send', {choice: station.value });        
    });
	
	$("select").change(function(){
		socket.emit('send', {choice: station.value });
	});
	
}




