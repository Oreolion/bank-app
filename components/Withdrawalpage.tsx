"use client"

import { useState } from "react"
import {
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  HelpCircle,
  Landmark,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  PieChart,
  Plus,
  Search,
  Settings,
  Shield,
  User,
  X,
} from "lucide-react"
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

export function WithdrawalPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [withdrawalMethod, setWithdrawalMethod] = useState("bank")
  const [withdrawalAmount, setWithdrawalAmount] = useState("")
  const [withdrawalAccount, setWithdrawalAccount] = useState("checking")

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
                            item.href === "/withdrawal" ? "bg-slate-800 text-white" : "text-slate-300"
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
                        item.href === "/withdrawal" ? "bg-slate-800 text-white" : "text-slate-300"
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
                <h1 className="text-2xl font-bold tracking-tight">Make a Withdrawal</h1>
                <p className="text-sm text-slate-400">Withdraw funds from your account using various methods</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                  <Calendar className="mr-2 h-3.5 w-3.5" />
                  Scheduled Withdrawals
                </Button>
                <Button
                  size="sm"
                  className="h-9 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-900/20"
                >
                  <Plus className="mr-2 h-3.5 w-3.5" />
                  New Withdrawal
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Account Balance Card */}
              <Card className="overflow-hidden border-slate-700 bg-slate-900 shadow-md md:col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Available Balance</CardTitle>
                  <CardDescription>Your current account balance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-4 border border-slate-700">
                      <h3 className="text-sm font-medium text-slate-400">Checking Account</h3>
                      <p className="mt-1 text-2xl font-bold">$12,456.78</p>
                      <div className="mt-2 flex items-center text-xs text-green-400">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        <span>+$1,245.30 this month</span>
                      </div>
                    </div>

                    <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-4 border border-slate-700">
                      <h3 className="text-sm font-medium text-slate-400">Savings Account</h3>
                      <p className="mt-1 text-2xl font-bold">$45,678.90</p>
                      <div className="mt-2 flex items-center text-xs text-green-400">
                        <ArrowUpRight className="mr-1 h-3 w-3" />
                        <span>+$4.2% from last month</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Withdrawal Form */}
              <Card className="border-slate-700 bg-slate-900 shadow-md md:col-span-2">
                <CardHeader>
                  <CardTitle>Make a Withdrawal</CardTitle>
                  <CardDescription>Choose your withdrawal method and amount</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label>Withdraw From</Label>
                      <RadioGroup
                        defaultValue="checking"
                        value={withdrawalAccount}
                        onValueChange={setWithdrawalAccount}
                        className="flex flex-col space-y-1"
                      >
                        <div className="flex items-center space-x-2 rounded-md border border-slate-700 bg-slate-800/50 p-3">
                          <RadioGroupItem value="checking" id="checking-withdraw" />
                          <Label htmlFor="checking-withdraw" className="flex-1 cursor-pointer">
                            <div className="font-medium">Checking Account</div>
                            <div className="text-xs text-slate-400">**** 4567</div>
                          </Label>
                          <div className="text-sm font-medium">$12,456.78</div>
                        </div>
                        <div className="flex items-center space-x-2 rounded-md border border-slate-700 bg-slate-800/50 p-3">
                          <RadioGroupItem value="savings" id="savings-withdraw" />
                          <Label htmlFor="savings-withdraw" className="flex-1 cursor-pointer">
                            <div className="font-medium">Savings Account</div>
                            <div className="text-xs text-slate-400">**** 7890</div>
                          </Label>
                          <div className="text-sm font-medium">$45,678.90</div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label>Withdrawal Method</Label>
                      <RadioGroup
                        defaultValue="bank"
                        value={withdrawalMethod}
                        onValueChange={setWithdrawalMethod}
                        className="grid gap-3 md:grid-cols-3"
                      >
                        <div
                          className={`flex flex-col items-center justify-center rounded-md border p-4 ${
                            withdrawalMethod === "bank"
                              ? "border-blue-500 bg-blue-950/20"
                              : "border-slate-700 bg-slate-800/50"
                          }`}
                        >
                          <RadioGroupItem value="bank" id="bank-withdraw" className="sr-only" />
                          <Label htmlFor="bank-withdraw" className="cursor-pointer text-center">
                            <Landmark className="mx-auto mb-2 h-6 w-6" />
                            <div className="font-medium">Bank Transfer</div>
                            <div className="text-xs text-slate-400">1-3 business days</div>
                          </Label>
                        </div>
                        <div
                          className={`flex flex-col items-center justify-center rounded-md border p-4 ${
                            withdrawalMethod === "atm"
                              ? "border-blue-500 bg-blue-950/20"
                              : "border-slate-700 bg-slate-800/50"
                          }`}
                        >
                          <RadioGroupItem value="atm" id="atm" className="sr-only" />
                          <Label htmlFor="atm" className="cursor-pointer text-center">
                            <CreditCard className="mx-auto mb-2 h-6 w-6" />
                            <div className="font-medium">ATM Withdrawal</div>
                            <div className="text-xs text-slate-400">Use any ATM</div>
                          </Label>
                        </div>
                        <div
                          className={`flex flex-col items-center justify-center rounded-md border p-4 ${
                            withdrawalMethod === "wire"
                              ? "border-blue-500 bg-blue-950/20"
                              : "border-slate-700 bg-slate-800/50"
                          }`}
                        >
                          <RadioGroupItem value="wire" id="wire-withdraw" className="sr-only" />
                          <Label htmlFor="wire-withdraw" className="cursor-pointer text-center">
                            <DollarSign className="mx-auto mb-2 h-6 w-6" />
                            <div className="font-medium">Wire Transfer</div>
                            <div className="text-xs text-slate-400">Same day processing</div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="amount">Withdrawal Amount</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                        <Input
                          id="amount"
                          type="text"
                          placeholder="0.00"
                          className="pl-10 border-slate-700 bg-slate-800/50"
                          value={withdrawalAmount}
                          onChange={(e) => setWithdrawalAmount(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 bg-slate-800/50"
                          onClick={() => setWithdrawalAmount("100")}
                        >
                          $100
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 bg-slate-800/50"
                          onClick={() => setWithdrawalAmount("500")}
                        >
                          $500
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 bg-slate-800/50"
                          onClick={() => setWithdrawalAmount("1000")}
                        >
                          $1,000
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-700 bg-slate-800/50"
                          onClick={() => setWithdrawalAmount("5000")}
                        >
                          $5,000
                        </Button>
                      </div>
                    </div>

                    {withdrawalMethod === "bank" && (
                      <div className="space-y-3">
                        <Label>Destination Account</Label>
                        <div className="rounded-md border border-slate-700 bg-slate-800/50 p-4">
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Label htmlFor="bank-name">Bank Name</Label>
                              <Input
                                id="bank-name"
                                placeholder="Enter bank name"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="account-number">Account Number</Label>
                              <Input
                                id="account-number"
                                placeholder="Enter account number"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="routing-number">Routing Number</Label>
                              <Input
                                id="routing-number"
                                placeholder="Enter routing number"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {withdrawalMethod === "wire" && (
                      <div className="space-y-3">
                        <Label>Wire Transfer Details</Label>
                        <div className="rounded-md border border-slate-700 bg-slate-800/50 p-4">
                          <div className="space-y-3">
                            <div className="space-y-2">
                              <Label htmlFor="recipient-name">Recipient Name</Label>
                              <Input
                                id="recipient-name"
                                placeholder="Enter recipient name"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="recipient-bank">Recipient Bank</Label>
                              <Input
                                id="recipient-bank"
                                placeholder="Enter recipient bank"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="swift-code">SWIFT/BIC Code</Label>
                              <Input
                                id="swift-code"
                                placeholder="Enter SWIFT/BIC code"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="wire-notes">Notes</Label>
                              <Textarea
                                id="wire-notes"
                                placeholder="Enter any additional information"
                                className="border-slate-700 bg-slate-800/50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {withdrawalMethod === "atm" && (
                      <div className="space-y-3">
                        <Label>ATM Withdrawal</Label>
                        <div className="rounded-md border border-slate-700 bg-slate-800/50 p-4">
                          <div className="space-y-4">
                            <p className="text-sm text-slate-400">
                              You can withdraw cash from any ATM using your debit card. Daily withdrawal limits apply.
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Daily ATM Withdrawal Limit:</span>
                              <span className="font-medium">$1,000.00</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm">Remaining Today:</span>
                              <span className="font-medium">$1,000.00</span>
                            </div>
                            <div className="rounded-md bg-blue-900/20 p-3 text-sm text-blue-400">
                              <p>Tip: Use Nova Bank ATMs to avoid withdrawal fees.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start space-x-2">
                      <Checkbox id="terms-withdraw" />
                      <Label htmlFor="terms-withdraw" className="text-sm leading-tight">
                        I confirm this withdrawal request is authorized by me and complies with the bank's terms and
                        conditions.
                      </Label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t border-slate-800 pt-6">
                  <Button variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-md shadow-indigo-900/20">
                    Process Withdrawal
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Recent Withdrawals */}
            <Card className="border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Withdrawals</CardTitle>
                    <CardDescription>Your withdrawal history for the last 30 days</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="border-slate-700 bg-slate-800/50 hover:bg-slate-700">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWithdrawals.map((withdrawal) => (
                    <div
                      key={withdrawal.id}
                      className="flex items-center justify-between rounded-lg p-3 transition-colors hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/30">
                          <ArrowDownRight className="h-5 w-5 text-red-400" />
                        </div>
                        <div>
                          <div className="font-medium">{withdrawal.description}</div>
                          <div className="text-xs text-slate-400">
                            {withdrawal.date} • {withdrawal.method}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-medium text-red-400">-${withdrawal.amount}</div>
                        <Badge variant="outline" className="border-red-800 bg-red-900/20 text-red-400">
                          {withdrawal.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Withdrawal Limits & Fees */}
            <Card className="border-slate-700 bg-slate-900 shadow-md">
              <CardHeader>
                <CardTitle>Withdrawal Limits & Fees</CardTitle>
                <CardDescription>Information about withdrawal methods, limits, and fees</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-slate-700">
                          <th className="py-3 text-left text-sm font-medium text-slate-400">Withdrawal Method</th>
                          <th className="py-3 text-left text-sm font-medium text-slate-400">Daily Limit</th>
                          <th className="py-3 text-left text-sm font-medium text-slate-400">Processing Time</th>
                          <th className="py-3 text-left text-sm font-medium text-slate-400">Fee</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800">
                        <tr>
                          <td className="py-3 text-sm">Bank Transfer</td>
                          <td className="py-3 text-sm">$10,000</td>
                          <td className="py-3 text-sm">1-3 business days</td>
                          <td className="py-3 text-sm">Free</td>
                        </tr>
                        <tr>
                          <td className="py-3 text-sm">ATM Withdrawal</td>
                          <td className="py-3 text-sm">$1,000</td>
                          <td className="py-3 text-sm">Instant</td>
                          <td className="py-3 text-sm">
                            $0 (Nova Bank ATMs)
                            <br />
                            $2.50 (Other ATMs)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 text-sm">Wire Transfer</td>
                          <td className="py-3 text-sm">$50,000</td>
                          <td className="py-3 text-sm">Same day</td>
                          <td className="py-3 text-sm">
                            $25 (Domestic)
                            <br />
                            $45 (International)
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="rounded-md bg-slate-800/50 p-4">
                    <h3 className="mb-2 text-sm font-medium">Important Notes</h3>
                    <ul className="space-y-1 text-sm text-slate-400">
                      <li>• Large withdrawals may require advance notice</li>
                      <li>• International wire transfers may be subject to additional fees from intermediary banks</li>
                      <li>• ATM withdrawals abroad may incur foreign transaction fees</li>
                      <li>• For security reasons, new payees may have lower initial transfer limits</li>
                    </ul>
                  </div>
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
  { title: "Dashboard", icon: LayoutDashboard, badge: null, href: "/" },
  { title: "Accounts", icon: Landmark, badge: null, href: "/account" },
  { title: "Transactions", icon: DollarSign, badge: "12", href: "/transactions" },
  { title: "Deposit", icon: ArrowUpRight, badge: null, href: "/deposit" },
  { title: "Withdrawal", icon: ArrowDownRight, badge: null, href: "/withdrawal" },
  { title: "Investments", icon: PieChart, badge: null, href: "/investments" },
  { title: "Messages", icon: MessageSquare, badge: "3", href: "/messages" },
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

const recentWithdrawals = [
  {
    id: 1,
    description: "ATM Withdrawal",
    date: "Today, 11:30 AM",
    amount: "200.00",
    method: "ATM",
    status: "Completed",
  },
  {
    id: 2,
    description: "Transfer to External Account",
    date: "Yesterday, 2:15 PM",
    amount: "1,500.00",
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: 3,
    description: "Rent Payment",
    date: "Mar 28, 2023",
    amount: "1,200.00",
    method: "Bank Transfer",
    status: "Completed",
  },
  {
    id: 4,
    description: "Wire Transfer - International",
    date: "Mar 20, 2023",
    amount: "5,000.00",
    method: "Wire Transfer",
    status: "Completed",
  },
  {
    id: 5,
    description: "ATM Withdrawal",
    date: "Mar 15, 2023",
    amount: "300.00",
    method: "ATM",
    status: "Completed",
  },
]

