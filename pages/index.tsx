import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-sans max-w-max-width mx-auto p-4 py-16">
      <NavBar />
      <div>
        <h1 className="text-primary text-2xl md:text-3xl font-bold">Budget</h1>
        <div className="mt-7">
          <p className="text-primary-gray text-sm">Monthly Budget</p>
          <div className="rounded-md bg-white shadow-md mt-3">
            <p className="text-primary text-3xl font-bold px-5 py-2 md:py-4 md:px-6 md:text-4xl">
              ₦120,000
            </p>
          </div>
        </div>
        <div className="mt-7">
          <TabList />
        </div>
      </div>
    </div>
  );
}

function TabList() {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  return (
    <ul className="flex gap-7">
      {["Last Month", "This Month"].map((tab, index) => (
        <li
          key={tab}
          onClick={() => setActiveTab(index)}
          className={
            activeTab === index ? "text-primary-lightBlue" : "text-primary-gray"
          }>
          {tab}
        </li>
      ))}
    </ul>
  );
}
