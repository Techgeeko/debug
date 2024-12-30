import { Check, Eye } from 'lucide-react'

interface ActivityItem {
  id: string
  message: string
  timestamp: string
}

interface ActivityFeedProps {
  activities: ActivityItem[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity Feed</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">Show all</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-green-100 p-1">
              <Check className="h-3 w-3 text-green-600" />
            </div>
            <div className="flex-1 flex justify-between items-start">
              <p className="text-sm text-gray-600">{activity.message}</p>
              <span className="text-xs text-gray-400 whitespace-nowrap">{activity.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-4">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Send Quote
        </button>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          <Eye className="mr-2 h-4 w-4" />
          View Activity
        </button>
      </div>
    </div>
  )
}