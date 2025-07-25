import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BillForm } from "./components/BillForm";
import "./styles/App.css";
import { BillList } from "./components/BillList";
import "./styles/billList.css";
import BillControls from "./components/BillControls";
import "./styles/billForm.css";
import "./styles/header.css";
import Footer from "./components/Footer";
import "normalize.css";

function App() {
  // initialize state from localStorage
  const [bills, setBills] = useState(() => {
    const storedBills = localStorage.getItem("bills");
    if (!storedBills) return [];

    // re-parse the date from a string back to a Date
    try {
      const parsed = JSON.parse(storedBills);
      return parsed.map((bill) => ({
        ...bill,
        dueDate: new Date(bill.dueDate),
      }));
    } catch (error) {
      console.error("Failed to parse bills from local storage. Error: ", error);
      return [];
    }
  });

  // track changes in bills array and write to localStorage
  useEffect(() => {
    localStorage.setItem("bills", JSON.stringify(bills));
  }, [bills]);

  return (
    <>
      <div className="app-container-wrapper">
        <div className="app-container">
          <Header />
          <BillList bills={bills} setBills={setBills} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
