import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./styles/App.css";
import { BillList } from "./components/BillList";
import "./styles/billList.css";
import "./styles/billForm.css";
import "./styles/header.css";
import Footer from "./components/Footer";
import "normalize.css";
import { BillContext } from "./contexts/BillContext";
import BillChart from "./components/BillChart";

function App() {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch bills from API on mount
  useEffect(() => {
    const fetchBills = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/bills`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch bills");

        const data = await res.json();

        // re-parse dueDate back to a Date object, same as before
        const parsed = data.map((bill) => ({
          ...bill,
          dueDate: new Date(bill.dueDate),
        }));

        setBills(parsed);
      } catch (error) {
        console.error("Failed to fetch bills: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBills();
  }, []); // runs once on mount, was previously localStorage initialization

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="app-container-wrapper">
        <div className="app-container">
          <Header />
          <div className="bill-sections">
            <BillContext.Provider value={{ bills, setBills }}>
              <BillList />
              <BillChart />
            </BillContext.Provider>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
