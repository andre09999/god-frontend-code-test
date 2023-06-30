import { StyleProvider, ThemePicker } from 'vcc-ui';
import {Blockcar} from '../src/components/index'
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="dark" direction="ltr">
          <Blockcar />
        </ThemePicker>
      </StyleProvider>
    </React.StrictMode>
  );
}

export default HomePage;
