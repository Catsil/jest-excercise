
// one euro is:

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = function (valueInDollar){

    return Math.floor((valueInDollar * oneEuroIs.USD)*oneEuroIs.JPY) 
    
}
const fromEuroToDollar = function(valueInEuro){
    
    return  valueInEuro * oneEuroIs.USD;
  
}


const fromYenToPound = function (valueInYen){
   return (valueInYen*oneEuroIs.GBP)/oneEuroIs.JPY
   
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };