import './App.css';
import Header from "./Header";
import TinderCard from './TinderCard';


function App() {
  return (
    //BEM class convention
    <div className="app">
      <Header />
      <TinderCard />
      {/** HEADER
       * Tinder card
       * swipebutton
       */}
    </div>
  );
}

export default App;
