/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    let p = new Promise((resolve, reject) => {
        resolve();
    });
    const time = new Date();
    let count = 0;
    while (new Date() - time < milliseconds) {
        count++;
    }
    return p;
}

module.exports = sleep;
