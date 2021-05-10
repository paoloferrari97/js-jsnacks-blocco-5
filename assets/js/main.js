//Snack 1:
//Crea un array di 10 oggetti che rappresentano una zucchina,
//indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

var zucchine = [
    {
        varieta: "Zucchino romanesco",
        peso: 12,
        lunghezza: 20
    },
    {
        varieta: "Zucchino nero di Milano",
        peso: 8,
        lunghezza: 36
    },
    {
        varieta: "Zucchino romanesco",
        peso: 1.5,
        lunghezza: 9
    },
    {
        varieta: "Zucchino romanesco",
        peso: 6,
        lunghezza: 10
    },
    {
        varieta: "Zucchino romanesco",
        peso: 15,
        lunghezza: 21
    },
    {
        varieta: "Zucchino romanesco",
        peso: 16,
        lunghezza: 41
    },
    {
        varieta: "Zucchino romanesco",
        peso: 2,
        lunghezza: 10
    },
    {
        varieta: "Zucchino romanesco",
        peso: 24,
        lunghezza: 37
    },
    {
        varieta: "Zucchino romanesco",
        peso: 13,
        lunghezza: 24
    },
    {
        varieta: "Zucchino romanesco",
        peso: 22.5,
        lunghezza: 28
    }
];

var pesoTot = 0;
for (var i = 0; i < zucchine.length; i++){
    pesoTot += zucchine[i].peso;
}

console.log(pesoTot);



//Snack 2:
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var minQuindici = [];
var magQuindici = [];

for (var i = 0; i < zucchine.length; i++){
    if (zucchine[i].lunghezza < 15) {
        minQuindici.push(zucchine[i]);
    } else {
        magQuindici.push(zucchine[i]);
    }
}

var pesoMinQuin = 0;
for (var i = 0; i < minQuindici.length; i++){
    pesoMinQuin += minQuindici[i].peso;
}

var pesoMagQuin = 0;
for (var i = 0; i < magQuindici.length; i++){
    pesoMagQuin += magQuindici[i].peso;
}

console.log(pesoMinQuin, pesoMagQuin);



//Snack 3:
//Scrivi una funzione che accetti una stringa come argomento
//e la ritorni girata(es.Ciao -> oaiC)

function giraParola(parola) {
    return parola.split("").reverse().join("");
}

var parolaInserita = prompt("Inserisci una parola!").toLowerCase();

console.log(giraParola(parolaInserita));



//Snack 4:
//Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi)
//prendendo alternativamente gli elementi da uno e dall’altro
//es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var arrayUno = ["a", "b", "c", "d", "e"];
var arrayDue = [1, 2, 3, 4, 5];
var arrayComune = [];

for (var i = 0; i < arrayUno.length; i++){ //arrayUno.length = arrayDue.length
    arrayComune.push(arrayUno[i]);
    arrayComune.push(arrayDue[i]);
}

console.log(arrayComune);



//Snack 5:
//Scrivi una funzione che accetti tre argomenti:
//un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo 
//quanto il numero di elementi dell’array).
//La funzione ritornerà un nuovo array con i valori che hanno 
//la posizione compresa tra “a” e “b”

function snackCinque(array, numeroUno, numeroDue) {//numeroUno < numeroDue e numeroDue <= array.length
    var nuovoArray = [];
    for (var i = numeroUno; i <= numeroDue; i++){
        nuovoArray.push(array[i]);
    }
    return nuovoArray;
}

var lista = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(snackCinque(lista, 6, 18)); //darà array con gli elementi di lista da posizione 6 a 18