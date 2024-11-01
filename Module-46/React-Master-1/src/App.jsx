
import './App.css'
import Grandpa_Form from './Components/Grandpa_Form/Grandpa_Form'

function App() {

/* 
  -> props drilling kore kore data pathano (diamond) onk kosto shaddho
  -> er jonno context api use kora hoy


  ---- Context API -----
  -> Create a context and export it
  -> Grandpa te jehutu shob componenets  connected amra Gradpa te context API use korbo
  -> Grandpa te context provider use korbo and value pass korbo (value could be anything)
  -> useContext to access value in the context API

*/


  return (
    <>
    <h1>Form Master</h1>
      <div>
        <Grandpa_Form></Grandpa_Form>
      </div>
    </>
  )
}

export default App
