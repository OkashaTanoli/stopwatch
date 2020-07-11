var min = 0;
var sec = 0;
var milisec = 0;
var slow;


function stopWatch(){
    var miliInner = document.getElementById("milisec");
    milisec++;
    miliInner.innerHTML =milisec;
    if(milisec >= 100){
        var secInner = document.getElementById("sec")
        sec++;
        milisec = 0;
        miliInner.innerHTML = milisec
        secInner.innerHTML = sec;
        if(sec >= 60){
            var minInner = document.getElementById("min")
            min++
            sec = 0;
            secInner.innerHTML = sec
            minInner.innerHTML = min;
        }

    }
    
}

function start(){
     slow =   setInterval(stopWatch,10);
     var disab = document.getElementById("disable");
     disab.disabled = true;
}

function stopNow(){
     clearInterval(slow)
     var disab = document.getElementById("disable");
     disab.disabled = false;
}

function reset(){
    min = 0;
    sec = 0;
    milisec = 0;
    var first  = document.getElementById("min");
    var second = document.getElementById("sec");
    var third = document.getElementById("milisec");
    first.innerHTML = min;
    second.innerHTML = sec;
    third.innerHTML = milisec;
    clearInterval(slow)
    var disab = document.getElementById("disable");
     disab.disabled = false;
}
function record(){
    var name = document.getElementById("name")
    var saved = document.getElementById("inner")
    var userName = document.getElementById("userName")
    var timeUsed = document.getElementById("timeUsed")
    if(name.value !== ""){
        userName.innerHTML += name.value+"<br>";
    }
    else{
    userName.innerHTML += "Undefined"+"<br>";
    }
    timeUsed.innerHTML += saved.innerHTML+"<br>";
    name.value = ""
}

function clrAll(){
    var clrAllFirst = document.getElementById("userName")
    var clrAllSecond = document.getElementById("timeUsed")
    clrAllFirst.innerHTML = "";
    clrAllSecond.innerHTML = "";
}

