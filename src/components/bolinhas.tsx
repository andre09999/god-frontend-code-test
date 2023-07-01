import React, { useContext } from "react";
import MyContext from "../context/MyContext";

export const Bolinhas: React.FC = () => {
  const context = useContext(MyContext);

  return (
    <ul>
      {context.dates.map((a: { id: React.Key | null | undefined }, i: number) => (
        <li key={a.id} onClick={() => context.position(i)}>  </li>
      ))}
    </ul>
  );
};
