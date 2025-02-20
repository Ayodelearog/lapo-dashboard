"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  labels: ["Active", "Expired", "Inactive", "Blocked", "Lost"],
  datasets: [
    {
      data: [1500, 500, 200, 150, 100],
      backgroundColor: [
        "#0D9488", // Active - Teal
        "#F59E0B", // Expired - Amber
        "#3B82F6", // Inactive - Blue
        "#8B5CF6", // Blocked - Purple
        "#EF4444", // Lost - Red
      ],
      borderWidth: 0,
    },
  ],
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        padding: 20,
      },
    },
  },
  cutout: "70%",
}

export function CardDistribution() {
  const total = data.datasets[0]?.data.reduce((acc, curr) => acc + curr, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Card Status Distribution</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <Doughnut data={data} options={options} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-sm text-muted-foreground">Total Cards</div>
          <div className="text-2xl font-bold">{total?.toLocaleString()}</div>
        </div>
      </CardContent>
    </Card>
  )
}

