import Navbar from './components/Navbar/Navbar';
import PriceOptions from './components/PriceOptions/PriceOptions';
import './App.css';
import LineChart from './components/LineChart/LineChart'; // Update this path as per your folder structure
import Phones from './components/Phones/Phones';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;