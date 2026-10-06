import React, { createContext, useState, useContext } from 'react';

export const currencies = [
  { code: 'AED', symbol: 'AED', label: 'AED', name: 'AED', flag: 'AE', rate: 1 },
  { code: 'USD', symbol: '$', label: 'USD', name: 'USD', flag: 'US', rate: 0.2723 },
  { code: 'EUR', symbol: '€', label: 'EUR', name: 'EUR', flag: 'EU', rate: 0.2427 },
  { code: 'GBP', symbol: '£', label: 'GBP', name: 'GBP', flag: 'GB', rate: 0.2060 },
  { code: 'RUB', symbol: '₽', label: 'RUB', name: 'RUB', flag: 'RU', rate: 23.17 },
  { code: 'SAR', symbol: 'SAR', label: 'SAR', name: 'SAR', flag: 'SA', rate: 1.0211 },
  { code: 'INR', symbol: '₹', label: 'INR', name: 'INR', flag: 'IN', rate: 26.25 }
];

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(currencies[0]);

  const convertPrice = (priceInAED) => {
    return Math.round(priceInAED * currency.rate);
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, currencies, convertPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);
