import {useRef, useState} from 'react';

enum Operator {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

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
    if (number === '0') return setPrevNumber('0');

    setNumber('0');
  };

  const toggleSign = () => {
    if (number.startsWith('-')) return setNumber(number.slice(1));

    return setNumber('-' + number);
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }

    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;

      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        break;
      default:
        throw new Error('Operation not implemented');
    }

    setPrevNumber('0');
  };
  return {
    // Properties
    number,
    prevNumber,
    //Methods
    buildNumber,
    deleteNumber,
    cleanNumber,
    toggleSign,
    divideOperation,
    subtractOperation,
    addOperation,
    multiplyOperation,
    calculateResult,
  };
};
