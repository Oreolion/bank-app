"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  Download,
  Filter,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const categories = [
  "Shopping",
  "Dining",
  "Groceries",
  "Entertainment",
  "Travel",
  "Healthcare",
  "Utilities",
  "Income",
  "Transfer",
  "Subscription",
  "Education",
  "Other",
];

const allTransactions = [
  {
    id: 1,
    description: "Grocery Store",
    date: "Today, 2:30 PM",
    amount: "120.50",
    type: "debit",
    category: "Groceries",
    status: "Completed",
  },
  {
    id: 2,
    description: "Direct Deposit - Payroll",
    date: "Yesterday",
    amount: "1,200.00",
    type: "credit",
    category: "Income",
    status: "Completed",
  },
  {
    id: 3,
    description: "Electric Bill",
    date: "Mar 28, 2023",
    amount: "85.75",
    type: "debit",
    category: "Utilities",
    status: "Completed",
  },
  // ... (rest of the transactions from your original data)
];

const recurringTransactions = [
  {
    id: 1,
    description: "Netflix Subscription",
    amount: "14.99",
    type: "debit",
    frequency: "Monthly",
    nextDate: "Apr 15, 2023",
  },
  {
    id: 2,
    description: "Salary Deposit",
    amount: "3,500.00",
    type: "credit",
    frequency: "Bi-weekly",
    nextDate: "Apr 14, 2023",
  },
  {
    id: 3,
    description: "Rent Payment",
    amount: "1,200.00",
    type: "debit",
    frequency: "Monthly",
    nextDate: "Apr 1, 2023",
  },
  {
    id: 4,
    description: "Car Insurance",
    amount: "89.99",
    type: "debit",
    frequency: "Monthly",
    nextDate: "Apr 5, 2023",
  },
];

