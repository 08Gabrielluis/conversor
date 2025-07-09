const nbutton = document.querySelector(".button")
const nseletor2 = document.querySelector(".seletor2")

nbutton.addEventListener("click", nconvertervalor)

function nconvertervalor() {
    const ninput = document.querySelector(".input-valor").value
    const nmoedavalor1 = document.querySelector(".moeda-valor1")
    const nmoedavalor2 = document.querySelector(".moeda-valor2")
    const ndolar = 5.2
    const neuro = 6.2

    if (nseletor2.value == "dolar") {
        nmoedavalor2.innerHTML = new Intl.NumberFormat("in-US", {
            style: "currency",
            currency: "USD"
        }).format(ninput / ndolar)

    }

    if (nseletor2.value == "euro") {
        nmoedavalor2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(ninput / neuro)
    }

    nmoedavalor1.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(ninput)

}

nseletor2.addEventListener("change", trocalogo)

function trocalogo() {
    const tipomoeda2 = document.querySelector(".tipo-moeda2")
    const logodolar = document.querySelector(".logo-dolar")

    if (nseletor2.value == "dolar") {
        tipomoeda2.innerHTML = "Dólar"
        logodolar.src = './img/estados-unidos (1) 1.png'
    }

    if (nseletor2.value == "euro") {
        tipomoeda2.innerHTML = "Euro"
        logodolar.src = './img/euro.png'
    }

    nconvertervalor()

}

