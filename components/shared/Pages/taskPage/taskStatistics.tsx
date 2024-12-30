interface TaskStatsProps {
    total: number
    completed: number
    pending: number
  }
  
  export function TaskStatistics({ total, completed, pending }: TaskStatsProps) {
    return (
      <div className="p-6 rounded-lg border bg-card">
        <h2 className="text-xl font-semibold mb-4">Task Statistics</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Tasks</span>
            <span className="font-medium">{total}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Completed</span>
            <span className="font-medium">{completed}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Pending</span>
            <span className="font-medium">{pending}</span>
          </div>
        </div>
      </div>
    )
  }
  
  