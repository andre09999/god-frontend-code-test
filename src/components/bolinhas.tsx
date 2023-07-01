import React, { useState, useEffect,useContext } from "react";
import Image from 'next/image';
import circle from '../../docs/chevron-circled.svg';
import { View, Button,Logo, TextInput } from 'vcc-ui';
import MyContext from "../context/MyContext";


export const Bolinhas: React.FC = () => {
  const context = useContext(MyContext);

  return <ul>
      {
          context.dates.map((a: { id: React.Key | null | undefined; },i: any) => (
              <li key={a.id} onClick={()=> context.position(i)}></li>
          ))
      }
  </ul>
};