export function TransactionsPage() {
  const [dateRange, setDateRange] = useState("30days");
  const [transactionType, setTransactionType] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
          <p className="text-sm text-slate-400">
            View and manage all your account transactions
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-9 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter className="mr-2 h-3.5 w-3.5" />
            Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-9 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
          >
            <Download className="mr-2 h-3.5 w-3.5" />
            Export
          </Button>
        </div>
      </div>

      {isFilterOpen && (
        <Card className="border-slate-700 bg-slate-900 shadow-md animate-in fade-in">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Filter Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <Label>Date Range</Label>
                <Select value={dateRange} onValueChange={setDateRange}>
                  <SelectTrigger className="w-full border-slate-700 bg-slate-800/50">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-900">
                    <SelectItem value="7days">Last 7 days</SelectItem>
                    <SelectItem value="30days">Last 30 days</SelectItem>
                    <SelectItem value="90days">Last 90 days</SelectItem>
                    <SelectItem value="year">This year</SelectItem>
                    <SelectItem value="custom">Custom range</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Transaction Type</Label>
                <Select value={transactionType} onValueChange={setTransactionType}>
                  <SelectTrigger className="w-full border-slate-700 bg-slate-800/50">
                    <SelectValue placeholder="Transaction type" />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-900">
                    <SelectItem value="all">All transactions</SelectItem>
                    <SelectItem value="deposits">Deposits only</SelectItem>
                    <SelectItem value="withdrawals">Withdrawals only</SelectItem>
                    <SelectItem value="transfers">Transfers only</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Amount Range</Label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="Min"
                    className="border-slate-700 bg-slate-800/50"
                  />
                  <span>-</span>
                  <Input
                    type="number"
                    placeholder="Max"
                    className="border-slate-700 bg-slate-800/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Account</Label>
                <Select defaultValue="checking">
                  <SelectTrigger className="w-full border-slate-700 bg-slate-800/50">
                    <SelectValue placeholder="Select account" />
                  </SelectTrigger>
                  <SelectContent className="border-slate-700 bg-slate-900">
                    <SelectItem value="checking">Checking Account</SelectItem>
                    <SelectItem value="savings">Savings Account</SelectItem>
                    <SelectItem value="credit">Credit Card</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator className="my-4 bg-slate-800" />

            <div className="space-y-3">
              <Label>Categories</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category}`} />
                    <Label htmlFor={`category-${category}`} className="text-sm">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t border-slate-800 pt-4">
            <Button
              variant="outline"
              className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
            >
              Reset Filters
            </Button>
            <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-900/20">
              Apply Filters
            </Button>
          </CardFooter>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-slate-700 bg-slate-900 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-400">+$7,892.54</div>
            <div className="mt-1 flex items-center text-xs text-green-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+12.5% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-400">-$5,367.89</div>
            <div className="mt-1 flex items-center text-xs text-red-400">
              <ArrowDownRight className="mr-1 h-3 w-3" />
              <span>+8.3% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-700 bg-slate-900 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Net Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-400">+$2,524.65</div>
            <div className="mt-1 flex items-center text-xs text-blue-400">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              <span>+18.7% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-700 bg-slate-900 shadow-md">
        <CardHeader>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>Showing 12 of 156 transactions</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Input
                placeholder="Search transactions..."
                className="w-full sm:w-64 border-slate-700 bg-slate-800/50"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-slate-700">
            <div className="grid grid-cols-12 gap-2 border-b border-slate-700 bg-slate-800/50 p-3 text-xs font-medium text-slate-400">
              <div className="col-span-5 md:col-span-4">DESCRIPTION</div>
              <div className="col-span-3 md:col-span-2">DATE</div>
              <div className="col-span-2 hidden md:block">CATEGORY</div>
              <div className="col-span-2 text-right">STATUS</div>
              <div className="col-span-2 text-right">AMOUNT</div>
            </div>

            <div className="divide-y divide-slate-800">
              {allTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="grid grid-cols-12 gap-2 p-3 text-sm hover:bg-slate-800/50"
                >
                  <div className="col-span-5 md:col-span-4 flex items-center gap-2">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        transaction.type === "credit"
                          ? "bg-green-900/30"
                          : "bg-red-900/30"
                      }`}
                    >
                      {transaction.type === "credit" ? (
                        <ArrowUpRight className="h-4 w-4 text-green-400" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-400" />
                      )}
                    </div>
                    <div className="truncate">{transaction.description}</div>
                  </div>
                  <div className="col-span-3 md:col-span-2 flex items-center text-slate-400">
                    {transaction.date}
                  </div>
                  <div className="col-span-2 hidden items-center text-slate-400 md:flex">
                    {transaction.category}
                  </div>
                  <div className="col-span-2 flex items-center justify-end">
                    <Badge
                      variant="outline"
                      className={`${
                        transaction.status === "Completed"
                          ? "border-green-500/20 bg-green-500/10 text-green-400"
                          : transaction.status === "Pending"
                          ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                          : "border-slate-500/20 bg-slate-500/10 text-slate-400"
                      }`}
                    >
                      {transaction.status}
                    </Badge>
                  </div>
                  <div
                    className={`col-span-2 flex items-center justify-end font-medium ${
                      transaction.type === "credit"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}$
                    {transaction.amount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6">
          <div className="text-sm text-slate-400">
            Showing <span className="font-medium">1</span> to{" "}
            <span className="font-medium">12</span> of{" "}
            <span className="font-medium">156</span> transactions
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
              disabled
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Card className="border-slate-700 bg-slate-900 shadow-md">
        <CardHeader>
          <CardTitle>Recurring Transactions</CardTitle>
          <CardDescription>Regular payments and deposits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recurringTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between rounded-lg border border-slate-700 p-4"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      transaction.type === "credit"
                        ? "bg-green-900/30"
                        : "bg-red-900/30"
                    }`}
                  >
                    <Calendar className="h-5 w-5 text-slate-300" />
                  </div>
                  <div>
                    <div className="font-medium">{transaction.description}</div>
                    <div className="text-xs text-slate-400">
                      {transaction.frequency} • Next: {transaction.nextDate}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={`text-sm font-medium ${
                      transaction.type === "credit"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {transaction.type === "credit" ? "+" : "-"}$
                    {transaction.amount}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                  >
                    Manage
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default TransactionsPage;