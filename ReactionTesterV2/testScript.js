var t = new Date().getTime();
        console.log(t);
        document.getElementById("shape").onclick = function (){
            var time = new Date().getTime() - t;
                
            document.getElementById("shape").style.display = "none";
                console.log("time:"+time);
        }