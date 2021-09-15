let hourTick = document.querySelector('#hour-tick');
let minuteTick = document.querySelector('#minute-tick');
let secondTick = document.querySelector('#second-tick');

let date = new Date();

// Angles to move the Ticks
let hourAngle = 0;
let minuteAngle = 0;
let secondAngle = 0;
let minuteCount = 1;



// Event to set Ticks to local time of your pc when the page is loaded
window.addEventListener('load', ()=>{
    let hours = date.getHours()-12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let totalHours = hours+(minutes/60);
    
    hourAngle = hourAngle+(30*totalHours);
    hourTick.style.transform = `rotate(${hourAngle}deg)`;
    hourTick.style.transformOrigin = `center bottom`;
    minuteAngle = minuteAngle+(6*minutes);
    minuteTick.style.transform = `rotate(${minuteAngle}deg)`;
    minuteTick.style.transformOrigin = 'center bottom';
    secondAngle = secondAngle+(6*seconds);
    secondTick.style.transform = `rotate(${secondAngle}deg)`;
    secondTick.style.transformOrigin = 'center bottom';
});





// Moving HourTick every minute
setInterval(()=>{
    hourAngle = hourAngle+0.5;
    hourTick.style.transform = `rotate(${hourAngle}deg)`;
    hourTick.style.transformOrigin = 'center bottom';
},1000*60);




// Moving secondTick every second & minuteTick every minute
setInterval(()=>{
    secondAngle = secondAngle+6;
    if(secondAngle/360==minuteCount){
        minuteAngle = minuteAngle+6;
        minuteTick.style.transform = `rotate(${minuteAngle}deg)`;
        minuteTick.style.transformOrigin = 'center bottom';
        minuteCount = minuteCount+1;
    }
    secondTick.style.transform = `rotate(${secondAngle}deg)`;
    secondTick.style.transformOrigin = 'center bottom';
},1000);