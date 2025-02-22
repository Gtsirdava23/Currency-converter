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
