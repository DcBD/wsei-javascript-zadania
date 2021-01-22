const zadanie1 = () => console.log("Udało się!");

const zadanie2 = (param) => console.log(param);

const zadanie3 = (arrayParam) => Array.isArray(arrayParam) ? arrayParam : null;

const zadanie4 = (paramString) => {
    var counter = 0;
    var interval = setInterval(() => { 
        
        if(counter >= 5){
            console.log("Koniec");
            clearInterval(interval);
            return;
        }

        console.log(paramString);
        counter++;

    }, 3000);
}

zadanie1();
zadanie2();
zadanie3();
zadanie4();