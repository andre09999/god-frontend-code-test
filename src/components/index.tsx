import React, { useState, useEffect } from "react";
import data from  '../../public/api/cars.json'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../docs/chevron-small.svg'
import circle from '../../docs/chevron-circled.svg'
import { View, Button,Logo } from 'vcc-ui';



export const Blockcar: React.FC = () => {
    const [dates, setDates] = useState(data); 
    const [i, setI] = useState([0,1,2,3]); 
    const [scr, setScr] = useState(false)
    const tamanho = data.length;

    useEffect(() => {
       
        if(window.screen.width < 800){
            setI([0])
            setScr(true)
        }
    },[])
    const previous = () => {
        const aa: number[] = []
        i.map((a) => {
            aa.push(a > 0 ? a - 1 : tamanho - 1 )
        })
        setI(aa)
      };
    
      const next = () => {
        const aa: number[] = []
        i.map((a) => {
            aa.push(a >= tamanho - 1 ? 0 : a + 1)
        })
        setI(aa)
      };

      const fillt = (a: string) => {
        const c = data.filter((b) => b.bodyType.includes(a))
        setDates(c)
      }
      const position = (aa: number) => {
        setI([aa])
      }

  return <main>
    <header>

    <Logo type="spreadmark" max-height={32} />

        
        <input type="text" onChange={({target})=> fillt(target.value)} placeholder="type the bodyType "/>
    </header>
    <section>
       {
i.map((a, i) => (
    <div key={i} className="container-info">
        <p className="p type">{dates[a]?.bodyType}</p>
        <h3>{dates[a]?.modelName} <p className="p">{dates[a]?.modelType}</p></h3>     
        <Image 
                className="pic"
                src={dates[a]?.imageUrl}
                alt={dates[a]?.id}
                width={300}
                height={200}
        />
        
        {   dates[a]?.id ?
               <div className="container-menu">

               <div className="menus">
                  <Link href={`/learn/${dates[a]?.id}`} target="_blank">LEARN</Link>
                  <Image 
                      src={arrow}
                      alt={dates[a]?.id}
                      width={15}
                      height={15}
                  />
                </div>
                <div className="menus">
                  <Link href={`/shop/${dates[a]?.id}`} target="_blank">SHOP</Link>
                  <Image 
                      src={arrow}
                      alt={dates[a]?.id}
                      width={15}
                      height={15}
                  />
                </div>  
              </div>:
              <></>
        }
    </div>
))
       }
        </section>
        {
            dates.length >= 5 ?
    <div className="but">
        
        <View  padding={20}>
            <Button variant="text" intent="primary" onClick={()=> previous()}>
                <Image 
                className="circle-invert" 
                src={circle} 
                alt="circle" 
                width={20}
                height={20}>
            </Image>
        </Button>
    </View>
        <View >
        <Button variant="text" intent="primary" onClick={()=> next()}>
                <Image 
                src={circle} 
                alt="circle" 
                width={20}
                height={20}>
            </Image>
        </Button>
        </View>

    </div>:
    <></>

        }

        {
           scr ?
            <ul>
                {
                    dates.map((a,i) => (
                        <li key={a.id} onClick={()=> position(i)}></li>
                    ))
                }
            </ul>:
            <></>
        }
  </main>
};
