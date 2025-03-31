"use client";

import { useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  CreditCard,
  DollarSign,
  Download,
  Eye,
  EyeOff,
  FileText,
  HelpCircle,
  Landmark,
  LayoutDashboard,
  Lock,
  LogOut,
  Menu,
  MessageSquare,
  MoreHorizontal,
  PieChart,
  Search,
  Settings,
  Shield,
  Target,
  Trash2,
  Upload,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function AccountPage() {
  //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [showAccountNumber, setShowAccountNumber] = useState(false);
  const [showRoutingNumber, setShowRoutingNumber] = useState(false);
  const [dateRange, setDateRange] = useState("30days");
  const [transactionType, setTransactionType] = useState("all");

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
            <SheetContent
              side="left"
              className="w-72 border-r border-slate-800 p-0"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center gap-2 border-b border-slate-800 p-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600">
                    <Landmark className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-lg font-bold">AFFFCU</span>
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
                          <div className="text-xs text-slate-400">
                            Premium Member
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 px-4 text-xs font-medium text-slate-400">
                      MENU
                    </div>
                    <nav className="flex flex-col gap-1">
                      {sidebarItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors hover:bg-slate-800/70 ${
                            item.url === "/account"
                              ? "bg-slate-800 text-white"
                              : "text-slate-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="h-4 w-4" />
                            {item.title}
                          </div>
                          {item.badge && (
                            <Badge
                              variant="secondary"
                              className="bg-indigo-900 text-indigo-300"
                            >
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      ))}
                    </nav>
                    <div className="my-2 px-4 pt-4 text-xs font-medium text-slate-400">
                      SETTINGS
                    </div>
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
            <span className="hidden text-lg font-bold md:inline-block">
              AFFFCU
            </span>
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
            <DropdownMenuContent
              align="end"
              className="w-56 border-slate-700 bg-slate-900 p-2"
            >
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setIsNotificationsOpen(false)}
                >
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
                      <notification.icon
                        className={`h-4 w-4 ${notification.iconColor}`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                        {notification.title}
                      </p>
                      <p className="text-xs text-slate-400">
                        {notification.description}
                      </p>
                      <p className="mt-1 text-xs text-slate-500">
                        {notification.time}
                      </p>
                    </div>
                    {notification.unread && (
                      <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    )}
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
                <div className="mb-2 px-4 text-xs font-medium text-slate-400">
                  MENU
                </div>
                <nav className="flex flex-col gap-1">
                  {sidebarItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors hover:bg-slate-800/70 ${
                        item.url === "/deposit"
                          ? "bg-slate-800 text-white"
                          : "text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-4 w-4" />
                        {item.title}
                      </div>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="bg-indigo-900 text-indigo-300"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  ))}
                </nav>
                <div className="my-2 px-4 pt-4 text-xs font-medium text-slate-400">
                  SETTINGS
                </div>
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
                <h1 className="text-2xl font-bold tracking-tight">
                  Account Details
                </h1>
                <p className="text-sm text-slate-400">
                  Manage your checking account and view transaction history
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-9 border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  <Download className="mr-2 h-3.5 w-3.5" />
                  Export Statement
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

            {/* Account Overview */}
            <Card className="overflow-hidden border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <CardTitle>Checking Account Overview</CardTitle>
                <CardDescription>
                  Account details and current balance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-slate-400">
                        Account Name
                      </h3>
                      <p className="text-lg font-semibold">
                        John Doe - Primary Checking
                      </p>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-400">
                        Account Number
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">
                          {showAccountNumber ? "****4567" : "••••••••4567"}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            setShowAccountNumber(!showAccountNumber)
                          }
                        >
                          {showAccountNumber ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-400">
                        Routing Number
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">
                          {showRoutingNumber ? "021000021" : "•••••••••"}
                        </p>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            setShowRoutingNumber(!showRoutingNumber)
                          }
                        >
                          {showRoutingNumber ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-slate-400">
                        Account Type
                      </h3>
                      <p className="text-lg font-semibold">Premium Checking</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-4 border border-slate-700">
                      <h3 className="text-sm font-medium text-slate-400">
                        Current Balance
                      </h3>
                      <p className="mt-1 text-3xl font-bold">$102,456.78</p>
                      <div className="mt-2 flex items-center text-sm text-green-400">
                        <ArrowUpRight className="mr-1 h-4 w-4" />
                        <span>+$1,245.30 this month</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-4 border border-slate-700">
                      <h3 className="text-sm font-medium text-slate-400">
                        Available Balance
                      </h3>
                      <p className="mt-1 text-3xl font-bold">$102,456.78</p>
                      <p className="mt-2 text-xs text-slate-400">
                        All deposits cleared
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                    <h3 className="text-sm font-medium text-slate-400">
                      Monthly Deposits
                    </h3>
                    <p className="mt-1 text-xl font-semibold text-green-400">
                      +$4,532.21
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                    <h3 className="text-sm font-medium text-slate-400">
                      Monthly Withdrawals
                    </h3>
                    <p className="mt-1 text-xl font-semibold text-red-400">
                      -$3,286.91
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-800/50 p-4 text-center">
                    <h3 className="text-sm font-medium text-slate-400">
                      Interest Earned (YTD)
                    </h3>
                    <p className="mt-1 text-xl font-semibold text-blue-400">
                      $124.56
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-2 border-t border-slate-800 pt-6">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Order New Card
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  View Statements
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  <Lock className="mr-2 h-4 w-4" />
                  Security Settings
                </Button>
              </CardFooter>
            </Card>

            {/* Transaction History */}
            <Card className="border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>Transaction History</CardTitle>
                    <CardDescription>
                      Recent account activity and transactions
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger className="w-[140px] border-slate-700 bg-slate-800/50">
                        <SelectValue placeholder="Select period" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-700 bg-slate-900">
                        <SelectItem value="7days">Last 7 days</SelectItem>
                        <SelectItem value="30days">Last 30 days</SelectItem>
                        <SelectItem value="90days">Last 90 days</SelectItem>
                        <SelectItem value="year">This year</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select
                      value={transactionType}
                      onValueChange={setTransactionType}
                    >
                      <SelectTrigger className="w-[140px] border-slate-700 bg-slate-800/50">
                        <SelectValue placeholder="Transaction type" />
                      </SelectTrigger>
                      <SelectContent className="border-slate-700 bg-slate-900">
                        <SelectItem value="all">All transactions</SelectItem>
                        <SelectItem value="deposits">Deposits only</SelectItem>
                        <SelectItem value="withdrawals">
                          Withdrawals only
                        </SelectItem>
                        <SelectItem value="transfers">
                          Transfers only
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {accountTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            transaction.type === "credit"
                              ? "bg-green-900/30"
                              : "bg-red-900/30"
                          }`}
                        >
                          {transaction.type === "credit" ? (
                            <ArrowUpRight className="h-5 w-5 text-green-400" />
                          ) : (
                            <ArrowDownRight className="h-5 w-5 text-red-400" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium">
                            {transaction.description}
                          </div>
                          <div className="text-xs text-slate-400">
                            {transaction.date} • {transaction.category}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
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
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-56 border-slate-700 bg-slate-900 p-2"
                          >
                            <DropdownMenuItem className="rounded-md focus:bg-slate-800">
                              <FileText className="mr-2 h-4 w-4" />
                              <span>View details</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="rounded-md focus:bg-slate-800">
                              <Download className="mr-2 h-4 w-4" />
                              <span>Download receipt</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="rounded-md focus:bg-slate-800">
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Dispute transaction</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator className="bg-slate-700" />
                            <DropdownMenuItem className="rounded-md text-red-400 focus:bg-red-950/50">
                              <Trash2 className="mr-2 h-4 w-4" />
                              <span>Hide transaction</span>
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-slate-800 pt-6">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Export CSV
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  View All Transactions
                </Button>
              </CardFooter>
            </Card>

            {/* Account Settings */}
            <Card className="border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>
                  Manage your account preferences and notifications
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-slate-300">
                      Notification Preferences
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="notify-deposits"
                          className="flex flex-col gap-1"
                        >
                          <span>Deposit Alerts</span>
                          <span className="text-xs font-normal text-slate-400">
                            Get notified when money is deposited
                          </span>
                        </Label>
                        <Switch id="notify-deposits" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="notify-withdrawals"
                          className="flex flex-col gap-1"
                        >
                          <span>Withdrawal Alerts</span>
                          <span className="text-xs font-normal text-slate-400">
                            Get notified for withdrawals over $100
                          </span>
                        </Label>
                        <Switch id="notify-withdrawals" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="notify-lowbalance"
                          className="flex flex-col gap-1"
                        >
                          <span>Low Balance Alerts</span>
                          <span className="text-xs font-normal text-slate-400">
                            Get notified when balance falls below $500
                          </span>
                        </Label>
                        <Switch id="notify-lowbalance" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="notify-security"
                          className="flex flex-col gap-1"
                        >
                          <span>Security Alerts</span>
                          <span className="text-xs font-normal text-slate-400">
                            Get notified about suspicious activity
                          </span>
                        </Label>
                        <Switch id="notify-security" defaultChecked />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium text-slate-300">
                      Account Preferences
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="overdraft-protection"
                          className="flex flex-col gap-1"
                        >
                          <span>Overdraft Protection</span>
                          <span className="text-xs font-normal text-slate-400">
                            Link to savings account for overdraft protection
                          </span>
                        </Label>
                        <Switch id="overdraft-protection" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="paperless-statements"
                          className="flex flex-col gap-1"
                        >
                          <span>Paperless Statements</span>
                          <span className="text-xs font-normal text-slate-400">
                            Receive statements electronically
                          </span>
                        </Label>
                        <Switch id="paperless-statements" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="auto-pay"
                          className="flex flex-col gap-1"
                        >
                          <span>Automatic Bill Pay</span>
                          <span className="text-xs font-normal text-slate-400">
                            Automatically pay recurring bills
                          </span>
                        </Label>
                        <Switch id="auto-pay" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label
                          htmlFor="two-factor"
                          className="flex flex-col gap-1"
                        >
                          <span>Two-Factor Authentication</span>
                          <span className="text-xs font-normal text-slate-400">
                            Add an extra layer of security
                          </span>
                        </Label>
                        <Switch id="two-factor" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-slate-800" />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-slate-300">
                    Contact Information
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        defaultValue="john.doe@example.com"
                        className="border-slate-700 bg-slate-800/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        defaultValue="(555) 123-4567"
                        className="border-slate-700 bg-slate-800/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Mailing Address</Label>
                      <Input
                        id="address"
                        defaultValue="123 Main St"
                        className="border-slate-700 bg-slate-800/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city-state">City, State, ZIP</Label>
                      <Input
                        id="city-state"
                        defaultValue="New York, NY 10001"
                        className="border-slate-700 bg-slate-800/50"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 border-t border-slate-800 pt-6">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  Cancel
                </Button>
                <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-900/20">
                  Save Changes
                </Button>
              </CardFooter>
            </Card>

            {/* Account Documents */}
            <Card className="border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <CardTitle>Account Documents</CardTitle>
                <CardDescription>
                  Access your statements and important documents
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30">
                        <FileText className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">March 2023 Statement</div>
                        <div className="text-xs text-slate-400">
                          PDF • 2.4 MB •{" "}
                          {format(new Date(2023, 2, 31), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30">
                        <FileText className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">
                          February 2023 Statement
                        </div>
                        <div className="text-xs text-slate-400">
                          PDF • 2.1 MB •{" "}
                          {format(new Date(2023, 1, 28), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/30">
                        <FileText className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-medium">
                          January 2023 Statement
                        </div>
                        <div className="text-xs text-slate-400">
                          PDF • 2.3 MB •{" "}
                          {format(new Date(2023, 0, 31), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-slate-700 bg-slate-800/50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-900/30">
                        <FileText className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <div className="font-medium">2022 Tax Documents</div>
                        <div className="text-xs text-slate-400">
                          PDF • 3.7 MB •{" "}
                          {format(new Date(2023, 0, 15), "MMM d, yyyy")}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-slate-800 pt-6">
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Document
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-slate-800/50 hover:bg-slate-700"
                >
                  View All Documents
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

const sidebarItems = [
  { title: "Dashboard", icon: LayoutDashboard, badge: null, url: "/dashboard" },
  { title: "Accounts", icon: Landmark, badge: null, url: "/account" },
  {
    title: "Transactions",
    icon: DollarSign,
    badge: "12",
    url: "/transactions",
  },
  { title: "Deposits", icon: PieChart, badge: null, url: "/deposit" },
  { title: "Withdraws", icon: Target, badge: null, url: "/withdrawal" },
];

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
];

const accountTransactions = [
  {
    id: 1,
    description: "Grocery Store",
    date: "Today, 2:30 PM",
    amount: "120.50",
    type: "debit",
    category: "Shopping",
  },
  {
    id: 2,
    description: "Direct Deposit - Payroll",
    date: "Yesterday",
    amount: "1,200.00",
    type: "credit",
    category: "Income",
  },
  {
    id: 3,
    description: "Electric Bill",
    date: "Mar 28, 2023",
    amount: "85.75",
    type: "debit",
    category: "Utilities",
  },
  {
    id: 4,
    description: "Amazon",
    date: "Mar 25, 2023",
    amount: "65.28",
    type: "debit",
    category: "Shopping",
  },
  {
    id: 5,
    description: "Freelance Payment",
    date: "Mar 15, 2023",
    amount: "2,450.00",
    type: "credit",
    category: "Income",
  },
  {
    id: 6,
    description: "Transfer to Savings",
    date: "Mar 10, 2023",
    amount: "500.00",
    type: "debit",
    category: "Transfer",
  },
  {
    id: 7,
    description: "Restaurant Payment",
    date: "Mar 8, 2023",
    amount: "78.45",
    type: "debit",
    category: "Dining",
  },
  {
    id: 8,
    description: "ATM Withdrawal",
    date: "Mar 5, 2023",
    amount: "200.00",
    type: "debit",
    category: "Cash",
  },
];
