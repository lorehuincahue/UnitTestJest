
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

let oneEuroIs={
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}


let fromDollarToYen=(Dolar) =>{
    return Dolar*oneEuroIs.JPY/oneEuroIs.USD
}

let fromYenToPound=(Yen) =>{
    return Yen*oneEuroIs.GBP/oneEuroIs.JPY
}

console.log (fromDollarToYen(1,oneEuroIs.JPY))
console.log (fromEuroToDollar(1,oneEuroIs.USD))
console.log (fromYenToPound(1,oneEuroIs.GBP))

module.exports={fromEuroToDollar};