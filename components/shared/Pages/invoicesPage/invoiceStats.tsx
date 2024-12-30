interface InvoiceStatsProps {
    total: number;
    paid: number;
    pending: number;
    totalAmount: number;
  }
  
  export function InvoiceStats({ total, paid, pending, totalAmount }: InvoiceStatsProps) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Total Invoices</h3>
          <p className="mt-2 text-3xl font-semibold">{total}</p>
        </div>
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Paid</h3>
          <p className="mt-2 text-3xl font-semibold text-green-600">{paid}</p>
        </div>
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Pending</h3>
          <p className="mt-2 text-3xl font-semibold text-orange-600">{pending}</p>
        </div>
        <div className="p-6 rounded-lg border">
          <h3 className="text-sm font-medium text-gray-500">Total Amount</h3>
          <p className="mt-2 text-3xl font-semibold">${(totalAmount / 100).toFixed(2)}</p>
        </div>
      </div>
    );
  }
  
  