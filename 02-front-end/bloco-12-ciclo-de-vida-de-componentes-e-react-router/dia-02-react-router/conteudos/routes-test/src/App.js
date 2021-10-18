import './App.css';
import About from './components/About';
import HowToUse from './components/HowToUse';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/about" component={About} />
        <Route path="/howtouse" component={HowToUse} />
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
