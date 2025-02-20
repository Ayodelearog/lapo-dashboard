// app/page.tsx
"use client";

import React from "react";
import { DateDisplay } from "./_components/DateDisplay";
import { QuickAccessCard } from "./_components/QuickAccessCard";
import { MetricCard } from "./_components/MetricCard";
import { MonthlyIssuanceChart } from "./_components/MonthlyIssuanceChart";
import { RecentCardRequests } from "./_components/RecentCardRequests";
import { WeeklyIncomeChart } from "./_components/WeeklyIncomeChart";
import { CardStatusDistribution } from "./_components/CardStatusDistribution";

export default function DashboardPage() {
  // Quick access items
  const quickAccessItems = [
    {
      title: "Manage a Card",
      icon: "credit-card-shield",
      href: "/cards/manage",
    },
    {
      title: "Issue Instant Card",
      icon: "credit-card-02",
      href: "/cards/issue-instant",
    },
    {
      title: "Issue Personalized Card",
      icon: "credit-card-edit",
      href: "/cards/issue-personalized",
    },
    {
      title: "Review Card Requests",
      icon: "credit-card-plus",
      href: "/cards/requests",
    },
  ];

  return (
    <div className=" ">
      {/* Welcome section */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="text-[18px] font-bold leading-6 text-[#121212]">
            Hi Nazeer, what would you like to do today?
          </h2>
          <p className="font-regular text-[12px] text-[#121212]">
            {" "}
            <span className="font-medium">Last login:</span> 26/11/2024 14:39:58
          </p>
        </div>
        <DateDisplay />
      </div>

      {/* Quick access cards */}
      <section className="mb-3 rounded-[10px] border border-[#E2E2E2] bg-white p-4">
        <h3 className="mb-4 text-base font-medium leading-[18px] text-[#121212]">
          Your Quick Access
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {quickAccessItems.map((item, index) => (
            <QuickAccessCard
              key={index}
              title={item.title}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </section>

      {/* Analytics section */}
      <section className="mb-2">
        <div className="flex w-full items-center gap-2 mb-3">
          <h3 className=" text-lg font-bold text-black">Analytics</h3>
          <div className="h-[1px] w-full bg-[#D0D5DD]"></div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <MetricCard
            title="Total Active Cards"
            value="26,478"
            icon="credit-card-check"
            iconBgColor="bg-green-100"
            trend={{
              value: "+9%",
              isPositive: true,
              label: "this month",
            }}
          />

          <MetricCard
            title="Total Personalized Cards"
            value="15,703"
            icon="personalized-cards"
            iconBgColor="bg-purple-100"
            trend={{
              value: "8.5%",
              isPositive: true,
              label: "this month",
            }}
          />

          <MetricCard
            title="Today's Revenue"
            value="₦9.3M"
            icon="todays-rev"
            iconBgColor="bg-blue-100"
            trend={{
              value: "+6%",
              isPositive: true,
              label: "vs yesterday",
            }}
          />

          <MetricCard
            title="Pending Requests"
            value="38"
            icon="pending-requests"
            iconBgColor="bg-amber-100"
            attention={true}
          />
        </div>
      </section>

      {/* Charts and tables section */}
      <div className="grid grid-cols-2 gap-2">
        <MonthlyIssuanceChart />
        <RecentCardRequests />
        <WeeklyIncomeChart />
        <CardStatusDistribution />
      </div>
    </div>
  );
}
