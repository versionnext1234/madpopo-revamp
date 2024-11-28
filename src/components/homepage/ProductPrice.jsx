"use client";
import { useCurrency } from "@/context/CurrencyContext";

const ProductPrice = ({ price }) => {
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
    <p>
      Price: {currency.symbol} {convertPrice()} ({currency.currency})
    </p>
  );
};

export default ProductPrice;
