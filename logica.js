//Creamos los diccionarios
const conditionals = {
    "si":"if",
    "sino":"elif",
    "contrario":"else"
}


const operators = {
    "craftear":"sum",
    "desgastar":"substraction",
    "encantar":"multiplication",
    "desencantar":"division",
    "residuo":"module"
}

const variableType = {
    "bloque":"integer",
    "hiloRedstone":"string",
    "pasoHelado":"float",
    "booleanman":"boolean"
}

const logicOperators = {
    "interruptor":"And",
    "puerta":"or",
    "cierre":"not"
}

const controlStructures = {
    "minarPara":"for",
    "mientrasNoDiamante":"while",
    "picoRoto":"break",
    "seguirPicando":"continue"
}

//funcion para separar lineas de codigo
function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);
  
    console.log("El codigo original es: ", stringToSplit);
    console.log("El separador es: ", separator);
    console.log(
      "El array tiene: ",
      arrayOfStrings.length,
      "elementos:",
      arrayOfStrings.join(" / "),
    );
    return arrayOfStrings
}

//Creamos la expresion regular
function validateExpression(code){
    let regExp = /\b\w+\b/;
    let splitText = splitString(code, "\n");
    let cont = 0;
    splitText.forEach(linea => {
        let words = linea.match(regExp);
        cont ++;
        if (words){
            words.forEach(word => {
                if (conditionals[word]) {
                    console.log('La palabra "' + word + '" es un condicional.');
                } else if (variableType[word]) {
                    console.log('La palabra "' + word + '" es un tipo de variable.');
                } else if (operators[word]) {
                    console.log('La palabra "' + word + '" es un operador.');
                } else if (logicOperators[word]) {
                    console.log('La palabra "' + word + '" es un operador lógico.');
                } else if (controlStructures[word]) {
                    console.log('La palabra "' + word + '" es una estructura de control.');
                } else{
                    console.log('La palabra "' + word + '" no se reconoce.');
                }

            });
        }
        console.log('Está ubicada en la linea #"' + cont);
    });

}
    
//var lines = text.split('\n');



let text = "bloque caja1\n hiloRedstone caja2\nminarPara caja1<8";
validateExpression(text);

