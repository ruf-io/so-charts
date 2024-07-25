"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    year: 2018,
    mysql: 58.7,
    postgres: 32.9,
    sqlite: 19.7,
    sql_server: 41.2,
    mongodb: 25.9,
  },
  {
    year: 2019,
    mysql: 54.0,
    postgres: 34.3,
    sqlite: 31.6,
    sql_server: 32.8,
    mongodb: 25.5,
  },
  {
    year: 2020,
    mysql: 55.6,
    postgres: 36.1,
    sqlite: 31.2,
    sql_server: 33.0,
    mongodb: 26.4,
  },
  {
    year: 2021,
    mysql: 50.18,
    postgres: 40.42,
    sqlite: 32.18,
    sql_server: 26.87,
    mongodb: 27.7,
  },
  {
    year: 2022,
    mysql: 46.85,
    postgres: 43.59,
    sqlite: 32.01,
    sql_server: 26.87,
    mongodb: 28.3,
  },
  {
    year: 2023,
    mysql: 41.09,
    postgres: 45.55,
    sqlite: 30.9,
    sql_server: 25.45,
    mongodb: 25.52,
  },
  {
    year: 2024,
    mysql: 40.3,
    postgres: 48.7,
    sqlite: 33.1,
    sql_server: 25.3,
    mongodb: 24.8,
  },
];

const chartConfig = {
  postgres: {
    label: "Postgres",
    color: "#0064a5",
  },
  mysql: {
    label: "MySQL",
    color: "#CCC",
  },
  sqlite: {
    label: "SQLite",
    color: "#CCC",
  },
  sql_server: {
    label: "SQL Server",
    color: "#CCC",
  },
  mongodb: {
    label: "MongoDB",
    color: "#CCC",
  },
} satisfies ChartConfig;

export function DBChart() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Postgres</CardTitle>
        <CardDescription>
          StackOverflow Developer Survey - Databases
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="mysql"
              type="natural"
              stroke="var(--color-mysql)"
              strokeWidth={2}
              dot={false}
            ></Line>

            <Line
              dataKey="sqlite"
              type="natural"
              stroke="var(--color-sqlite)"
              strokeWidth={2}
              dot={false}
            ></Line>
            <Line
              dataKey="sql_server"
              type="natural"
              stroke="var(--color-sql_server)"
              strokeWidth={2}
              dot={false}
            ></Line>
            <Line
              dataKey="mongodb"
              type="natural"
              stroke="var(--color-mongodb)"
              strokeWidth={2}
              dot={false}
            ></Line>
            <Line
              dataKey="postgres"
              type="natural"
              stroke="var(--color-postgres)"
              strokeWidth={2}
              dot={{
                fill: "var(--color-postgres)",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                formatter={(value) => `${Math.round(value)}%`}
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 7% this year <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          As answer to: Which database environments have you done extensive
          development work in over the past year?
        </div>
      </CardFooter>
    </Card>
  );
}
