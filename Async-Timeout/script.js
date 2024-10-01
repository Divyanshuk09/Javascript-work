const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId;
console.log(randomcolor())
const StartChangingColor = function(){
    if(!intervalId){
        intervalId=setInterval(changeBgcolor,500)
    }
    function changeBgcolor(){
        document.body.style.backgroundColor=randomcolor();
    }
}
const StopChangingColor = function(){
clearInterval(intervalId)
intervalId=null;
}

document.querySelector('.start').addEventListener('click',StartChangingColor);
document.querySelector('.stop').addEventListener('click',StopChangingColor);