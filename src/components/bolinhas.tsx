import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Bolinhas: React.FC = () => {
  const { dates, position } = useContext(MyContext);

  return (
    <ul>
      {dates.map((car: { id: React.Key | null | undefined; }, index: any) => (
        <li key={car.id} onClick={() => position(index)}>  </li>
      ))}
    </ul>
  );
};

export default Bolinhas;
