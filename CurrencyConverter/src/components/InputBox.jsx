import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "inr",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  const id = useId();
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex gap-y-4">
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block" htmlFor={id}>
          {label}
        </label>
        <input
          id={id}
          type="number"
          value={amount}
          placeholder="Enter Amount"
          disabled={amountDisabled}
          onChange={(e) => onAmountChange(Number(e.target.value))}
          className="bg-transparent outline-none w-full p-y-1.5"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="bg-gray-100 rounded-lg outline-none cursor-pointer p-1"
          value={selectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
