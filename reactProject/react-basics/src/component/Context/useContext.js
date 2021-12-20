import React from 'react';

// const UseContext = React.createContext('Prakash')
// ----- directly call using Consumer not need of provider because default values given

const UseContext = React.createContext()

const UseProvider = UseContext.Provider;
const UseConsumer = UseContext.Consumer

export { UseProvider, UseConsumer }
export default UseContext;