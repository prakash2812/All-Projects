import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body';
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <BrowserRouter>
        <div className="App">
          <Body />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
