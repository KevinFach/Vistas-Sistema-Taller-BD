function currentTime() {

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    //ternarios que agregan un 0
    hh = (hh<10) ? "0" + hh : hh;
    mm = (mm<10) ? "0" + mm : mm;
    ss = (ss<10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" +ss;
    let reloj = document.querySelector('#reloj')
    reloj.innerHTML = time;
}
setInterval(currentTime, 1000)
