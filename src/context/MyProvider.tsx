import React, { useState, useCallback } from 'react';
import data from '../../public/api/cars.json';
import MyContext from './MyContext';

export default function MyProvider({ children }: any): JSX.Element {
  const [dates, setDates] = useState(data);
  const [i, setI] = useState([0, 1, 2, 3]);
  const [scr, setScr] = useState(false);
  const tamanho = data.length;

  const previous = useCallback(() => {
    setI(i.map((a) => (a > 0 ? a - 1 : tamanho - 1)));
  }, [i, tamanho]);

  const filterCars = useCallback((filterString: string) => {
    if (!filterString) {
      setDates(data);
      return;
    }

    const filteredCars = data.filter((car) => car.bodyType.includes(filterString));
    setDates(filteredCars);
  }, []);

  const position = useCallback((index: number) => {
    setI([index]);
  }, []);

  const next = useCallback(() => {
    setI(i.map((a) => (a >= tamanho - 1 ? 0 : a + 1)));
  }, [i, tamanho]);

  const contextValue = {
    dates,
    setDates,
    i,
    setI,
    scr,
    setScr,
    tamanho,
    previous,
    next,
    filterCars,
    position
  };

  return (
    <MyContext.Provider value={contextValue}>
      <div>{children}</div>
    </MyContext.Provider>
  );
}
