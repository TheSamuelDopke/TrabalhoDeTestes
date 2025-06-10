const resultadosDiv = document.getElementById("testOutput");

function testar(nomeDoTeste, funcaoDeTeste) {
    
    const p = document.createElement('p')
    try {
        funcaoDeTeste();
        p.textContent = `✅ ${nomeDoTeste}`
        p.style.color = "#28a745";

    } catch (erro) {
        p.textContent = `❌ ${nomeDoTeste} - ${erro.message}`;
        p.style.color = "#dc3545";
    }
    if(resultadosDiv){
        resultadosDiv.appendChild(p) 
    }else {
        console.error("Elemento com ID 'testOutput' não encontrado!");
    }

}

document.querySelector("[componentTest]").addEventListener("click", () => {
    if(resultadosDiv){
        resultadosDiv.textContent = "";
    }else{
        console.error("Elemento com ID 'testOutput' não encontrado!");
        return; // Sai se o elemento não for encontrado
    }

    if (typeof runComponentTests === "function") {
        runComponentTests();
    } else {
        resultadosDiv.textContent = "❌ Função runComponentTests() não encontrada!";
    }
});

document.querySelector("[unitTest]").addEventListener("click", () => {
    document.getElementById("testOutput").textContent = "";
    if (typeof runUnitTests === "function") {
        runUnitTests();
    } else {
        resultadosDiv.textContent = "❌ Função runUnitTests() não encontrada!";
    }
});