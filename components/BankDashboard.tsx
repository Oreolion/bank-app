"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  CreditCard,
  DollarSign,
  Download,
  FileText,
  Search,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import {
  Button,
} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const transactions = [
  { id: 1, description: "Grocery Store", date: "Today, 2:30 PM", amount: "120.50", type: "debit" },
  { id: 2, description: "Direct Deposit - Payroll", date: "Yesterday", amount: "1,200.00", type: "credit" },
  { id: 3, description: "Electric Bill", date: "Mar 28, 2023", amount: "85.75", type: "debit" },
  { id: 4, description: "Amazon", date: "Mar 25, 2023", amount: "65.28", type: "debit" },
  { id: 5, description: "Freelance Payment", date: "Mar 15, 2023", amount: "2,450.00", type: "credit" },
];

const scheduledPayments = [
  { id: 1, description: "Rent Payment", date: "Apr 1, 2023", amount: "1,200.00" },
  { id: 2, description: "Car Insurance", date: "Apr 5, 2023", amount: "145.30" },
  { id: 3, description: "Netflix Subscription", date: "Apr 7, 2023", amount: "14.99" },
];

const upcomingBills = [
  { id: 1, description: "Internet Service", dueDate: "Apr 15, 2023", amount: "79.99" },
  { id: 2, description: "Water & Sewage", dueDate: "Apr 20, 2023", amount: "65.50" },
  { id: 3, description: "Phone Bill", dueDate: "Apr 22, 2023", amount: "89.99" },
];

const spendingCategories = [
  { name: "Groceries", amount: "450.25", percentage: 45, color: "bg-blue-500" },
  { name: "Dining", amount: "320.80", percentage: 32, color: "bg-purple-500" },
  { name: "Shopping", amount: "180.50", percentage: 18, color: "bg-green-500" },
  { name: "Entertainment", amount: "120.30", percentage: 12, color: "bg-amber-500" },
  { name: "Transportation", amount: "95.75", percentage: 9, color: "bg-red-500" },
];

const quickActions = [
  {
    name: "Transfer Money",
    icon: DollarSign,
    bgColor: "bg-blue-900/30",
    iconColor: "text-blue-400",
  },
  {
    name: "Pay Bills",
    icon: FileText,
    bgColor: "bg-purple-900/30",
    iconColor: "text-purple-400",
  },
  {
    name: "Mobile Deposit",
    icon: CreditCard,
    bgColor: "bg-green-900/30",
    iconColor: "text-green-400",
  },
  {
    name: "Find ATM",
    icon: Search,
    bgColor: "bg-amber-900/30",
    iconColor: "text-amber-400",
  },
];

const financialGoals = [
  {
    id: 1,
    name: "Emergency Fund",
    current: 8500,
    target: 10000,
    icon: DollarSign,
    iconBg: "bg-blue-900/30",
    iconColor: "text-blue-400",
    progressColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    name: "Vacation",
    current: 2300,
    target: 5000,
    icon: Calendar,
    iconBg: "bg-purple-900/30",
    iconColor: "text-purple-400",
    progressColor: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "New Car",
    current: 12000,
    target: 30000,
    icon: CreditCard,
    iconBg: "bg-green-900/30",
    iconColor: "text-green-400",
    progressColor: "bg-gradient-to-r from-green-500 to-emerald-500",
  },
];

