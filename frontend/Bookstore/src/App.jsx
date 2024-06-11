import { Routes,Route } from "react-router-dom";
import Books from "./Components/Books";
import Add from "./Components/Add";
import Update from "./Components/Update";


function App() {
  return(
    <>
    <Routes>

      <Route path="/" element={<Books></Books>}/>
      <Route path="/addbook" element={<Add></Add>}/>
      <Route path="/updatebook/:id" element={<Update></Update>}/>
    </Routes>
    </>
  )
}

export default App
