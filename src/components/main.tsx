import React, { useState, useEffect,useContext } from "react";
import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../docs/chevron-small.svg'
import MyContext from "../context/MyContext";
import { Setas } from "./setas";
import { Bolinhas } from "./bolinhas";



export const Blockcar: React.FC = () => {
    const context = useContext(MyContext);

    useEffect(() => {
       
        if(window.screen.width < 800){
            context.setI([0])
            context.setScr(true)
        }
    },[])
   

  return <main>
    <section>
       {
context.i.map((a: string | number, i: React.Key | null | undefined) => (
    <div key={i} className="container-info">
    {   context.dates[a]?.id ?
        <><p className="p type">{context.dates[a]?.bodyType}</p><h3>{context.dates[a]?.modelName} <p className="p">{context.dates[a]?.modelType}</p></h3><Image
                className="pic"
                src={context.dates[a]?.imageUrl}
                alt={context.dates[a]?.id}
                width={300}
                height={200} /><div className="container-menu">

                    <div className="menus">
                        <Link href={`/learn/${context.dates[a]?.id}`} target="_blank">LEARN</Link>
                        <Image
                            src={arrow}
                            alt={context.dates[a]?.id}
                            width={15}
                            height={15} />
                    </div>
                    <div className="menus">
                        <Link href={`/shop/${context.dates[a]?.id}`} target="_blank">SHOP</Link>
                        <Image
                            src={arrow}
                            alt={context.dates[a]?.id}
                            width={15}
                            height={15} />
                    </div>
                </div></>:
              <div className="none"/>
        }
    </div>
))
       }
        </section>
        {context.dates.length >= 5 ?  <Setas/>: <></> }

        {
           context.scr ?
        <Bolinhas/>:
            <></>
        }
  </main>
};
