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