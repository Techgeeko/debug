export interface Quote {
    id: string
    quoteId: string
    client: string
    status: "pending" | "approved" | "rejected"
    amount: number
    date: string
  }
  
  import { Eye, Pencil } from 'lucide-react'
  
  
  interface QuotesTableProps {
    quotes: Quote[]
  }
  
  export function QuotesTable({ quotes }: QuotesTableProps) {
    const getStatusColor = (status: Quote["status"]) => {
      switch (status) {
        case "pending":
          return "text-blue-600 bg-blue-50"
        case "approved":
          return "text-green-600 bg-green-50"
        case "rejected":
          return "text-red-600 bg-red-50"
      }
    }
  
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Quotes</h2>
          <button className="text-sm text-gray-500 hover:text-gray-700">Show all</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="pb-4 text-sm font-medium text-gray-500">Quote ID</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Client</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Status</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Date Sent</th>
                <th className="pb-4 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {quotes.map((quote) => (
                <tr key={quote.id} className="border-t border-gray-100">
                  <td className="py-4 text-sm text-gray-900">{quote.quoteId}</td>
                  <td className="py-4 text-sm text-gray-900">{quote.client}</td>
                  <td className="py-4">
                    <span className={`text-xs px-2 py-1 rounded-full capitalize ${getStatusColor(quote.status)}`}>
                      {quote.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm text-gray-900">${quote.amount.toLocaleString()}</td>
                  <td className="py-4 text-sm text-gray-600">{quote.date}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="h-4 w-4 text-gray-500" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Pencil className="h-4 w-4 text-gray-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  