import React, { useState, useEffect,useContext } from "react";
import Image from 'next/image';
import circle from '../../docs/chevron-circled.svg';
import { View, Button,Logo, TextInput } from 'vcc-ui';
import MyContext from "../context/MyContext";


export const Setas: React.FC = () => {
  const context = useContext(MyContext);

  return   <div className="but">
        
  <View  >
      <Button variant="text"  intent="primary" onClick={()=> context.previous()}>
          <Image 
          className="circle-invert" 
          src={circle} 
          alt="circle" 
          width={40}
          height={40}>
      </Image>
  </Button>
</View>
  <View >
  <Button variant="text" intent="primary" onClick={()=> context.next()}>
          <Image 
          src={circle} 
          alt="circle" 
          width={40}
          height={40}>
      </Image>
  </Button>
  </View>

</div>
};
