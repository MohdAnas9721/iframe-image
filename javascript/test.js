function updateTime(){
    document.getElementById('time').innerHTML= new Date();
}
updateTime();

setInterval(updateTime,1000);