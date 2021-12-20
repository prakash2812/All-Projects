import React from 'react';
import './App.css';
// -------------- use State -----------------------------------------------
// import ClassCounter from './components/useState/ClassCounter';
// import HookCounter from './components/useState/HookCounter';
// import HookCounterObjects from './components/useState/HookCounterObjects';
// import Employee from './components/useState/Employee';
// import HookCounterArray from './components/useState/HookCounterArray';
// import ComplexState from './components/useState/ComplexState';
// import UIForm from './components/useState/CustomHook/uiForm';
// --------------------  useEffect  ----------------------------------------------------------------
// import LifeCycle from './components/useEffect/LifeCycle';
// import ClassCounterOne from './components/useEffect/ClassCounterOne'
// import HookCounterOne from './components/useEffect/HookCounterOne';
// import ClassMouse from './components/useEffect/ClassMouse';
// import HookMouse from './components/useEffect/HookMouse';
// import MouseContainer from './components/useEffect/MouseContainer';
// import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
// import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
// import DataFetching from './components/useEffect/Fetching/DataFetching';
// import UIForm from './components/useEffect/CustomHook/uiForm';
// import Fetching from './components/useEffect/CustomHook1/Fetching'
// ------------------ useContext ---------------------------------------------------------------------
// import ComponentC from './components/useContext/ComponentC'; --- use AppContext.js for 

// ------------------ use Reducer ----------------------------------------------------------
// import CounterOne from './components/useReducer/CounterOne';
// import CounterTwo from './components/useReducer/CounterTwo';
// import CounterThree from './components/useReducer/CounterThree';
// import DataFetchingTwo from './components/useReducer/DataFetchingTwo';
// import DataFetchingOne from './components/useReducer/DataFetchingOne';
// import Complex1 from './components/useReducer/Complex/Complex1';
import Complex2 from './components/useReducer/Complex/Complex2';
// import DataFetchingThree from './components/useReducer/DataFetchingThree';
// ------------------------ useRef ---------------------------------------------------------------
// import FocusInput from './components/useRef/FocusInput';
// import ClassTimer from './components/useRef/ClassTimer';
// import FunctionTimer from './components/useRef/FunctionTimer';
// import RefComplex1 from './components/useRef/Complex/RefComplex1';
// ----------------- use call back ---------------------------------------------------------------
// import Parent from './components/useCallBack/simple/Parent';
// -------------- use Memo -------------------------------------------------
// import Counter from './components/useMemo/Counter';
// import MemoComplex from './components/useMemo/MemoComplex';


export const UseContext = React.createContext()
export const ChainContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/* ----------------------------useState---------------------- */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <Employee /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounterArray /> */}
      {/* <ComplexState /> */}
      {/* <UIForm /> */}
      {/*------------------------- UseEffect--------------------------------- */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <DataFetching /> */}
      {/* <UIForm /> */}
      {/* <Fetching /> */}
      {/* <LifeCycle /> */}
      {/* ------------------------ use Context-------------------------- */}
      {/* <UseContext.Provider value='arjun'>
        <ChainContext.Provider value='Prakash'>
          <ComponentC />

        </ChainContext.Provider>
      </UseContext.Provider> */}
      {/* --------------- useReducer--------------------------------------- */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}
      {/* <CounterThree /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <DataFetchingThree /> */}
      {/* <Complex1 /> */}
      <Complex2 />
      {/* ------------------ useREf ---------------------- */}
      {/* <FocusInput /> */}
      {/* <ClassTimer /> */}
      {/* <FunctionTimer /> */}
      {/* <RefComplex1 /> */}
      {/* ------------------- useCall back --------------------------- */}
      {/* <Parent /> */}
      {/* ------------ use Memo ------------------------------------------ */}
      {/* <Counter /> */}
      {/* <MemoComplex /> */}
    </div>
  );
}

export default App;