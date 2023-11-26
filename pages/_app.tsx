import { StyleProvider, ThemePicker } from 'vcc-ui';
import {Blockcar} from '../src/components/main'
import "../public/css/styles.css";
import React from "react";
import Myprovider from '../src/context/MyProvider'
import { Footer } from '../src/components/footer';
import {Header} from '../src/components/header'
function HomePage() {
  return (
    <React.StrictMode>
      <Myprovider>
      <StyleProvider>
        <ThemePicker variant="dark" direction="ltr">
          <Header/>
            <Blockcar />
            
          <Footer/>
        </ThemePicker>
      </StyleProvider>
      </Myprovider>
    </React.StrictMode>
  );
}

export default HomePage;
