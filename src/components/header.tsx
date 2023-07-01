import React, { useState, useEffect,useContext } from "react";
import { View, Button,Logo, TextInput } from 'vcc-ui';
import MyContext from "../context/MyContext";


export const Header: React.FC = () => {
  const context = useContext(MyContext);
  const [tex, setText] = useState('')
  return  <header>
  <Logo type="spreadmark" max-height={32} />

      <div className="inputsss">
      <input type="text" onChange={({target})=> setText(target.value)} placeholder="type the bodyType "/>
          <Button variant="text" intent="primary" onClick={()=> context.fillt(tex)}>
              Submit
      </Button>
      </div>
  </header>
};
