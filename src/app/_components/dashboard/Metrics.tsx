import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUp } from "lucide-react"

export function DashboardMetrics() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Active Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">26,478</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="text-emerald-500 flex items-center">
              <ArrowUp className="h-3 w-3" />
              +9%
            </span>
            this month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Personalized Cards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">15,703</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="text-emerald-500 flex items-center">
              <ArrowUp className="h-3 w-3" />
              8.5%
            </span>
            this month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Today&apos;s Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">₦9.3M</div>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="text-emerald-500 flex items-center">
              <ArrowUp className="h-3 w-3" />
              +6%
            </span>
            vs yesterday
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">38</div>
          <p className="text-xs text-orange-500">Requires attention</p>
        </CardContent>
      </Card>
    </div>
  )
}

