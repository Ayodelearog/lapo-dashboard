"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

const monthlyData = {
  labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
  datasets: [
    {
      label: "Personalized",
      data: [45, 59, 80, 81, 56, 55, 40],
      backgroundColor: "#0066FF",
    },
    {
      label: "Instant",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "#E2EEFF",
    },
  ],
}

const weeklyData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Income",
      data: [65, 59, 80, 81, 56, 55, 70],
      borderColor: "#10B981",
      tension: 0.4,
      fill: false,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
}

export function DashboardCharts() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">Monthly Issuance</CardTitle>
        </CardHeader>
        <CardContent>
          <Bar data={monthlyData} options={options} height={200} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-medium">This Week&apos;s Income</CardTitle>
        </CardHeader>
        <CardContent>
          <Line data={weeklyData} options={options} height={200} />
        </CardContent>
      </Card>
    </>
  )
}

