const nbutton = document.querySelector(".button")
const nseletor2 = document.querySelector(".seletor2")
const nseletor1 = document.querySelector(".seletor1")

nbutton.addEventListener("click", nconvertervalor)

function nconvertervalor() {
    const ninput = document.querySelector(".input-valor").value
    const nmoedavalor1 = document.querySelector(".moeda-valor1")
    const nmoedavalor2 = document.querySelector(".moeda-valor2")
    const ndolarR = 5.2
    const neuroR = 6.4
    const nbitcoinR = 599569.00
    const nrealD = 0.19
    const neuroD = 1.16
    const nbitcoinD = 113072.90
    const ndolarE = 0.85
    const nrealE = 0.15
    const nbitcoinE = 97281.27
    const neuroB = 0.000011
    const ndolarB = 0.00000898
    const nrealB = 0.0000016


    if (nseletor1.value == "real") {

        if (nseletor2.value == "dolar") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("in-US", {
                style: "currency",
                currency: "USD"
            }).format(ninput / ndolarR)

        }

        if (nseletor2.value == "euro") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(ninput / neuroR)
        }

        if (nseletor2.value == "bitcoin") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'XBT'
            }).format(ninput / nbitcoinR)

        }

        nmoedavalor1.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(ninput)


    }

    if (nseletor1.value == "dolar") {

        nmoedavalor1.innerHTML = new Intl.NumberFormat("in-US", {
            style: "currency",
            currency: "USD"
        }).format(ninput)

        if (nseletor2.value == "euro") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(ninput / neuroD)
        }

        if (nseletor2.value == "bitcoin") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "XBT"
            }).format(ninput/nbitcoinD)
        }

        if (nseletor2.value == "real") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(ninput/nrealD)
        }


    }

    if (nseletor1.value == "euro") {

        nmoedavalor1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(ninput)

        if (nseletor2.value == "dolar") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("in-US", {
                style: "currency", 
                currency: "USD"
            }).format(ninput/ndolarE)
        }

        if (nseletor2.value == "bitcoin") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "XBT"
            }).format(ninput/nbitcoinE)
        }

        if (nseletor2.value == "real") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(ninput/nrealE)
        }

    }

    if (nseletor1.value == "bitcoin") {
        
        nmoedavalor1.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
             currency: "XBT"
        }).format(ninput)

        if (nseletor2.value == "euro"){
            nmoedavalor2.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(ninput/neuroB)
        }

        if (nseletor2.value == "dolar") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("in-US", {
                style: "currency",
                currency: "USD"
            }).format(ninput/ndolarB)
        }

        if (nseletor2.value == "real") {
            nmoedavalor2.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(ninput/nrealB)
        }

    }

}




nseletor2.addEventListener("change", trocalogo)
nseletor1.addEventListener("change", trocalogo)

function trocalogo() {
    const tipomoeda2 = document.querySelector(".tipo-moeda2")
    const logodolar = document.querySelector(".logo-dolar")
    const logo1 = document.querySelector(".logo1")
    const tipomoeda1 = document.querySelector(".tipo-moeda1")

    if (nseletor2.value == "dolar") {
        tipomoeda2.innerHTML = "Dólar"
        logodolar.src = './img/estados-unidos (1) 1.png'
    }

    if (nseletor2.value == "euro") {
        tipomoeda2.innerHTML = "Euro"
        logodolar.src = './img/euro.png'
    }

    if (nseletor2.value == "bitcoin") {
        tipomoeda2.innerHTML = "Bitcoin"
        logodolar.src = './img/bitcoin 1.png'
    }

    if (nseletor2.value == "real") {
        tipomoeda2.innerHTML = "Real"
        logodolar.src = './img/brasil 2.png'
    }

    if (nseletor1.value == "real") {
        tipomoeda1.innerHTML = "Real"
        logo1.src = './img/brasil 2.png'
    }

    if (nseletor1.value == "dolar") {
        tipomoeda1.innerHTML = "Dolar"
        logo1.src = './img/estados-unidos (1) 1.png'
    }

    if (nseletor1.value == "euro") {
        tipomoeda1.innerHTML = "Euro"
        logo1.src = './img/euro.png'
    }

    if (nseletor1.value == "bitcoin") {
        tipomoeda1.innerHTML = "Bitcoin"
        logo1.src = './img/bitcoin 1.png'
    }

    nconvertervalor()

}

