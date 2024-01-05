import React, { useContext } from "react";
import Image from 'next/image';
import circle from '../../docs/chevron-circled.svg';
import { View, Button } from 'vcc-ui';
import MyContext from "../context/MyContext";

const Setas: React.FC = () => {
  const context = useContext(MyContext);

  const renderButton = (onClick: () => void, invert = false) => (
    <View>
      <Button variant="text" intent="primary" onClick={onClick}>
        <Image 
          className={invert ? 'circle-invert' : ''} 
          src={circle} 
          alt="circle" 
          width={40}
          height={40}
        />
      </Button>
    </View>
  );

  return (
    <div className="but">
      {renderButton(() => context.previous(), true)}
      {renderButton(() => context.next())}
    </div>
  );
};

export default Setas;
