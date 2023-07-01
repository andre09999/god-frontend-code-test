import React, { useContext } from "react";
import Image from 'next/image';
import circle from '../../docs/chevron-circled.svg';
import MyContext from "../context/MyContext";

export const Bolinhas: React.FC = () => {
  const context = useContext(MyContext);

  return (
    <ul>
      {context.dates.map((a: { id: React.Key | null | undefined }, i: number) => (
        <li key={a.id} onClick={() => context.position(i)}>
          <Image
            src={circle}
            alt="circle"
            width={40}
            height={40}
          />
        </li>
      ))}
    </ul>
  );
};
