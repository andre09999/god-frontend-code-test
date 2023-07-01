import React, { useState, useMemo,useCallback  } from 'react';
import data from '../../public/api/cars.json';
import MyContext from './MyContext';

export default function MyProvider({ children }: any): JSX.Element {
  const [dates, setDates] = useState(data);
  const [i, setI] = useState([0, 1, 2, 3]);
  const [scr, setScr] = useState(false);
  const tamanho = data.length;

  const previous = useCallback(() => {
    const aa: number[] = [];
    i.map((a) => {
      aa.push(a > 0 ? a - 1 : tamanho - 1);
    });
    setI(aa);
  }, [i, tamanho]);

  const fillt = useCallback((a: string) => {
    if (a === '') return setDates(data);
    const c = data.filter((b) => b.bodyType.includes(a));
    setDates(c);
  }, []);
  
  const position = useCallback((aa: number) => {
    setI([aa]);
  }, []);
  const next = useCallback(() => {
    setI(i.map((a) => (a >= tamanho - 1 ? 0 : a + 1)));
  }, [i, tamanho]);
  
  const contextValue = useMemo(() => ({
    dates,
    setDates,
    i,
    setI,
    scr,
    setScr,
    tamanho,
    previous,
    next,
    fillt,
    position,
  }), [dates, i, scr, tamanho, previous, next, fillt, position]);
  
  
  
  return (
    <MyContext.Provider value={contextValue}>
      <div>{children}</div>
    </MyContext.Provider>
  );
}
