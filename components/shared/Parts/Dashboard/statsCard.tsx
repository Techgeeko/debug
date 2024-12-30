interface StatsCardProps {
    title: string
    value: string | number
    subtitle: string
  }
  
  export function StatsCard({ title, value, subtitle }: StatsCardProps) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-semibold text-gray-900">{value}</h3>
        <p className="text-sm font-medium text-gray-500 mt-1">{title}</p>
        <p className="text-xs text-gray-400 mt-1">{subtitle}</p>
      </div>
    )
  }
  
  