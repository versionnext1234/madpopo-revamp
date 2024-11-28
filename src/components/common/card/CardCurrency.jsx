"use client";
import React from "react";
import { useCurrency } from "@/context/CurrencyContext";

const CardCurrency = ({ price }) => {
  const { currency } = useCurrency();
  const convertPrice = () => {
    const conversionRates = {
      INR: 1,
      Euro: 0.012,
      Dollar: 0.014,
    };

    return (price * conversionRates[currency.currency]).toFixed(2);
  };
  return (
    <h6>
      {currency.symbol}
      {convertPrice()}/mo
    </h6>
  );
};

export default CardCurrency;
