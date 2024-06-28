function MyOwnSetTimeOut(){
    let p = new Promise((resolve, reject) => {
        setTimeout(resolve, 1000)
    })
    return p;
}
async function counter(){
    for(let i = 1; i < 1000000000000000; i++){
        await MyOwnSetTimeOut();
        console.log(i);
    }
}
counter();