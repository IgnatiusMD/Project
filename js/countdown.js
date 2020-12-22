let deadline=new Date("January 4, 2021 23:59").getTime();

let timer=setInterval(tick,1000);
function tick(){
    let skrg=new Date().getTime();
    let t=deadline-skrg;
    if(t>0){
        let days = Math.floor(t/(1000*60*60*24));
        if(days<10){
            days = "0" + days;
        }
        let hours = Math.floor((t%(1000*60*60*24))/(1000*60*60));
        if(hours<10){
            hours = "0" + hours;
        }
        let mins = Math.floor((t%(1000*60*60))/(1000*60));
        if(mins<10){
            mins = "0" + mins;
        }
        let secs = Math.floor((t%(1000*60))/1000);
        if(secs<10){
            secs = "0" + secs;
        }
        const timer = document.querySelector(".countdown");
        timer.textContent = days+' : '+hours+' : '+mins+' : '+secs;
    }
}