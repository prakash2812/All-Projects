import React, { useState } from 'react';
import './App.css';
// --------------- context --------------------
// import ComponentC from './component/Context/ComponentC';
// import { UseProvider } from './component/Context/useContext'
// -------------------- HOC ---------------------------------------
import ClickCounter from './component/HOC/ClickCounter';
import HoverCounter from './component/HOC/HoverCounter';
//  ---------------------------  Render Props ------------------------
import ClickCounter1 from './component/RenderProps/ClickCounter1';
import HoverCounter1 from './component/RenderProps/HoverCounter1';
import User from './component/RenderProps/User';
import RefDemo from './component/Reference/RefDemo';
import FocusInput from './component/Reference/FocusInput';
import FRParent from './component/Reference/FRParent';


function App() {
  const [id, setId] = useState('prakash')
  console.log('App Render');
  return (
    <div className="App">
      {/* ------------ context ------------------- */}
      {/* <UseProvider value={id}>
        <ComponentC />
      </UseProvider> */}

      {/* ------------ HOC -------------------- */}
      {/* <ClickCounter name="Arjun" />
      <HoverCounter name="Arjun" /> */}

      {/* ----------------- render Props ------------------- */}


      {/* <User render={(counter, increment) =>
        <ClickCounter1 counter={counter} increment={increment} />
      } 
      /> */}

      {/* <User>
        {(counter, increment) =>
          <ClickCounter1 counter={counter} increment={increment} />}
      </User>
      <User>
        {(counter, increment) =>
          <HoverCounter1 counter={counter} increment={increment} />}
      </User> */}

      {/* <User render={(counter, increment) =>
        <HoverCounter1 counter={counter} increment={increment} />
      } 
      />*/}
      {/* --------------------- ref ------------------------------------ */}
      <RefDemo />
      {/* <FocusInput /> */}
      {/* <FRParent /> */}
    </div>
  );
}

export default App;
