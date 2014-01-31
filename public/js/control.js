$(window).load( function() {
   
    var socket = io.connect('http://localhost');    
    $("#station").focus();
	
 
    socket.on('message', function (data) {		
	if (data.choice) {
           $('#main').load('http://localhost/html/' + data.choice + '.html');		
	}	
	else {
           console.log("There is a problem:", data);
        }			
    });

    $("#send").click(function() {
        socket.emit('send', {choice: station.value });        
    });	


    $("#station").change(function() {
       socket.emit('send', {choice: station.value });
       $("#station").focus();
    });
});
