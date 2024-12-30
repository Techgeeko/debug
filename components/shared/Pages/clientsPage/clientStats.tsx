interface ClientStatsProps {
    total: number;
    active: number;
    totalProjects: number;
  }
  
  export function ClientStats({ total, active, totalProjects }: ClientStatsProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Total Clients</h3>
          <p className="mt-2 text-3xl font-semibold">{total}</p>
        </div>
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Active Clients</h3>
          <p className="mt-2 text-3xl font-semibold">{active}</p>
        </div>
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Total Projects</h3>
          <p className="mt-2 text-3xl font-semibold">{totalProjects}</p>
        </div>
      </div>
    );
  }
  
  