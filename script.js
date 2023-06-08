const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=>{ 
    let currenttime = new Date();
    hrs.innerHTML = currenttime.getHours();
    min.innerHTML = currenttime.getMinutes();
    sec.innerHTML = currenttime.getSeconds();    
}, 1000)


