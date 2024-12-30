interface Client {
    name: string
    quoteSent: number
    approved: number
    pending: number
  }
  
  interface ClientsTableProps {
    clients: Client[]
  }
  
  export function ClientsTable({ clients }: ClientsTableProps) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Top 5 Clients</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">Show all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 text-sm font-medium text-gray-500">Client</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Quote Sent</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Approved</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Pending</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.name} className="border-t border-gray-100">
                  <td className="py-4 text-sm text-gray-900">{client.name}</td>
                  <td className="py-4 text-sm text-gray-600">{client.quoteSent}</td>
                  <td className="py-4 text-sm text-gray-600">{client.approved}</td>
                  <td className="py-4 text-sm text-gray-600">{client.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }  