import { useEffect, useRef, useState } from "react";
import { Block } from "./components/block";
import "./index.scss";

function App() {
  const [fromCurrency, setFromCurrency] = useState("RUB");
  const [toCurrency, setToCurrency] = useState("USD");
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/latest.js")
      .then((res) => res.json())
      .then((json) => {
        setRates({...json.rates, "RUB": 1});
      })
      .catch((err) => {
        console.warn(err);
        alert("Не удалось получить инфомацию");
      });
  }, []);

  const onChangeFrom = (value) => {
    const price = value / rates[fromCurrency];
    const result = price * rates[toCurrency];
    setFrom(value);
    setTo(result.toFixed(3));
  };

  const onChangeTo = (value) => {
    const price = value * rates[fromCurrency];
    const result = price / rates[toCurrency];
    setFrom(result.toFixed(3));
    setTo(value);
  };

  const onChangeFromCurrency = (cur) => {
    setFromCurrency(cur);
    const price = from / rates[cur];
    const result = price * rates[toCurrency];
    setTo(result.toFixed(3));
  };

  const onChangeToCurrency = (cur) => {
    setToCurrency(cur);
    const price = from / rates[fromCurrency];
    const result = price * rates[cur];
    setTo(result.toFixed(3));
  };

  return (
    <div className="App">
      <Block
        rates={Object.keys(rates)}
        value={from}
        currency={fromCurrency}
        onChangeCurrency={onChangeFromCurrency}
        onChangeValue={onChangeFrom}
      />
      <Block
        rates={Object.keys(rates)}
        value={to}
        currency={toCurrency}
        onChangeCurrency={onChangeToCurrency}
        onChangeValue={onChangeTo}
      />
    </div>
  );
}

export default App;