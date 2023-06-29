import React, { useState } from "react";
import data from  '../../public/api/cars.json'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../docs/chevron-small.svg'
import circle from '../../docs/chevron-circled.svg'
import { Block, Button } from 'vcc-ui';


export const Blockcar: React.FC = () => {
    const [dates, setDates] = useState(data.slice(0,4))
  return <main>
    <section>
    {dates.map((a)=> (
        <div key={a.id} className="car">
            <p className="p type">{a.bodyType}</p>
            <h3>{a.modelName} <p className="p">{a.modelType}</p></h3>
            <Image 
                className="pic"
                src={a.imageUrl}
                alt={a.id}
                width={300}
                height={200}
        />
        <div className="container-menu">
          <div className="menus">
            <Link href={`/learn/${a.id}`} target="_blank">LEARN</Link>
            <Image 
                src={arrow}
                alt={a.id}
                width={15}
                height={15}
            />
          </div>
          <div className="menus">
            <Link href={`/shop/${a.id}`} target="_blank">SHOP</Link>
            <Image 
                src={arrow}
                alt={a.id}
                width={15}
                height={15}
            />
          </div>
        </div>
        </div>
    ))}
        </section>
    <div className="but">
        <Block>
            <Button className="circle-invert" variant="outline" intent="secondary">
                <Image 
                className="images"
                src={circle} 
                alt="circle" 
                width={30}
                height={30}>
            </Image>
        </Button>
    </Block>
        <Block >
        <Button variant="outline" intent="secondary" >
                <Image 
                src={circle} 
                alt="circle" 
                width={30}
                height={30}>
            </Image>
        </Button>
        </Block>
    </div>
  </main>
};
