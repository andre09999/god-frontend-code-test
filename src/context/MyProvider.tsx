import React, { useState,useMemo } from 'react';
import data from  '../../public/api/cars.json'
import MyContext from './MyContext';

export default function Myrovider({children}: any): JSX.Element {
    const [dates, setDates] = useState(data); 
    const [i, setI] = useState([0,1,2,3]); 
    const [scr, setScr] = useState(false)
    const tamanho = data.length;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const previous = () => {
        const aa: number[] = []
        i.map((a) => {
            aa.push(a > 0 ? a - 1 : tamanho - 1 )
        })
        setI(aa)
      };
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const next = () => {
        const aa: number[] = []
        i.map((a) => {
            aa.push(a >= tamanho - 1 ? 0 : a + 1)
        })
        setI(aa)
      };

      // eslint-disable-next-line react-hooks/exhaustive-deps
      const fillt = (a: string) => {
        console.log(a)
        if(a === '') return setDates(data)
        const c = data.filter((b) => b.bodyType.includes(a))
        setDates(c)
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const position = (aa: number) => {
        setI([aa])
      }
      
     const contextValue = useMemo (()=> ({
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
      position}),[dates,i,scr,tamanho,position,previous,next,fillt] )

  return (
    <MyContext.Provider value={contextValue}>
      <div>
        { children }
      </div>
    </MyContext.Provider>
  );
}