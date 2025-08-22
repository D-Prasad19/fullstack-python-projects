function showTime() {
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    let ampm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;

    // Add leading zeros
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    document.getElementById("Clock").innerText =
        `${ hrs }:${ mins }:${ secs } ${ ampm }`;
}
setInterval(showTime, 1000);
showTime();