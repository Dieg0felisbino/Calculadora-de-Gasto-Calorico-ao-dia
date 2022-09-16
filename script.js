let objetivo
function perca(){
    objetivo = `Seu obejetivo principal é perder peso, ou seja, consuma uma quantidade menor que seu gasto carlórico diário`
}
function ganho(){
    objetivo = "Seu objetivo principal é ganhar peso, ou seja, consuma uma quantida maior que seu gasto calórico diário"
}

let sexo
function checkboxHomem(){
    console.log("você clicou em Homem!")
    sexo = "Homem"
    console.log(sexo)
}
function checkboxMulher(){
    console.log("Você clicou em Mulher!")
    sexo = "Mulher"
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
    if (objetivo === "Perca de peso"){
        console.log("teste perca de peso")
    } else {
        console.log("erro no perca de peso")
    }

    // Função que irá calcular o gasto calórico diário
    let tmb
    let txtres = document.getElementById("resultado")
    if (sexo === "Homem") {
        let tmbPeso = (13.8*numpeso)
        let tmbAltura = (5*numaltura)
        let tmbIdade = (6.8*numidade)
        tmb = (66+tmbPeso+tmbAltura-tmbIdade)
        console.log(tmb)
            /*if (objetivo === "Perca de peso"){
                txtres.innerHTML = `Você é um Homem de ${numidade} anos, hoje está com um peso de ${numpeso}Kg e sua altura é de ${numaltura}cm.<br><strong>SEU GASTO CALÓRICO DIÁRIO É DE ${tmb}.</strong><br>Para cumprir seu objetivo de ganhar peso você deve consumir diariamente mais que ${tmb} calorias.`}*/
            
    } else { if (sexo === "Mulher"){
        let tmbPeso = (9.6*numpeso)
        let tmbAltura = (1.8*numaltura)
        let tmbIdade = (4.7*numidade)
        tmb = (655+tmbPeso+tmbAltura-tmbIdade)
        console.log(tmb)
        /*txtres.innerHTML = `Você é uma Mulher de ${numidade} anos, hoje está com um peso de ${numpeso}Kg e sua altura é de ${numaltura}cm.<br><strong>SEU GASTO CALÓRICO DIÁRIO É DE ${tmb}.</strong>`*/
        }

        
    }
    txtres.innerHTML = `Você é um(a) ${sexo} de ${numidade} anos, hoje você está com um peso de ${numpeso}Kg e sua altura é de ${numaltura}cm.<br><strong>SEU GASTO CALÓRICO DIÁRIO É DE ${tmb}<br></strong>${objetivo}.`
}