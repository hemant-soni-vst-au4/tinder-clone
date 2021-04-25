import './App.css';
import Header from "./Header";
import TinderCards from './TinderCards';


function App() {
  return (
    //BEM class convention
    <div className="app">
      <Header />
      <TinderCards />
      {/** HEADER
       * Tinder card
       * swipebutton
       */}
    </div>
  );
}

export default App;
