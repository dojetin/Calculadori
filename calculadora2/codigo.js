var num1 = 'e';
var num2 = 0;
var num3 = 0;
var opera = 0;

function igualdad() {
    switch (opera) {
        case 1:
            document.getElementById("resultado").value = parseFloat(num1) + parseFloat(num2);
            num1 = document.getElementById("resultado").value;
            num2 = 0;
            num3 = 0;
            console.log("Numero 1 igual a " + num1)
            console.log("Numero 2 igual a " + num2)
            break;

        case 2:
            document.getElementById("resultado").value = parseFloat(num1) - parseFloat(num2);
            num1 = document.getElementById("resultado").value;
            num2 = 0;
            num3 = 0;
            console.log("Numero 1 igual a " + num1)
            console.log("Numero 2 igual a " + num2)
            break;

        case 3:
            document.getElementById("resultado").value = parseFloat(num1) * parseFloat(num2);
            num1 = document.getElementById("resultado").value;
            num2 = 0;
            num3 = 0;
            console.log("Numero 1 igual a " + num1)
            console.log("Numero 2 igual a " + num2)
            break;

        case 4:
            document.getElementById("resultado").value = parseFloat(num1) / parseFloat(num2);
            num1 = document.getElementById("resultado").value;
            num2 = 0;
            num3 = 0;
            console.log("Numero 1 igual a " + num1)
            console.log("Numero 2 igual a " + num2)
            break;
        default:
            break;
    }
}

function borrar() {
    document.getElementById("resultado").value = ' ';
    opera = 0;
    var num1 = 'e';
}

function sumita() {
    if (num1 != 'e') {
        opera = 1
        console.log(opera)
    }
}

function restita() {
    if (num1 != 'e') {
        opera = 2
        console.log(opera)
    }
}

function mupli() {
    if (num1 != 'e') {
        opera = 3
        console.log(opera)
    }
}

function divi() {
    if (num1 != 'e') {
        opera = 4
        console.log(opera)
    }
}

// function valor(numero) {
//     var states;
//     if (document.getElementById("resultado").value == ' ') {
//         document.getElementById("resultado").value = numero
//         num1 = document.getElementById("resultado").value
//     } else if (opera == 0) {
//         document.getElementById("resultado").value = document.getElementById("resultado").value + numero
//         num1 = document.getElementById("resultado").value
//     } else {
//         document.getElementById("resultado").value = ' ';
//         num2 = document.getElementById("resultado").value
//         document.getElementById("resultado").value = num2 + numero
//     }
// }

// function valor(numero) {
//     var states;
//     if (document.getElementById("resultado").value == ' ') {
//         document.getElementById("resultado").value = numero
//         num1 = document.getElementById("resultado").value
//         console.log("Numero 1 igual a " + num1)
//         console.log("Numero 2 igual a " + num2)
//         console.log("Numero 3 igual a " + num3)

//         console.log("Estoy en la uno")

//     } else if (opera == 0) {
//         document.getElementById("resultado").value = document.getElementById("resultado").value + numero
//         num1 = document.getElementById("resultado").value
//         console.log("Numero 1 igual a " + num1)
//         console.log("Numero 2 igual a " + num2)
//         console.log("Numero 3 igual a " + num3)

//         console.log("Estoy en la 2")
//     } else if (num2 == 0) {
//         document.getElementById("resultado").value = parseFloat(numero) + parseFloat(num2)
//         num2 = document.getElementById("resultado").value
//         num3 = num2
//         console.log("Numero 1 igual a " + num1)
//         console.log("Numero 2 igual a " + num2)
//         console.log("Numero 3 igual a " + num3)

//         console.log("Estoy en la 3")

//     } else {
//         num2 = document.getElementById("resultado").value
//         num3 = num2
//         document.getElementById("resultado").value = parseFloat(numero) + parseFloat(num2)
//         num3 = num2
//         console.log("Numero 1 igual a " + num1)
//         console.log("Numero 2 igual a " + num2)
//         console.log("Numero 3 igual a " + num3)

//         console.log("Estoy en la 4")

//     }
// }

function valor(numero) {
    var states;
    if (document.getElementById("resultado").value == ' ') {
        document.getElementById("resultado").value = numero
        num1 = document.getElementById("resultado").value
        console.log("Numero 1 igual a " + num1)
        console.log("Numero 2 igual a " + num2)
        console.log("Numero 3 igual a " + num3)

        console.log("Estoy en la uno")

    } else if (opera == 0) {
        document.getElementById("resultado").value = document.getElementById("resultado").value + numero
        num1 = document.getElementById("resultado").value
        console.log("Numero 1 igual a " + num1)
        console.log("Numero 2 igual a " + num2)
        console.log("Numero 3 igual a " + num3)

        console.log("Estoy en la 2")
    } else if (num2 == 0) {
        document.getElementById("resultado").value = numero
        num2 = document.getElementById("resultado").value
        console.log("Numero 1 igual a " + num1)
        console.log("Numero 2 igual a " + num2)
        console.log("Numero 3 igual a " + num3)

        console.log("Estoy en la 3")

    } else {
        num2 = num2 + numero
        document.getElementById("resultado").value = num2
        console.log("Numero 1 igual a " + num1)
        console.log("Numero 2 igual a " + num2)
        console.log("Numero 3 igual a " + num3)

        console.log("Estoy en la 4")

    }
}