import React, { useState } from 'react'

const defaultCurrencies = ['RUB', 'USD', 'EUR', 'GBP'];

export const Block = ({ rates, value, currency, onChangeValue, onChangeCurrency }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const onSelect = (cur) => {
    setSelectedValue(cur)
    onChangeCurrency(cur);
  }

  return (
    <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? 'active' : ''}
          key={cur}
        >
          {cur}
        </li>
      ))}
      <li>
        <select
          value={selectedValue}
          onChange={e => onSelect(e.target.value)}
          className={`dropdown ${currency === selectedValue ? 'active' : ''}`}
        >
          <option selected disabled></option>
            {rates
              .filter(item => !defaultCurrencies.includes(item))
              .map((cur) => (
                <option
                  key={cur}>
                  {cur}
                </option>
            ))}
          </select>
      </li>

    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
  )
}
