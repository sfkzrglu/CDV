import './App.css';
import Tasks from './Tasks';
import DownCounter from "./DownCounter.jsx";
import UpDownMeter from "./UpDownMeter.jsx";
import RadioSelector from "./RadioSelector.jsx";

function App() {
   {/*Task 3*/}
  const radioOptions = [
    { text: "Extra Small", id: "XS", selected: false },
    { text: "Small", id: "S", selected: false },
    { text: "Medium", id: "M", selected: false },
    { text: "Large", id: "L", selected: true },
    { text: "Extra Large", id: "XL", selected: false },
  ];

  return (
    <>
      <Tasks taskStartindex={1}>
        {/*Task 1*/}
        <DownCounter start={5} />
        {/*Task 2*/}
        <UpDownMeter start={5} max={10} min={0} />
        {/*Task 3*/}
        <RadioSelector options={radioOptions} />
      </Tasks> 
    </>
  )
}

export default App
