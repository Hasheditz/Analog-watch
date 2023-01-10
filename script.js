
const hourhand = document.querySelector('[hour-hand]');
const minutehand = document.querySelector('[minute-hand]');
const secondhand = document.querySelector('[second-hand]');

function setclock(){
    const currentdate = new Date();
    const secondratio = currentdate.getSeconds()/60;
    const minuteratio = (secondratio + currentdate.getMinutes())/60;
    const hourratio = (minuteratio + currentdate.getHours())/12;
    setrotatio(hourhand , hourratio);
    setrotatio(minutehand , minuteratio);
    setrotatio(secondhand , secondratio);
}

function setrotatio(element , rotationratio)
{ 
    element.style.setProperty('--rotation' , rotationratio * 360)
}

setclock();
setInterval(setclock , 1000);