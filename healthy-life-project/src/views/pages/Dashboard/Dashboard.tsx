import React, { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line } from "react-chartjs-2"
import { faker } from "@faker-js/faker"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Sơ đồ thiết bị",
    },
  },
}

const labels = ["Trường", "Duy", "Nghị", "Thu", "Thọ", "Phúc"]

function Dashboard() {
  const [time, setTime] = useState(Date.now());
  console.log("Re-render");
  const data = {
    labels,
    datasets: [
      {
        label: "Nhịp tim",
        data: labels.map(() => faker.datatype.float({ min: 60, max: 100 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Nhiệt độ",
        data: labels.map(() => faker.datatype.float({ min: 35, max: 45 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 3000);
    return () => {
      clearInterval(interval);
    };
  }, [])
  return (
    <div style={{ backgroundColor: "#fff", height: "100%", width: "100%", overflow: "auto" }}>
      <Line options={options} data={data} />
    </div>
  )
}

export default Dashboard
