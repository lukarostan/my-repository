$(function() {
      $("#reactButton").click( function()
        {
           $("#reactButton").html("Wait...");
          setTimeout(
            function() 
            { 
            //do something special
                
                setInterval(clockRunning, 100);
            $("#mainWindow").css("background-color", "4fb3bf");
            $("#reactButton").html("CLICK ME!");
            }, timer );
        }
      );
});

var timer = Math.random()*10 *Math.random() * 1213;
console.log(timer);

var ms = 0;
var second = 0;

    


function clockRunning(){
	
	ms++;
	if (ms == 100){
		second += 1;
		ms = 0;}
    
    $("#timer").html(second +" : "+ ms);
};