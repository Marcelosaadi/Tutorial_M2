

    //velocidade ex1
    let vi = document.getElementById("VI");
    let botaoex1 = document.getElementById("botaoex1");
    let alturamax = document.getElementById("AMAX");
    let tempototal = document.getElementById("TEMP");
    let gravidade = 10;
    try {
        botaoex1.onclick = function(){
            let resultadoamax = parseFloat(((vi.value*vi.value) / (gravidade * gravidade)));
            alturamax.innerHTML = `${resultadoamax.toFixed(2)}`;
            let resultadotempo = parseFloat((vi.value) / (gravidade))
            tempototal.innerHTML = `${resultadotempo.toFixed(2)}`;
        }

    }
    catch(error) {
        console.log("")

    }


    //max min ex 2
    let xv = document.getElementById("xv")
    let xy = document.getElementById("yv")
    let a = document.getElementById("a")
    let b = document.getElementById("b")
    let c = document.getElementById("c")
    let botaoex2 = document.getElementById("botaoex2")
    try{
    botaoex2.onclick = function(){
   
    
        let resultadoxv = parseFloat(-(b.value/2*a.value));
        let resultadoyv = parseFloat(((b.value * b.value) - 4*a.value * c.value) * -1 /(4 * a.value));
        xv.innerHTML = `${resultadoxv.toFixed(2)}`;
        xy.innerHTML = `${resultadoyv.toFixed(2)}`;
    }

    }   
    catch(error){
        console.log("")
    }

    //temperatura ex3
    let resultado = document.getElementById("resultado");
    const temperatura = document.getElementById("tpr");
    let buttontemp1 = document.getElementById("buttoncels");
    let buttontemp2 = document.getElementById("buttonfaren");
    try{
        buttontemp1.onclick = function()
        {
            let convertosorcel = (parseFloat(temperatura.value) - 32) / (1.8);
            resultado.innerHTML = `${convertosorcel.toFixed(2)}`;
        }

        buttontemp2.onclick = function()
        {

        let convertosorfar = parseFloat(temperatura.value) * 1.8 + 32;
        resultado.innerHTML = `${convertosorfar.toFixed(2)}`;
        }
    }catch(error){
        console.log('');
    }


    

    //energia ex4
    const qkwh = document.getElementById("Qkwh");
    const vkwh = document.getElementById("Vkwh"); 
    let vtotal = document.getElementById("vtotal");
    let botaoteste = document.getElementById("botao");

    try{
    botaoteste.onclick = function(){
    if (parseFloat(qkwh.value) > 100 && parseFloat(qkwh.value) < 200){
        total = parseFloat((qkwh.value * vkwh.value) * 1.25);
    }

    else if (parseFloat(qkwh.value) >= 200){
        total = parseFloat((qkwh.value * vkwh.value) * 1.5);
    }

    else{
        total = parseFloat((Qkwh.value) * parseFloat(Vkwh.value));
    }
    vtotal.innerHTML = `${total.toFixed(2)}`;
    }

}

catch(error){
    console.log("")
}