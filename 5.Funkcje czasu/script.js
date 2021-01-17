

var counter = 0;
const max = 15;
const timeout = 3000;


const interval = setInterval(() => {
    counter++;
    console.log(`Cześć po raz ${counter}`);

    if(counter >= max) clearInterval(interval);
}, timeout)



// ------------------------

const tablica = ["a","b","c"];
var wyswietlaj = null;
var wyswietlajCounter = 0;

setTimeout(() => {
    console.log(tablica);

    wyswietlaj = setInterval(() => {
        if(wyswietlajCounter <= tablica.length - 1){
            console.log(tablica[wyswietlajCounter]);
        }else{
            clearInterval(wyswietlaj);
        }
        wyswietlajCounter++;
    }, timeout)

}, timeout)