import { useBillContext } from "../contexts/BillContext";
import { PieChart, Pie, Cell } from "recharts";
import "../styles/chart.css";

function BillChart() {
  const { bills } = useBillContext();
  const COLORS = [
    "#0088FE", // blue
    "#00C49F", // teal
    "#FFBB28", // yellow-orange
    "#FF8042", // orange
    "#AF19FF", // purple
    "#FF4560", // red
    "#FF6F91", // pink
    "#2ED573", // light green
    "#1E90FF", // dodger blue
    "#FF7F50", // coral
    "#FFD700", // gold
    "#7B68EE", // medium slate blue
    "#FF1493", // deep pink
    "#32CD32", // lime green
    "#20B2AA", // light sea green
    "#FF6347", // tomato
    "#40E0D0", // turquoise
    "#FF4500", // orange-red
    "#DA70D6", // orchid
    "#00CED1", // dark turquoise
  ];

  return (
    <section className="monthly-expense-breakdown">
      <h2>Monthly Expense Breakdown</h2>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={bills}
            dataKey="amount"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#084471"
          >
            {bills.map((bill, index) => (
              <Cell
                key={`Cell ${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </section>
  );
}

export default BillChart;
