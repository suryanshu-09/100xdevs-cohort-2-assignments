setInterval(() => {
    let time = new Date();
    console.log(" - " + time.toLocaleTimeString("en-GB") + "\n" + " - " + time.toLocaleTimeString("en-US") + "\n");
}, 1000);