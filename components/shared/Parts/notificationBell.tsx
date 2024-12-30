import React from 'react';
import { Bell } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function NotificationPanel() {
  const notifications = [
    {
      id: 1,
      title: "New Quote Request",
      description: "John Doe requested a quote for project X",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Quote Accepted",
      description: "Jane Smith accepted your quote for project Y",
      time: "1 day ago",
      isRead: true,
    },
    // Add more notifications as needed
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
        </button>
      </SheetTrigger>
      <SheetContent className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>Notifications</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg ${
                notification.isRead ? 'bg-gray-50' : 'bg-blue-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{notification.title}</h3>
                <span className="text-xs text-gray-500">{notification.time}</span>
              </div>
              <p className="mt-1 text-sm text-gray-600">
                {notification.description}
              </p>
            </div>
          ))}
          {notifications.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No new notifications
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}