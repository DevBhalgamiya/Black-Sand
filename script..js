const bg = document.getElementById('header');
const counts = document.getElementById('counts');
const line = document.getElementById('line');

const imgchange = () => {
    setTimeout(() => {
        bg.style.background = "url('img/sand1.jpg')no-repeat center center/cover";
        line.style.height = "33px";
        counts.innerText = "01";
    }, 0o00);
    setTimeout(() => {
        bg.style.background = "url('img/sand2.png')no-repeat center center/cover";
        line.style.height = "66px";
        counts.innerText = "02";
    }, 3000);
    setTimeout(() => {
        bg.style.background = "url('img/sand3.jpg')no-repeat center center/cover";
        line.style.height = "99px";
        counts.innerText = "03";
    }, 6000);
}

setInterval(imgchange, 9000);