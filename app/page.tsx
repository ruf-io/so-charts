import { DBChart } from "@/components/dbChart";
import { ChartContainer } from "@/components/ui/chart";
import { ChartLine } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full  items-center justify-between text-sm lg:flex">
        <DBChart />
      </div>
    </main>
  );
}
