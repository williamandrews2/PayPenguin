import { useState } from "react";
import Header from "./components/Header";
import { BillForm } from "./components/BillForm";
import "./styles/App.css";
import { BillList } from "./components/BillList";
import "./styles/billList.css";

function App() {
  const [bills, setBills] = useState([]);

  function addBill(newBill) {
    setBills((prevBills) => [...prevBills, newBill]);
  }

  function togglePaid(id) {
    setBills((prevBills) =>
      prevBills.map((bill) =>
        bill.id === id ? { ...bill, paid: !bill.paid } : bill
      )
    );
  }

  return (
    <>
      <div className="app-container-wrapper">
        <div className="app-container">
          <Header />
          <BillForm onAdd={addBill} />
          <BillList bills={bills} togglePaid={togglePaid} />
        </div>
      </div>
    </>
  );
}

export default App;
