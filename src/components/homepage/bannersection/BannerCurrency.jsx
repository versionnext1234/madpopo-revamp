"use client";
import React from "react";
import { useCurrency } from "@/context/CurrencyContext";

const BannerCurrency = ({ price }) => {
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
    <h2>
      {currency.symbol}{convertPrice()}/mo <span>+3 months free</span>
    </h2>
  );
};

export default BannerCurrency;
