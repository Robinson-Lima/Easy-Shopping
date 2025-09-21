function GenerateNumber() {
    const quantidade = parseInt(document.querySelector('.input-quantidade').value); 
    const min = Math.ceil(document.querySelector('.input-min').value);
    const max = Math.floor(document.querySelector('.input-max').value);

    let numeros = [];

    if (quantidade > (max - min + 1)) {
        alert("⚠️ A quantidade de números não pode ser maior que o intervalo definido!");
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
        } while (numeros.includes(numeroAleatorio));
        numeros.push(numeroAleatorio);
    }

    // Data e hora
    const agora = new Date();
    const dataHora = agora.toLocaleString("pt-BR");

    // Esconde os inputs
    document.getElementById("inputs").style.display = "none";

    // Mostra resultado
    document.getElementById("resultado").style.display = "block";
    document.getElementById("resultado").innerHTML = `
        <strong>Num sorteados:</strong><br>
        <div class="numeros-box">
${numeros.map(num => `<span class="numero">${num}</span>`).join(" - ")}
        </div>
        <br>
        <small>Sorteado em: ${dataHora}</small><br><br>
        <button class="btn-novo" onclick="novoSorteio()">Novo sorteio</button>
        
    `;
}

function novoSorteio() {
    document.getElementById("resultado").style.display = "none";
    document.getElementById("inputs").style.display = "block";
}
