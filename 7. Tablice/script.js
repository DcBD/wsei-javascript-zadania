// zad 1

const tab1 = ["a", "b", "c"];

console.log(tab1);

// zad 2


const tab2 = [1, 2, 3, 4, 5, "sześć", 7, 8, 9, 10];

console.log("Pierwszy i drugi element", tab2[0], tab2[1]);
console.log("Ostatni element", tab2[tab2.length - 1]);
console.log("Wszystkie elementy: ");
tab2.filter((val) => console.log(val));
console.log("Co drugi element");
tab2.filter((val) => val % 2 ? console.log(val) : null);
console.log("Wszystkie stringi");
tab2.filter((val) => {
    if (typeof val === "string" || val instanceof String) {
        console.log(val);
    }
});

console.log("Wszystkie numbery");

tab2.filter((val) => {
    if (typeof val === "number" || val instanceof Number) {
        console.log(val);
    }
});


// zad 3
