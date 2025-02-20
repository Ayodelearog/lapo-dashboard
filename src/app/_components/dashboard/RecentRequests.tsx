import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const requests = [
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Ready",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "In Progress",
  },
  {
    branch: "Corporate",
    cardType: "Personalized",
    quantity: 10,
    status: "Acknowledged",
  },
  {
    branch: "Corporate",
    cardType: "Instant",
    quantity: 10,
    status: "Pending",
  },
]

const getStatusColor = (status: string) => {
  const colors = {
    Ready: "bg-emerald-100 text-emerald-800",
    "In Progress": "bg-orange-100 text-orange-800",
    Acknowledged: "bg-blue-100 text-blue-800",
    Pending: "bg-gray-100 text-gray-800",
  }
  return colors[status as keyof typeof colors] || colors.Pending
}

export function RecentRequests() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">Recent Card Requests</CardTitle>
        <Button variant="ghost" className="text-sm text-blue-600">
          View all
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Branch</TableHead>
              <TableHead>Card Type</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request, index) => (
              <TableRow key={index}>
                <TableCell>{request.branch}</TableCell>
                <TableCell>{request.cardType}</TableCell>
                <TableCell>{request.quantity}</TableCell>
                <TableCell>
                  <Badge variant="secondary" className={getStatusColor(request.status)}>
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="link" className="text-blue-600 p-0">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

