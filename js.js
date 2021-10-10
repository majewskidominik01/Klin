var button = document.querySelector("button");
var timeattack = document.getElementById("time-attack");
var timesend = document.getElementById("time-send");
var timeduration = document.getElementById("time-duration");
var answer = document.getElementById("answer");

button.addEventListener("click", () => {
    var hourattack = timeattack.value.split(":")[0];
    var minutesattack = timeattack.value.split(":")[1];
    var secondattack = timeattack.value.split(":")[2];
    var milisecondsattack = Math.floor((hourattack * 3600000) + (minutesattack * 60000) + (secondattack * 1000));

    var hoursend = timesend.value.split(":")[0];
    var minutessend = timesend.value.split(":")[1];
    var secondsend = timesend.value.split(":")[2];
    var milisecondsend = Math.floor((hoursend * 3600000) + (minutessend * 60000) + (secondsend * 1000));

    var hourduration = timeduration.value.split(":")[0];
    var minutesduration = timeduration.value.split(":")[1];
    var secondduration = timeduration.value.split(":")[2];
    var milisecondsduration = Math.floor((hourduration * 3600000) + (minutesduration * 60000) + (secondduration * 1000));
    
      var miliseconds = milisecondsattack - milisecondsend;
    var seconds =  Math.floor((miliseconds/1000)/ 2 + (milisecondsend/1000));
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor (minutes / 60);
    var sleft = Math.floor(seconds % 60);
    var mleft = Math.floor(minutes % 60);
    var hleft = Math.floor(hours);

    var secondsback = Math.floor((milisecondsduration/1000) - (miliseconds/1000)/2); 

    var minutesback = Math.floor(secondsback / 60);
    var hoursback = Math.floor (minutesback / 60);
    var sback = Math.floor(secondsback % 60);
    var mback = Math.floor(minutesback % 60);
    var hback = Math.floor(hoursback);

    if(sleft < 10) {
        sleft = "0" + sleft;
    } else if(mleft < 10) {
        mleft = "0" + mleft;
    } else if(hleft < 10) {
        hleft = "0" + hleft;
    } else if(sback < 10) {
        sback = "0" + sback;
    } else if(mback < 10) {
        mback = "0" + mback;
    } else if(hback < 10) {
        hback = "0" + hback;
    }
    
    answer.innerHTML = "Aby wklinować się w ataki wchodzące o " + hourattack+":"+minutesattack+":"+secondattack +  " musisz cofnąć wojska " + hback+":"+mback+":"+sback + " od celu (o " + hleft+":"+mleft+":"+sleft + " czasu plemion).";

});