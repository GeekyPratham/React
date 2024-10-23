import "./App.css"

// importing component of file
// import ProductTab from "./ProductTab";
import MsgBox from "./MsgBox.jsx"

function App() {
 
  return(
    <>
      {/* <ProductTab/> */}

      <MsgBox name = "Pratham" textColor="yellow"/>
      <MsgBox name = "Raj" textColor="red"/>
      <MsgBox name = "Shivam" textColor="blue"/>
      <MsgBox name = "Kumar" textColor="green"/>
    </>
  );
}

export default App
