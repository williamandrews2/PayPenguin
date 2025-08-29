import { useBillContext } from "../contexts/BillContext";
import { PieChart, ResponsiveContainer, Pie } from "recharts";
import "../styles/chart.css";

function BillChart() {
  const { bills } = useBillContext();

  return (
    <>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={bills}
            dataKey="amount"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#084471"
          ></Pie>
        </PieChart>
      </div>
    </>
  );
}

export default BillChart;
