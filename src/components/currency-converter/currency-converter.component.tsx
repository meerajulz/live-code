import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState();
  const [currencies, setCurrencies] = useState<string[]>([]);

  const apiKey = 'b12faaeac70cfcd96cdebf08';
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCurrencies(Object.keys(data.conversion_rates));
        setExchangeRate(data.conversion_rates[toCurrency || 'USD']);
      })
      .catch((err) => console.error(err));
  }, [fromCurrency, toCurrency]);

  return (
    <div>
      <h1>Currency Converter</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <h2>
        {amount ?? 0} {fromCurrency} is {(amount ?? 0) * (exchangeRate ?? 1)}{' '}
        {toCurrency}
      </h2>
    </div>
  );
};

export default CurrencyConverter;
