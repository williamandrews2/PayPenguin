import { useState } from "react";
import Header from "./components/Header";
import { BillForm } from "./components/BillForm";
import "./styles/App.css";
import { BillList } from "./components/BillList";

function App() {
  const [bills, setBills] = useState([]);

  function addBill(newBill) {
    setBills((prevBills) => [...prevBills, newBill]);
  }
  return (
    <>
      <div className="app-container">
        <Header />
        <BillForm onAdd={addBill} />
        <BillList bills={bills} />
      </div>
    </>
  );
}

export default App;
