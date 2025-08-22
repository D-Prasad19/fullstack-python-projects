function updateClock() {
    let now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    // Angles for hands
    let secondDeg = (seconds / 60) * 360;
    let minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    let hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

    document.getElementById("second").style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
    document.getElementById("minute").style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    document.getElementById("hour").style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
