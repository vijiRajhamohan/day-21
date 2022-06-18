let countdown = 10;
var timer = document.getElementById('sec');
timer.innerHTML = countdown--;
setTimeout(() => {
    timer.innerText = countdown--;
    setTimeout(() => {
        timer.innerText = countdown--;
        setTimeout(() => {
            timer.innerText = countdown--;
            setTimeout(() => {
                timer.innerText = countdown--;
                setTimeout(() => {
                    timer.innerText = countdown--;
                    setTimeout(() => {
                        timer.innerText = countdown--;
                        setTimeout(() => {
                            timer.innerText = countdown--;
                            setTimeout(() => {
                                timer.innerText = countdown--;
                                setTimeout(() => {
                                    timer.innerText = countdown--;
                                    setTimeout(function () {
                                        const img = document.createElement("img")
                                        img.src = "https://tse2.mm.bing.net/th?id=OIP.HmvCSoGaldO-HZR9xTpg-AHaFv&pid=Api&P=0&w=207&h=160"
                                        center.appendChild(img)
                                        time.innerText = ""
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);