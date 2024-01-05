import React, { useEffect, useContext } from "react";
import Image from 'next/image';
import Link from 'next/link';
import arrow from '../../docs/chevron-small.svg';
import MyContext from "../context/MyContext";
import Setas from "./setas";
import Bolinhas from "./bolinhas";

const Blockcar: React.FC = ({ check, checked }: any) => {
  const context = useContext(MyContext);

  useEffect(() => {
    if (window.screen.width < 800) {
      context.setI([0]);
      context.setScr(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <main>
      <section>
        {context.i.map((index: number) => {
          const car = context.dates[index];

          return car?.id ? (
            <div key={index} className="container-info">
              <p className="p type">{car.bodyType}</p>
              <h3>
                {car.modelName} <p className="p">{car.modelType}</p>
              </h3>
              <Image
                className={`pic ${check ? 'dark' : 'light'}`}
                src={car.imageUrl}
                alt={car.id}
                width={300}
                height={200}
              />
              <div className="container-menu">
                <div className="menus">
                  <Link href={`/learn/${car.id}`} target="_blank">
                    LEARN
                  </Link>
                  <Image src={arrow} alt={car.id} width={15} height={15} />
                </div>
                <div className="menus">
                  <Link href={`/shop/${car.id}`} target="_blank">
                    SHOP
                  </Link>
                  <Image src={arrow} alt={car.id} width={15} height={15} />
                </div>
              </div>
            </div>
          ) : (
            <div key={index} className="none" />
          );
        })}
      </section>
      
      {context.dates.length >= 5 && <Setas />}
      {context.scr && <Bolinhas />}
  
    </main>
  );
};

export default Blockcar;
