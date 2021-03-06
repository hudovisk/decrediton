import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {balance} from "connectors";
import ChartTooltip from "./ChartTooltip";

const BalanceChart = ({ data, currencyDisplay }) => (
  <BarChart width={400} height={244} data={data}>
    <XAxis dataKey="name" />
    <YAxis orientation="right"/>
    <Tooltip content={<ChartTooltip />} />
    <Legend />
    <Bar barSize={8} dataKey="immature" stackId="a" fill="#69d5f7" radius={[0, 0, 10, 10]} unit={currencyDisplay} />
    <Bar barSize={8} dataKey="live" stackId="a" fill="#2971ff" radius={[10, 10, 10, 10]} unit={currencyDisplay} />
    <Bar barSize={8} dataKey="voted" stackId="a" fill="#2ed7a2" radius={[10, 10, 0, 0]} unit={currencyDisplay} />
  </BarChart>
);

export default balance(BalanceChart);
