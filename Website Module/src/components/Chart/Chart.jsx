import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { API } from "../../constants/API";
import axios from "axios";

const Chart = () => {
  let [_data, setData] = React.useState();
  const data = [
    {
      name: "Samosa",
      qty: 40,
    },
    {
      name: "Gujrati Thali",
      qty: 30,
    },
    {
      name: "Coffee",
      qty: 20,
    },
    {
      name: "Tea",
      qty: 27,
    },
    {
      name: "Idli Sambhar",
      qty: 18,
    },
    {
      name: "Upma",
      qty: 23,
    },
    {
      name: "Poha",
      qty: 34,
    },
  ];
  const handle_data = async () => {
    const data = await axios.get(`${API.django_server}`);
    console.log("called", data.data.Graph);
    setData(data.data.Graph);
  };

  React.useEffect(() => {
    // console.log("Hello");
    handle_data();
    console.log("Chart");
  }, []);

  const Render_chart = (_data) => {
    return (
      <div style={{ flexDirection: "column" }}>
        <p className="box-title">Last 7 Months (income)</p>
        <ResponsiveContainer width="100%" height="85%">
          <AreaChart
            width={500}
            height={400}
            data={_data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="qty"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="render_chart" style={{ overflowY: "scroll" }}>
      <Render_chart _data={_data} />
      <Render_chart _data={_data} />
      <Render_chart _data={_data} />
    </div>
  );
};

export default Chart;
