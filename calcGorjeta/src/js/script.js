function calculaGorgeta(event) {
    event.preventDefault();

    let valor = document.getElementById('vlConta').value;
    let qualidadeAtendimento = document.getElementById('qltAtendimento').value;
    let numPessoas = document.getElementById('qtPessoas').value;

    if(valor == '' | qualidadeAtendimento == 0) {
        alert("Por favor, informar os valores.")
        return;
    }
    
    if(numPessoas == '' | numPessoas <= 1) {
        numPessoas = 1;
        document.getElementById('porPessoa').style.display = "none"
    } else {
        document.getElementById('porPessoa').style.display = "block"
    }

    let total = (valor * qualidadeAtendimento) / numPessoas;
    total = total.toFixed(2);
    document.getElementById('valorGorg').innerHTML = total;
    document.getElementById('totalGorg').style.display = "block";
}

document.getElementById("totalGorg").style.display = "none";
document.getElementById("porPessoa").style.display = "none";

document.getElementById("topoForm").addEventListener('submit', calculaGorgeta);