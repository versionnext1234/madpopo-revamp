"use client";
import { useCurrency } from "@/context/CurrencyContext";
import styles from "../../header/header.module.scss";
const countries = [
  { name: "India", currency: "INR", symbol: "₹", flag: "🇮🇳" },
  { name: "UK", currency: "Euro", symbol: "€", flag: "🇬🇧" },
  { name: "USA", currency: "Dollar", symbol: "$", flag: "🇺🇸" },
];

const CountrySelector = () => {
  const { currency, setCurrency } = useCurrency();

  const handleCountryChange = (e) => {
    const selectedCountry = countries.find(
      (country) => country.name === e.target.value
    );
    setCurrency(selectedCountry);
  };

  return (
    <select
      id="country-select"
      className={styles.formControl}
      value={currency.country}
      onChange={handleCountryChange}
    >
      {countries.map((country) => (
        <option key={country.name} value={country.name}>
          {country.flag} {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;
