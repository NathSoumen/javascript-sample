let iAmGlobal = "BIG wold"
if(true) {
    let iAmLocal = "Small world";
    iAmGlobal = "fool world"
    console.log(iAmGlobal);
    console.log(iAmLocal);
}
console.log(iAmGlobal);
//console.log(iAmLocal);