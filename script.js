function mostrarAlerta(elemento_a) {
    //elemento_a = <a href="#" onclick="mostrarAlerta(this)">Burbank</a>

    var ciudad = elemento_a.innerText;

    alert("Cargando informe metereológico" + ciudad);
}

function quitarCookies() {
    var cookie = document.querySelector('.cookie');
    cookie.remove();
}

function cambioTemperatura(elemento_select)
{   
    console.log(elemento_select.value)
    
    if(elemento_select.value == "°F"){
    var tempMax_span = document.querySelector("#primero");
    tempMax_span.innerText = "75";

    var tempMax_span = document.querySelector("#segundo");
    tempMax_span.innerText = "65";

    var tempMax_span = document.querySelector("#tercero");
    tempMax_span.innerText = "80";

    var tempMax_span = document.querySelector("#cuarto");
    tempMax_span.innerText = "66";

    var tempMax_span = document.querySelector("#quinto");
    tempMax_span.innerText = "69";

    var tempMax_span = document.querySelector("#sexto");
    tempMax_span.innerText = "61";

    var tempMax_span = document.querySelector("#setimo");
    tempMax_span.innerText = "78";

    var tempMax_span = document.querySelector("#octavo");
    tempMax_span.innerText = "70";
}
else {
    var tempMax_span= document.querySelector("#primero");
    tempMax_span.innerText = "24";

    var tempMax_span = document.querySelector("#segundo");
    tempMax_span.innerText = "18";

    var tempMax_span = document.querySelector("#tercero");
    tempMax_span.innerText = "27";

    var tempMax_span = document.querySelector("#cuarto");
    tempMax_span.innerText = "19";

    var tempMax_span = document.querySelector("#quinto");
    tempMax_span.innerText = "21";

    var tempMax_span = document.querySelector("#sexto");
    tempMax_span.innerText = "16";

    var tempMax_span = document.querySelector("#setimo");
    tempMax_span.innerText = "26";

    var tempMax_span = document.querySelector("#octavo");
    tempMax_span.innerText = "21";
}
}

/*function difTemp(event){
    let tipoTemp = event.target.value;
    if(tipoTemp === "Celsius"){
        let valorTemp = document.querySelectorAll('.temp'); // [24, 18, 27, 19, 21, 16]
        let convertir;
        for(let i=0; i< valorTemp.lenght; i++){
            convertir = (valorTemp[i].innerHTML - 32) * 5/9;
            valorTemp[i].innerHTML = Math.round(convertir);
        }
        console.log("Celsius");
    } else{
        let valorTemp = document.querySelectorAll('.temp'); // [24, 18, 27, 19, 21, 16]
        let convertir;
        for(let i=0; i< valorTemp.lenght; i++){
            convertir = (valorTemp[i].innerHTML * 9/5) + 32;
            valorTemp[i].innerHTML = Math.round(convertir);
        }
        console.log("Fahrenheit");
    }
} */

/*
let selectorTemp = document.querySelector('.selector');
selectorTemp.addeventListener('change', difTemp);
*/