"use client"

import { useState } from "react"
import { ArrowDownRight, ArrowUpRight, Bell, Calendar, ChevronDown, CreditCard, DollarSign, Download, FileText, Filter, HelpCircle, Landmark, LayoutDashboard, LogOut, Menu, MessageSquare, MoreHorizontal, PieChart, Plus, Search, Settings, Shield, Target, Trash2, User, X } from 'lucide-react'
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function TransactionsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [dateRange, setDateRange] = useState("30days")
  const [transactionType, setTransactionType] = useState("all")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-slate-950 to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 backdrop-blur-md md:px-6">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 border-r border-slate-800 p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2 border-b border-slate-800 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                    <Landmark className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-bold">Nova Bank</span>
                </div>
                <ScrollArea className="flex-1">
                  <div className="p-2">
                    <div className="mb-4 px-4 py-2">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src="/placeholder-user.jpg" />
                          <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">John Doe</div>
                          <div className="text-xs text-slate-400">Premium Member</div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 px-4 text-xs font-medium text-slate-400">MENU</div>
                    <nav className="flex flex-col gap-1">
                      {sidebarItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors hover:bg-slate-800/70 ${
                            item.href === "/transactions" ? "bg-slate-800 text-white" : "text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            {item.title}
                          </div>
                          {item.badge && (
                            <Badge variant="secondary" className="bg-indigo-900 text-indigo-300">
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </nav>
                    <div className="my-2 px-4 pt-4 text-xs font-medium text-slate-400">SETTINGS</div>
                    <nav className="flex flex-col gap-1">
                      <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
                      >
                        <Settings className="h-4 w-4" />
                        Settings
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
                      >
                        <HelpCircle className="h-4 w-4" />
                        Help Center
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
                      >
                        <Shield className="h-4 w-4" />
                        Privacy & Security
                      </Link>
                      <Link
                        href="#"
                        className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-red-400 transition-colors hover:bg-red-950/30"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </Link>
                    </nav>
                  </div>
                </ScrollArea>
              </div>
            </SheetContent>
          </Sheet>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
              <Landmark className="h-4 w-4 text-white" />
            </div>
            <span className="hidden text-lg font-bold md:inline-block">Nova Bank</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 border-slate-700 bg-slate-800/50 focus-visible:ring-slate-600 md:w-80"
              />
            </div>
          </form>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="relative border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:text-slate-100"
                  onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                  <span className="sr-only">Notifications</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Notifications</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                    JD
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 border-slate-700 bg-slate-900 p-2">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-slate-400">john.doe@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="rounded-md focus:bg-slate-800">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md focus:bg-slate-800">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-md focus:bg-slate-800">
                <HelpCircle className="mr-2 h-4 w-4" />
                <span>Help</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-slate-700" />
              <DropdownMenuItem className="rounded-md text-red-400 focus:bg-red-950/50">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Notifications panel */}
      {isNotificationsOpen && (
        <div className="fixed right-4 top-16 z-50 w-80 animate-in fade-in slide-in-from-top-5 md:right-6">
          <Card className="border-slate-700 bg-slate-900 shadow-xl shadow-black/20">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle>Notifications</CardTitle>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsNotificationsOpen(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>You have 3 unread notifications</CardDescription>
            </CardHeader>
            <CardContent className="max-h-[calc(100vh-12rem)] overflow-auto p-0">
              <div className="flex flex-col divide-y divide-slate-800">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex gap-3 p-4">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${notification.iconBg}`}
                    >
                      <notification.icon className={`h-4 w-4 ${notification.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-slate-400">{notification.description}</p>
                      <p className="mt-1 text-xs text-slate-500">{notification.time}</p>
                    </div>
                    {notification.unread && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="border-t border-slate-800 p-3">
              <Button variant="ghost" className="w-full text-sm">
                View all notifications
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}

      <div className="flex flex-1">
        {/* Sidebar (desktop) */}
        <aside className="hidden w-64 border-r border-slate-800 bg-slate-950 lg:block">
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-3 border-b border-slate-800 p-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
                  JD
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">John Doe</div>
                <div className="text-xs text-slate-400">Premium Member</div>
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-2">
                <div className="mb-2 px-4 text-xs font-medium text-slate-400">MENU</div>
                <nav className="flex flex-col gap-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors hover:bg-slate-800/70 ${
                        item.href === "/deposit" ? "bg-slate-800 text-white" : "text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </div>
                      {item.badge && (
                        <Badge variant="secondary" className="bg-indigo-900 text-indigo-300">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>
                <div className="my-2 px-4 pt-4 text-xs font-medium text-slate-400">SETTINGS</div>
                <nav className="flex flex-col gap-1">
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
                  >
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
                  >
                    <HelpCircle className="h-4 w-4" />
                    Help Center
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 rounded-md px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-slate-800"
                  >
                    <Shield className="h-4 w-4" />
                    Privacy & Security
                  </Link>
                </nav>
              </div>
            </ScrollArea>
            <div className="border-t border-slate-800 p-4">
              <Button
                variant="outline"
                className="w-full justify-start gap-2 text-red-400 border-slate-700 bg-slate-800/50 hover:bg-red-950/30"
              >
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto p-4 md:p-6">
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
                <Button variant="outline" size="sm" className="h-9 border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Export
                </Button>
              </div>
            </div>

            {/* Filter panel */}
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
                          <Label htmlFor={`category-${category}`} className="text-sm">{category}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-slate-800 pt-4">
                  <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                    Reset Filters
                  </Button>
                  <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-900/20">
                    Apply Filters
                  </Button>
                </CardFooter>
              </Card>
            )}

            {/* Transaction Summary */}
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

            {/* Transactions Table */}
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
                      <div key={transaction.id} className="grid grid-cols-12 gap-2 p-3 text-sm hover:bg-slate-800/50">
                        <div className="col-span-5 md:col-span-4 flex items-center gap-2">
                          <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            transaction.type === "credit" ? "bg-green-900/30" : "bg-red-900/30"
                          }`}>
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
                          <Badge variant="outline" className={`${
                            transaction.status === "Completed" 
                              ? "border-green-500/20 bg-green-500/10 text-green-400" 
                              : transaction.status === "Pending"
                              ? "border-amber-500/20 bg-amber-500/10 text-amber-400"
                              : "border-slate-500/20 bg-slate-500/10 text-slate-400"
                          }`}>
                            {transaction.status}
                          </Badge>
                        </div>
                        <div className={`col-span-2 flex items-center justify-end font-medium ${
                          transaction.type === "credit" ? "text-green-400" : "text-red-400"
                        }`}>
                          {transaction.type === "credit" ? "+" : "-"}${transaction.amount}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t border-slate-800 pt-6">
                <div className="text-sm text-slate-400">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">12</span> of{" "}
                  <span className="font-medium">156</span> transactions
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>

            {/* Recurring Transactions */}
            <Card className="border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <CardTitle>Recurring Transactions</CardTitle>
                <CardDescription>Regular payments and deposits</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recurringTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between rounded-lg border border-slate-700 p-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          transaction.type === "credit" ? "bg-green-900/30" : "bg-red-900/30"
                        }`}>
                          <Calendar className="h-5 w-5 text-slate-300" />
                        </div>
                        <div>
                          <div className="font-medium">{transaction.description}</div>
                          <div className="text-xs text-slate-400">{transaction.frequency} • Next: {transaction.nextDate}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className={`text-sm font-medium ${
                          transaction.type === "credit" ? "text-green-400" : "text-red-400"
                        }`}>
                          {transaction.type === "credit" ? "+" : "-"}${transaction.amount}
                        </div>
                        <Button variant="outline" size="sm" className="h-8 border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                          Manage
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

const sidebarItems = [
    { title: "Dashboard", icon: LayoutDashboard, badge: null, url: "/" },
    { title: "Accounts", icon: Landmark, badge: null, url: "/account", },
    { title: "Transactions", icon: DollarSign, badge: "12", url: "/transactions", },
    { title: "Deposits", icon: PieChart, badge: null, url: "/deposit", },
    { title: "Withdraws", icon: Target, badge: null, url: "/withdrawals", },
  ]

const notifications = [
  {
    id: 1,
    title: "Low Balance Alert",
    description: "Your checking account balance is below $500",
    time: "10 minutes ago",
    icon: Bell,
    iconBg: "bg-red-900/30",
    iconColor: "text-red-400",
    unread: true,
  },
  {
    id: 2,
    title: "New Transaction",
    description: "You received a deposit of $1,200.00",
    time: "2 hours ago",
    icon: DollarSign,
    iconBg: "bg-green-900/30",
    iconColor: "text-green-400",
    unread: true,
  },
  {
    id: 3,
    title: "Bill Due Soon",
    description: "Your electric bill is due in 3 days",
    time: "Yesterday",
    icon: FileText,
    iconBg: "bg-amber-900/30",
    iconColor: "text-amber-400",
    unread: true,
  },
  {
    id: 4,
    title: "Security Alert",
    description: "New login detected from Chrome on Windows",
    time: "2 days ago",
    icon: Shield,
    iconBg: "bg-blue-900/30",
    iconColor: "text-blue-400",
    unread: false,
  },
]

const categories = [
  "Shopping", "Dining", "Groceries", "Entertainment", 
  "Travel", "Healthcare", "Utilities", "Income",
  "Transfer", "Subscription", "Education", "Other"
]

const allTransactions = [
  { 
    id: 1, 
    description: "Grocery Store", 
    date: "Today, 2:30 PM", 
    amount: "120.50", 
    type: "debit",
    category: "Groceries",
    status: "Completed"
  },
  { 
    id: 2, 
    description: "Direct Deposit - Payroll", 
    date: "Yesterday", 
    amount: "1,200.00", 
    type: "credit",
    category: "Income",
    status: "Completed"
  },
  { 
    id: 3, 
    description: "Electric Bill", 
    date: "Mar 28, 2023", 
    amount: "85.75", 
    type: "debit",
    category: "Utilities",
    status: "Completed"
  },
  { 
    id: 4, 
    description: "Amazon", 
    date: "Mar 25, 2023", 
    amount: "65.28", 
    type: "debit",
    category: "Shopping",
    status: "Completed"
  },
  { 
    id: 5, 
    description: "Freelance Payment", 
    date: "Mar 15, 2023", 
    amount: "2,450.00", 
    type: "credit",
    category: "Income",
    status: "Completed"
  },
  { 
    id: 6, 
    description: "Transfer to Savings", 
    date: "Mar 10, 2023", 
    amount: "500.00", 
    type: "debit",
    category: "Transfer",
    status: "Completed"
  },
  { 
    id: 7, 
    description: "Restaurant Payment", 
    date: "Mar 8, 2023", 
    amount: "78.45", 
    type: "debit",
    category: "Dining",
    status: "Completed"
  },
  { 
    id: 8, 
    description: "ATM Withdrawal", 
    date: "Mar 5, 2023", 
    amount: "200.00", 
    type: "debit",
    category: "Cash",
    status: "Completed"
  },
  { 
    id: 9, 
    description: "Spotify Subscription", 
    date: "Mar 3, 2023", 
    amount: "9.99", 
    type: "debit",
    category: "Subscription",
    status: "Completed"
  },
  { 
    id: 10, 
    description: "Gas Station", 
    date: "Mar 2, 2023", 
    amount: "45.33", 
    type: "debit",
    category: "Transportation",
    status: "Completed"
  },
  { 
    id: 11, 
    description: "Mobile Phone Bill", 
    date: "Mar 1, 2023", 
    amount: "89.99", 
    type: "debit",
    category: "Utilities",
    status: "Pending"
  },
  { 
    id: 12, 
    description: "Gym Membership", 
    date: "Mar 1, 2023", 
    amount: "50.00", 
    type: "debit",
    category: "Health",
    status: "Pending"
  },
]

const recurringTransactions = [
  {
    id: 1,
    description: "Netflix Subscription",
    amount: "14.99",
    type: "debit",
    frequency: "Monthly",
    nextDate: "Apr 15, 2023"
  },
  {
    id: 2,
    description: "Salary Deposit",
    amount: "3,500.00",
    type: "credit",
    frequency: "Bi-weekly",
    nextDate: "Apr 14, 2023"
  },
  {
    id: 3,
    description: "Rent Payment",
    amount: "1,200.00",
    type: "debit",
    frequency: "Monthly",
    nextDate: "Apr 1, 2023"
  },
  {
    id: 4,
    description: "Car Insurance",
    amount: "89.99",
    type: "debit",
    frequency: "Monthly",
    nextDate: "Apr 5, 2023"
  }
]
