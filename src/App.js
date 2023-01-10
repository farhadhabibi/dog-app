import Navbar from './Navbar';
import Routers from './Routers'
import jack from './images/dog1.png';
import whiskey from './images/dog2.png';
import max from './images/dog3.png';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Navbar dogs={props.dogs} />
      <div className="container">
        <Routers dogs={props.dogs} />
      </div>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: 'Jack',
      age: 5,
      src: jack,
      facts: [
        "Jack loves going outside",
        "Jack likes eating chicken",
        "Jacks likes to bark every night"
      ]
    },
    {
      name: 'Whiskey',
      age: 4,
      src: whiskey,
      facts: [
        "Whiskey is so smart and chubby",
        "Whiskey wands to cuddle with his owner",
        "Whiskey is highly inteligent"
      ]
    },
    {
      name: 'Max',
      age: 3,
      src: max,
      facts: [
        "Max is so kind",
        "Max likes to eat meet",
        "Max likes to walk out with you"
      ]
    },
  ]
}

export default App;
