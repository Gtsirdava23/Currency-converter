const exchangeRates = {
    USD: 1.0,
    EUR: 0.92,
    JPY: 150.78,
    GBP: 0.79,
    AUD: 1.52,
    CAD: 1.35,
    CHF: 0.88,
    CNY: 7.19,
    HKD: 7.83,
    NZD: 1.61,
    SEK: 10.42,
    KRW: 1332.55,
    SGD: 1.35,
    NOK: 10.62,
    UAH: 39.20
};

const translations = {
    en: { title: "Currency Converter 💶💲", resultLabel: "Result:" },
    de: { title: "Währungsrechner 💶💲", resultLabel: "Ergebnis:" },
    uk: { title: "Конвертер Валют 💶💲", resultLabel: "Результат:" },
    es: { title: "Convertidor de Moneda 💶💲", resultLabel: "Resultado:" },
    ja: { title: "通貨コンバーター 💶💲", resultLabel: "結果:" },
    zh: { title: "货币转换器 💶💲", resultLabel: "结果:" }
};

document.getElementById("languageSelect").addEventListener("change", function () {
    const selectedLanguage = this.value;
    document.getElementById("title").textContent = translations[selectedLanguage].title;
    document.getElementById("resultLabel").textContent = translations[selectedLanguage].resultLabel;
});

function validateCurrency(input) {
    const value = input.value.toUpperCase().trim();
    if (!(value in exchangeRates)) {
        input.value = "";
        alert("⚠️ Invalid currency code! Use one of: " + Object.keys(exchangeRates).join(", "));
    }
}

document.getElementById("fromCurrency").addEventListener("blur", function () {
    validateCurrency(this);
});

document.getElementById("toCurrency").addEventListener("blur", function () {
    validateCurrency(this);
});

document.getElementById("convertBtn").addEventListener("click", function () {
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("fromCurrency").value.toUpperCase().trim();
    const to = document.getElementById("toCurrency").value.toUpperCase().trim();

    if (!(from in exchangeRates) || !(to in exchangeRates)) {
        alert("⚠️ Please enter a valid currency code.");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").textContent = "❌ Enter a correct amount!";
        return;
    }

    const convertedAmount = (amount / exchangeRates[from]) * exchangeRates[to];
    document.getElementById("result").textContent = `✅ ${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
});
