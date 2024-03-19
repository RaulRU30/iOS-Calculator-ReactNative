import {useState} from 'react';

export const useCalculator = () => {
  const [number, setNumber] = useState('0');

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;

    if (number === '0' && numberString !== '.') return setNumber(numberString);

    if (number === '-0') return setNumber('-' + numberString);

    if (number.includes('.') && numberString === '0')
      return setNumber(number + numberString);

    setNumber(number + numberString);
  };

  const deleteNumber = () => {
    if (number.length === 2 && number.startsWith('-') && !number.endsWith('0'))
      return setNumber('-0');

    if (number === '-0') return setNumber('0');

    if (number.length === 1) return setNumber('0');

    setNumber(number.slice(0, -1));
  };

  const cleanNumber = () => {
    setNumber('0');
  };

  const toggleSign = () => {
    if (number.startsWith('-')) return setNumber(number.slice(1));

    return setNumber('-' + number);
  };
  return {
    // Properties

    number,
    //Methods
    buildNumber,
    deleteNumber,
    cleanNumber,
    toggleSign,
  };
};
