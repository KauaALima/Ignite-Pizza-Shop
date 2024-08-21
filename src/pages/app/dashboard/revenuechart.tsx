import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const data = [
  { date: '11/08', revenue: 1200 },
  { date: '12/08', revenue: 800 },
  { date: '13/08', revenue: 900 },
  { date: '14/08', revenue: 400 },
  { date: '15/08', revenue: 2300 },
  { date: '16/08', revenue: 800 },
  { date: '17/08', revenue: 640 },
  { date: '18/08', revenue: 300 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no periodo
          </CardTitle>
          <CardDescription>Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />

            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line
              type="linear"
              strokeWidth={2}
              dataKey="revenue"
              stroke={colors.violet[500]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
