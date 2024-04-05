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

//Validamos la expresion regular
function validateExpression(code){
    let regExp = /\b\w+\b|\w+(?=\w)/g;
    let splitText = splitString(code, "\n");
    let cont = 0;
    splitText.forEach(linea => {
        let words = linea.match(regExp);
        cont++;
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
        words.length>1 ? console.log('Están ubicadas en la linea #"' + cont) 
        : console.log('Está ubicada en la linea #"' + cont);
    });
}
  
function validateCode(){
    var code = document.getElementById("code-box").value;
    validateExpression(code);
}