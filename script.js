function clickedButton(){
    let peso = document.getElementById("weight").value;
    let altura = document.getElementById("height").value;
    let imc = parseFloat(peso/(altura*altura)).toFixed(2);

    document.querySelector(".imcText").style.visibility = "visible";
    document.querySelector(".imcText").textContent = `O seu IMC é: ${imc}`;
    }