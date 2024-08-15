import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(''); // Montant à convertir
  const [fromCurrency, setFromCurrency] = useState('EUR'); // Devise d'origine
  const [toCurrency, setToCurrency] = useState('USD'); // Devise cible
  const [conversionRate, setConversionRate] = useState(1); // Taux de conversion
  const [convertedAmount, setConvertedAmount] = useState(''); // Montant converti

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      axios
        .get(`https://v6.exchangerate-api.com/v6/8a60fc5b6004ba925927f67e/latest/${fromCurrency}`) 
        .then((response) => {
          const rate = response.data.conversion_rates[toCurrency]; // Récupère le taux de conversion
          setConversionRate(rate); // Définit le taux de conversion
          if (amount) {
            setConvertedAmount((amount * rate).toFixed(2)); // Calcule le montant converti
          }
        })
        .catch((error) => console.error('Error fetching exchange rates', error));
    }
  }, [fromCurrency, toCurrency, amount]);

  const handleAmountChange = (e) => setAmount(e.target.value); // Met à jour l'état du montant
  const handleFromCurrencyChange = (e) => setFromCurrency(e.target.value); // Met à jour l'état de la devise d'origine
  const handleToCurrencyChange = (e) => setToCurrency(e.target.value); // Met à jour l'état de la devise cible

  return (
    <div>
      <h2>Convertisseur de devises</h2>
      <div>
        <label>Montant :</label>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange} // Met à jour l'état du montant
          placeholder="Entrez le montant"
        />
      </div>
      <div>
        <label>Devise d'origine :</label>
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GNF">GNF</option>
          <option value="XOF">CFA</option>
        </select>
      </div>
      <div>
        <label>Devise cible :</label>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GNF">GNF</option>
          <option value="GNF">CFA</option>
        </select>
      </div>
      <div>
        <h3>Montant converti : {convertedAmount} {toCurrency}</h3> {/* Affiche le montant converti */}
      </div>
    </div>
  );
};

export default CurrencyConverter;