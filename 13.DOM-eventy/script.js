
// // ---------------- Zadanie 1 ----------------------------------------------

// var btn1 = document.getElementById("test-event");
// btn1.addEventListener("click", function (event) {
//     console.log(event)
// })

// //Ruch myszką na ekranie
// window.addEventListener("mousemove", function (event) { console.log(event) });

// //Najechanie myszką na przycisk o id="test-event"
// btn1.addEventListener("mouseenter", function (event) { console.log(event) });

// //naciśnięcie klawisza na klawiaturze
// window.addEventListener("keydown", function (event) { console.log(event) });

// //scrollowanie strony w dół i w górę
// window.addEventListener("scroll", function (event) { console.log(event) });

// //zmianę tekstu w input id="input-test"
// document.getElementById("input-test").addEventListener("change", function (event) { console.log(event) })

// // ---------------------------- ZADANIE 2 -------------------------------------------------------------
// document.getElementById('ex2').addEventListener('click', (e) => {
//     const target = e.target;
//     const dataset = e.target.dataset;
//     const text = dataset.text;
//     const nextElement = target.nextElementSibling;
//     nextElement.innerText = text;
// });


// // ---------------------------------- ZADANIE 3 ------------------------------------------------------
// //Napisz funkcję która po najechaniu na czerwony kwadrat zmieniu jego kolor na niebieski. Następnie po zjechaniu myszki z obszaru kwadratu zmieni się z powrotem na czerwony.

// const ex3 = document.getElementById("ex3");

// ex3.addEventListener("mouseenter", (e) => {
//     const target = e.target;
//     target.style.backgroundColor = "blue";
// });

// ex3.addEventListener("mouseleave", (e) => {
//     const target = e.target;

//     target.style.backgroundColor = "red";
// });

// // ------------------------------ ZADANIE 4 -----------------------------------
// //Napisz funkcję walidacyjną dla input id="input-test". Funkcja ma za zadanie sprawdzać co jest wpisane w inputa. Jeśli user wpisze jakąś cyfrę pokaż mu komunikat błędu pod inputem informujący że nie może wpisywać cyfr.

// const input = document.querySelector('#input-test');
// const alert = document.createElement('div');
// alert.textContent = "You can't write a number";

// const validate = (e) => {
//     if (e.target.value.match(/\d/g)) {
//         input.parentElement.appendChild(alert);
//     } else {
//         alert.remove();
//     }
// };

// input.addEventListener('input', validate);


// // ----------------------------------- ZADANIE 5 ---------------------------------------------------
// // Napisz funkcję countera. Funkcja ma za zadanie wpisywać do spanu w divie id="ex5" numerka odpowiadającego ilości kliknięć w button id="ex5-button". Jeśli licznik dojdzie do 10 event powinien być usunięty.

// var counter = 0;
// const zadanie5Event = (e) => {
//     const target = e.target;

//     counter++;

//     if (counter >= 10) {
//         target.removeEventListener("click",zadanie5Event);
//     }

//     document.getElementById("ex5").innerText = counter;
// }

// document.getElementById("ex5-button").addEventListener("click",zadanie5Event);


// // ----------------------------------- ZADANIE 6 ----------------------------------------------

window.addEventListener("scroll", function () {
    if(window.scrollY > 200){
        document.body.style.backgroundColor = "red";
    }else {
        document.body.style.backgroundColor = "white";
    }
}) 


// ----------------------------------------- ZADANIE 7 -----------------------------------------

// Zadanie 777
function calculator() {
    const buttons = document.querySelectorAll(
      "#calculator > div:nth-child(4) > button"
    );
    const input = document.querySelector("#calculator > input:first-child");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        if (i + 1 === 10) {
          input.value += 0;
        } else {
          input.value += i + 1;
        }
      });
    }
    const specialButtons = document.querySelectorAll(
      "#calculator > div:nth-child(5) > button"
    );
  
    for (let i = 0; i < specialButtons.length; i++) {
      specialButtons[i].addEventListener("click", function () {
        if (specialButtons[i].textContent.includes("+")) {
          input.value += "+";
        } else if (specialButtons[i].textContent.includes("-")) {
          input.value += "-";
        } else if (specialButtons[i].textContent.includes("*")) {
          input.value += "*";
        } else {
          input.value += "/";
        }
      });
    }
    const regexp = /-?\d+[+-/*]{1}-?\d+/g;
    let result = 0;
    input.addEventListener("blur", function () {
      if (regexp.test(input.value)) {
        if (input.value.includes("+")) {
          result = split("+", input);
        } else if (input.value.includes("/")) {
          result = split("/", input);
        } else if (input.value.includes("*")) {
          result = split("*", input);
        } else if (input.value.includes("-")) {
          result = split("-", input);
        }
        input.value = result;
      } else {
        console.log("Invalid statement.");
      }
    });
  }
  
  function split(operator, input) {
    let splitInputValue = [];
    let count = 0;
    if (operator === "-") {
      count = 0;
      for (let i = 0; i < input.value.length; i++) {
        if (input.value.charAt(i) === "-") count++;
      }
  
      if (count > 1) {
        splitInputValue = input.value.split(operator).slice(count - 1);
      } else {
        splitInputValue = input.value.split(operator);
      }
    } else {
      splitInputValue = input.value.split(operator);
    }
    let result = 0;
    if (input.value.includes("+")) {
      result = Number(splitInputValue[0]) + Number(splitInputValue[1]);
    } else if (input.value.includes("/")) {
      if (splitInputValue[1] === 0) {
        console.log("You can not divide by zero.");
        return;
      }
      result = splitInputValue[0] / splitInputValue[1];
    } else if (input.value.includes("*")) {
      result = splitInputValue[0] * splitInputValue[1];
    } else if (input.value.includes("-")) {
      if (count === 2) {
        splitInputValue[0] = -Math.abs(splitInputValue[0]);
      }
      result = splitInputValue[0] - splitInputValue[1];
    }
    return result;
  }
  calculator();
  