export function BankDashboard() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, John</h1>
          <p className="text-sm text-slate-400">Here's what's happening with your accounts today.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 border-slate-700 bg-slate-800/50 hover:bg-slate-700">
            <Download className="mr-2 h-3.5 w-3.5" />
            Export
          </Button>
          <Button
            size="sm"
            className="h-9 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-900/20"
          >
            <DollarSign className="mr-2 h-3.5 w-3.5" />
            Transfer Money
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="overflow-hidden border-slate-700 bg-slate-900 shadow-md">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-900">
                <DollarSign className="h-3 w-3 text-blue-400" />
              </div>
              Checking Account
            </CardTitle>
            <CardDescription>**** 4567</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,456.78</div>
            <p className="text-xs text-slate-400">Available balance</p>
            <div className="mt-3 flex items-center text-xs text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+2.5% from last month</span>
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-800 pt-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-full justify-start px-2 text-blue-400 hover:bg-blue-950/30 hover:text-blue-300"
            >
              View account details
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-slate-700 bg-slate-900 shadow-md">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-900">
                <DollarSign className="h-3 w-3 text-purple-400" />
              </div>
              Savings Account
            </CardTitle>
            <CardDescription>**** 7890</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,678.90</div>
            <p className="text-xs text-slate-400">Available balance</p>
            <div className="mt-3 flex items-center text-xs text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+4.2% from last month</span>
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-800 pt-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-full justify-start px-2 text-purple-400 hover:bg-purple-950/30 hover:text-purple-300"
            >
              View account details
            </Button>
          </CardFooter>
        </Card>

        <Card className="overflow-hidden border-slate-700 bg-slate-900 shadow-md">
          <div className="absolute right-0 top-0 h-16 w-16 translate-x-4 -translate-y-4 rotate-45 bg-gradient-to-br from-red-600/20 to-orange-600/20"></div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-900">
                <CreditCard className="h-3 w-3 text-red-400" />
              </div>
              Credit Card
            </CardTitle>
            <CardDescription>**** 1234</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,345.67</div>
            <p className="text-xs text-slate-400">Current balance</p>
            <div className="mt-3 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span>Credit limit: $10,000.00</span>
                <span>23% used</span>
              </div>
              <Progress
                value={23}
                className="h-1.5 bg-slate-700"
                indicatorClassName="bg-gradient-to-r from-red-500 to-orange-500"
              />
            </div>
          </CardContent>
          <CardFooter className="border-t border-slate-800 pt-4">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-full justify-start px-2 text-red-400 hover:bg-red-950/30 hover:text-red-300"
            >
              View account details
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Card className="border-slate-700 bg-slate-900 shadow-md">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Financial Goals</CardTitle>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Goal</span>
            </Button>
          </div>
          <CardDescription>Track your progress towards financial freedom</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {financialGoals.map((goal) => (
              <div key={goal.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full ${goal.iconBg}`}>
                      <goal.icon className={`h-4 w-4 ${goal.iconColor}`} />
                    </div>
                    <div>
                      <div className="font-medium">{goal.name}</div>
                      <div className="text-xs text-slate-400">
                        ${goal.current.toLocaleString()} of ${goal.target.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">{Math.round((goal.current / goal.target) * 100)}%</div>
                </div>
                <Progress
                  value={(goal.current / goal.target) * 100}
                  className="h-2 bg-slate-700"
                  indicatorClassName={goal.progressColor}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="transactions" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList className="bg-slate-800/50 p-1 border border-slate-700 rounded-md">
            <TabsTrigger
              value="transactions"
              className="rounded-sm data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50"
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="scheduled"
              className="rounded-sm data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50"
            >
              Scheduled
            </TabsTrigger>
            <TabsTrigger
              value="bills"
              className="rounded-sm data-[state=active]:bg-slate-700 data-[state=active]:text-slate-50"
            >
              Bills
            </TabsTrigger>
          </TabsList>
          <Button variant="outline" size="sm" className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700">
            View All
          </Button>
        </div>
        <TabsContent value="transactions" className="mt-4">
          <Card className="border-slate-700 bg-slate-900 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your recent account activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          transaction.type === "credit" ? "bg-green-900/30" : "bg-red-900/30"
                        }`}
                      >
                        {transaction.type === "credit" ? (
                          <ArrowUpRight className="h-5 w-5 text-green-400" />
                        ) : (
                          <ArrowDownRight className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-xs text-slate-400">{transaction.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`text-sm font-medium ${
                          transaction.type === "credit" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {transaction.type === "credit" ? "+" : "-"}${transaction.amount}
                      </div>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="scheduled" className="mt-4">
          <Card className="border-slate-700 bg-slate-900 shadow-md">
            <CardHeader>
              <CardTitle>Scheduled Payments</CardTitle>
              <CardDescription>Your upcoming scheduled payments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledPayments.map((payment) => (
                  <div
                    key={payment.id}
                    className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30">
                        <Calendar className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">{payment.description}</div>
                        <div className="text-xs text-slate-400">{payment.date}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">${payment.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bills" className="mt-4">
          <Card className="border-slate-700 bg-slate-900 shadow-md">
            <CardHeader>
              <CardTitle>Upcoming Bills</CardTitle>
              <CardDescription>Your upcoming bills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingBills.map((bill) => (
                  <div
                    key={bill.id}
                    className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-slate-800/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-900/30">
                        <FileText className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <div className="font-medium">{bill.description}</div>
                        <div className="text-xs text-slate-400">Due on {bill.dueDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm font-medium">${bill.amount}</div>
                      <Button
                        size="sm"
                        className="h-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-sm shadow-indigo-900/20"
                      >
                        Pay Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-slate-700 bg-slate-900 shadow-md">
          <CardHeader>
            <CardTitle>Spending Summary</CardTitle>
            <CardDescription>Your spending for this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {spendingCategories.map((category) => (
                <div key={category.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`h-3 w-3 rounded-full ${category.color}`}></div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <span>${category.amount}</span>
                  </div>
                  <Progress
                    value={category.percentage}
                    className="h-2 bg-slate-700"
                    indicatorClassName={category.color}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900 shadow-md">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used services</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <Button
                  key={action.name}
                  variant="outline"
                  className="h-auto flex-col gap-2 p-4 border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:text-slate-50 transition-all"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${action.bgColor}`}>
                    <action.icon className={`h-5 w-5 ${action.iconColor}`} />
                  </div>
                  <span>{action.name}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default BankDashboard;