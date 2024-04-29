import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import React from "react";
import Chart from "@/components/icon/ChartIcon";
import FoodIcon from "@/components/icon/FoodIcon";
import SavingsIcon from "@/components/icon/SavingsIcon";
import NairaIcon from "@/components/icon/NairaIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="font-sans max-w-max-width mx-auto pt-16 md:pt-0 md:grid grid-cols-[auto_1fr]  md:h-screen">
      <NavBar />
      <div className="md:mt-8">
        <div className="lg:grid grid-cols-2 items-center">
          <div>
            <h1 className="text-primary text-2xl md:text-3xl font-bold px-6">
              Budget
            </h1>
            <div className="mt-7 px-6">
              <p className="text-primary-gray text-sm flex gap-2 items-center">
                <NairaIcon width={20} height={20} /> Monthly Budget
              </p>
              <div className="rounded-md bg-white shadow-md mt-3">
                <p className="text-primary text-3xl font-bold px-5 py-2 md:py-4 md:px-6 md:text-4xl">
                  ₦120,000
                </p>
              </div>
            </div>
          </div>
          <div className="mt-7 px-6">
            <TabList />
            <div className="max-w-fit mx-auto md:mx-0 mt-9 ">
              <div className="relative">
                <Chart width={150} height={150} />
                <p className="text-3xl text-primary-lightBlue font-bold absolute top-[40%] left-1/3">
                  45%
                </p>
              </div>
              <div className="mt-5 text-center space-y-1">
                <p className="text-primary-gray text-sm">Amount spent so far</p>
                <p className="text-base text-primary-lightBlue">
                  <span className="font-semibold">₦50,000</span>/₦120,000
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-primary text-xl font-semibold px-6 py-4">
            Category Breakdown
          </h2>
          <div className="rounded-md bg-[#FCFEFF] space-y-5 max-h-36 md:max-h-max overflow-y-auto">
            <CategoryCard
              Icon={FoodIcon}
              type="Food and Drink"
              amount={"42,000"}
              spent={"20,000"}
            />
            <CategoryCard
              Icon={SavingsIcon}
              type="Savings"
              amount={"10,000"}
              spent={"24,000"}
            />
            <CategoryCard
              Icon={FoodIcon}
              type="Food and Drink"
              amount={"42,000"}
              spent={"20,000"}
            />
          </div>
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
          className={`before:scale-x-0  ${
            activeTab === index
              ? "text-primary-lightBlue before:scale-x-100 before:duration-300 duration-700 before:content-[''] before:w-8 before:h-1 before:bg-primary-lightBlue before:absolute before:-bottom-[3px] relative"
              : "text-primary-gray"
          }`}>
          {tab}
        </li>
      ))}
    </ul>
  );
}

function CategoryCard({
  Icon,
  type,
  amount,
  spent,
}: {
  Icon: React.JSXElementConstructor<{ width: number; height: number }>;
  type: string;
  amount: number | string;
  spent: number | string;
}) {
  return (
    <div className="flex  items-center w-full justify-between px-6">
      <div className="flex gap-4 items-center">
        <Icon width={60} height={60} />
        <div>
          <p className="text-primary text-sm font-semibold">{type}</p>
          <p className="text-primary-gray text-xs">₦{amount}</p>
        </div>
      </div>
      <p className="text-primary-gray text-base">
        <span className="text-primary">₦{amount}</span>/₦{spent}
      </p>
    </div>
  );
}
