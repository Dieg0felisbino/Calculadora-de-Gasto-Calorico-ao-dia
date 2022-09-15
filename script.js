let sexo
function checkboxHomem(){
    console.log("você clicou em Homem!")
    sexo = "masculino"
    console.log(sexo)
}
function checkboxMulher(){
    console.log("Você clicou em Mulher!")
    sexo = "feminino"
    console.log(sexo)
}



function calcular(){
    //variavel que recebe valor do peso de input
    let txtpeso = document.getElementById("peso")
    let numpeso = Number(txtpeso.value)
    console.log(numpeso)
    //variavel que recebe o valor da altura de input
    let txtaltura = document.getElementById("altura")
    let numaltura = Number(txtaltura.value)
    console.log(numaltura)
    //variavel que recebe o valor da idade de input
    let txtidade = document.getElementById("idade")
    let numidade = Number(txtidade.value)
    console.log(numidade)

    // Função que irá calcular o gasto calórico diário
    let tmb
    if (sexo === "masculino") {
        let tmbPeso = (13.8*numpeso)
        let tmbAltura = (5*numaltura)
        let tmbIdade = (6.8*numidade)
        tmb = (66+tmbPeso+tmbAltura-tmbIdade)
        console.log(tmb)        
    } else {
        let tmbPeso = (9.6*numpeso)
        let tmbAltura = (1.8*numaltura)
        let tmbIdade = (4.7*numidade)
        tmb = (655+tmbPeso+tmbAltura-tmbIdade)
        console.log(tmb)
    }
}