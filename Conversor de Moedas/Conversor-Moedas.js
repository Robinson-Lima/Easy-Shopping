


const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {


    const inputCurrencyValue = document.querySelector(".input-currency").value // valor digitado no input
    const currencyValuetoconvert = document.querySelector(".currency-value-to-convert") // valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // valor convertido,euro, dolar

    // base de dados da moeda
    const dolarToday = 5.31
    const euroToday = 6.25
    const libraToday = 7.19
    const BitcoinToday = 622.339

    // condicao para mudar 
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday
        )
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }
if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "XBT"
        }).format(inputCurrencyValue / BitcoinToday)
    }


    currencyValuetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

   
    }
    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyimg = document.querySelector(".currency-img")


        if (currencySelect.value == "dolar") {
            currencyName.innerHTML = "Dolar Americano"
            currencyimg.src = "./img-conversor/dolar.png"
        }

        if (currencySelect.value == "euro") {
            currencyName.innerHTML = "Euro"
            currencyimg.src = "./img-conversor/euro.png"
        }

        
        if (currencySelect.value == "Libra") {
            currencyName.innerHTML = "Libra"
            currencyimg.src = "./img-conversor/libra.png"
        }

          if (currencySelect.value == "Bitcoin") {
            currencyName.innerHTML = "Bitcoin"
            currencyimg.src = "./img-conversor/Bitcoin.png"
        }
        convertValues()
    }


    currencySelect.addEventListener("change", changeCurrency)

    convertButton.addEventListener("click", convertValues)
