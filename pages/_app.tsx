// @ts-nocheck
import React, { useState } from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';
import Blockcar from '../src/components/main';
import "../public/css/styles.css";
import "../src/components/toggle.css";
import MyProvider from '../src/context/MyProvider';
import Footer from '../src/components/footer';
import Header from '../src/components/header';

function HomePage() {
  const [checked, setChecked] = useState(false);
  const theme = checked ? 'dark' : 'light';

  return (
      <MyProvider>
        <StyleProvider>
          <ThemePicker variant={theme} direction="ltr">
            <div className={theme}>
              <Header check={setChecked} checked={checked} />
              <Blockcar check={checked} checked={setChecked}/>
              <Footer check={checked} />
            </div>
          </ThemePicker>
        </StyleProvider>
      </MyProvider>
  );
}

export default HomePage;
