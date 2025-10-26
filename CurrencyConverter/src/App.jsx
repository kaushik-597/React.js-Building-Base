import { use, useState } from "react";
import { InputBox } from "./components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState("");
  const [convertedCurrency, setConvertedCurrency] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    let convertedAmount = (amount * currencyInfo[to]).toFixed(2);
    setConvertedCurrency(convertedAmount);
  };
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedCurrency(amount);
    setAmount(convertedCurrency);
  };
  return (
    <div
      className="h-screen w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30 p-5 ">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectedCurrency={from}
              />
            </div>
            <div className="w-full h-0.5 relative">
              <button
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md text-white bg-blue-600 px-2 py-0.5"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="To"
                amount={convertedCurrency}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                amountDisabled
                selectedCurrency={to}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 rounded-lg text-white py-4 px-4"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
