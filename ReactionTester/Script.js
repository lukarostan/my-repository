$(function() {
      $("#reactButton").click( function()
        {
           $("#reactButton").html("Wait...");
          setTimeout(
            function() 
            { 
            //do something special
            $("#mainWindow").css("background-color", "00838f");
            $("#reactButton").html("CLICK ME!");
            }, timer );
        }
      );
});

var timer = Math.random()*10 *Math.random() * 1213;
console.log(timer);

var ms = 0;
var second = 0;

    
setInterval(clockRunning, 1);

function clockRunning(){
	
	ms++;
	if (ms == 1000){
		second += 1;
		ms = 0;}
    
    $("#timer").html(second +" : "+ ms);
};