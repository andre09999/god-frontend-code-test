import React, { useState, useContext } from "react";
import { Button, Logo } from 'vcc-ui';
import MyContext from "../context/MyContext";
import Toggle from './toggle'
const Header: React.FC = ({ check, checked }: any) => {
  const context = useContext(MyContext);
  const [tex, setText] = useState('');

  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    check(e.target.checked);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      context.filterCars(tex);
    }
  };

  return (
    <header className={`${check ? 'borderlight' : 'borderdark'} `}>
       <Toggle handleToggleChange={handleToggleChange} />
      <Logo type="spreadmark" max-height={15} />
      
      <div className="inputsss">
        <input
          type="text"
          value={tex}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="type the bodyType"
        />
        <Button
          variant="text"
          intent="primary"
          onClick={() => context.filterCars(tex)}
        >
          Submit
        </Button>
        
       
      </div>
      
    </header>
  );
};

export default Header;
