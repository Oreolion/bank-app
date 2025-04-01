"use client";
import { useState } from "react";
import {
  ArrowDownRight,
  Bell,
  HelpCircle,
  Landmark,
  LayoutDashboard,
  LogOut,
  Menu,
  DollarSign,
  ArrowUpRight,
  Search,
  Settings,
  Shield,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SignOutButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const sidebarItems = [
  { title: "Dashboard", icon: LayoutDashboard, badge: null, url: "/" },
  { title: "Accounts", icon: Landmark, badge: null, url: "/account" },
  { title: "Transactions", icon: DollarSign, badge: "12", url: "/transactions" },
  { title: "Deposits", icon: ArrowUpRight, badge: null, url: "/deposit" },
  { title: "Withdraws", icon: ArrowDownRight, badge: null, url: "/withdrawal" },
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
    icon: ArrowDownRight,
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

interface DashboardNavAndSidebarProps {
  isSidebarOnly?: boolean;
}

const DashboardNavAndSidebar = ({ isSidebarOnly = false }: DashboardNavAndSidebarProps) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    return pathname === href || pathname.startsWith(href);
  };


  if (isSidebarOnly) {
    return (
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
                  href={item.url}
                  className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors ${
                    isLinkActive(item.url) ? "bg-slate-800 text-white" : "text-slate-300" 
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
            className="w-full cursor-pointer justify-center gap-2 text-red-400 border-slate-700 bg-slate-800 hover:bg-red-950/30"
          >
            <SignOutButton />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 border-r border-slate-800 p-0">
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
                          <div className="text-xs text-slate-400">Premium Member</div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 px-4 text-xs font-medium text-slate-400">MENU</div>
                    <nav className="flex flex-col gap-1">
                      {sidebarItems.map((item) => (
                        <Link
                          key={item.title}
                          href={item.url}
                          className={`flex items-center justify-between rounded-md px-4 py-2 text-sm transition-colors hover:bg-slate-800/70 ${
                            item.url === "/transactions" ? "bg-slate-800 text-white" : "text-slate-300"
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
                        <SignOutButton />
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
            <span className="hidden text-lg font-bold md:inline-block">AFFFCU</span>
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
                  className="relative border-slate-700 bg-slate-800/50 rounded-full"
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
      </div>

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
                      <notification.icon className={`h-4 w-4 ${notification.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{notification.title}</p>
                      <p className="text-xs text-slate-400">{notification.description}</p>
                      <p className="mt-1 text-xs text-slate-500">{notification.time}</p>
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
    </>
  );
};

export default DashboardNavAndSidebar;