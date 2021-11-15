(function() {

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let myTime = new Date();
    myTime.setHours(myTime.getHours() + 0);
    myTime.setMinutes(myTime.getMinutes() + 15);

    const countDown = new Date(myTime).getTime(),
        x = setInterval(function() {

            const now = new Date().getTime(),
                remainingTime = countDown - now;

            // document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((remainingTime % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((remainingTime % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((remainingTime % (minute)) / second);

            //do something later when date is reached
            if (remainingTime <= 0) {
                document.getElementById("headline").innerText = "Last minute refill!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
            //seconds
        }, 0)
}());