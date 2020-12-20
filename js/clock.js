const clock = document.querySelector(".display");
let time = new Date();
let sec = time.getSeconds();
let min = time.getMinutes();
let hr = time.getHours();
clock.textContent = hr+ ':' + min + ':' + sec;