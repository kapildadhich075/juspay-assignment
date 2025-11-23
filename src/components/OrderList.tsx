import { Plus, SlidersHorizontal, ArrowUpDown, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { orders } from '../data/mockData';

interface OrderListProps {
  isDarkMode: boolean;
}

export default function OrderList({ isDarkMode }: OrderListProps) {
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const inputBgColor = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';
  const hoverBgColor = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50';

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return isDarkMode ? 'text-blue-400' : 'text-blue-600';
      case 'Complete':
        return isDarkMode ? 'text-green-400' : 'text-green-600';
      case 'Pending':
        return isDarkMode ? 'text-cyan-400' : 'text-cyan-600';
      case 'Approved':
        return isDarkMode ? 'text-yellow-400' : 'text-yellow-600';
      case 'Rejected':
        return isDarkMode ? 'text-gray-500' : 'text-gray-500';
      default:
        return textColor;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return 'A minute ago';
    if (diffHours < 2) return '1 hour ago';
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays === 1) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 sm:p-6">
        <h1 className={`text-xl sm:text-2xl font-semibold mb-6 ${titleColor}`}>Order List</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <button className={`p-2 rounded border ${borderColor} ${hoverBgColor}`}>
              <Plus className={`w-5 h-5 ${textColor}`} />
            </button>
            <button className={`p-2 rounded border ${borderColor} ${hoverBgColor}`}>
              <SlidersHorizontal className={`w-5 h-5 ${textColor}`} />
            </button>
            <button className={`p-2 rounded border ${borderColor} ${hoverBgColor}`}>
              <ArrowUpDown className={`w-5 h-5 ${textColor}`} />
            </button>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className={`w-4 h-4 ${textColor} absolute left-3 top-1/2 -translate-y-1/2`} />
            <input
              type="text"
              placeholder="Search"
              className={`${inputBgColor} ${textColor} pl-9 pr-4 py-2 rounded border ${borderColor} text-sm w-full focus:outline-none focus:ring-1 focus:ring-gray-400`}
            />
          </div>
        </div>

        <div className={`${bgColor} rounded-lg overflow-x-auto`}>
          <table className="w-full">
            <thead className={`border-b ${borderColor}`}>
              <tr className={`text-xs ${textColor}`}>
                <th className="text-left p-3 sm:p-4 font-medium">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="text-left p-3 sm:p-4 font-medium">Order ID</th>
                <th className="text-left p-3 sm:p-4 font-medium">User</th>
                <th className="text-left p-3 sm:p-4 font-medium">Project</th>
                <th className="text-left p-3 sm:p-4 font-medium">Address</th>
                <th className="text-left p-3 sm:p-4 font-medium">Date</th>
                <th className="text-left p-3 sm:p-4 font-medium">Status</th>
                <th className="text-left p-3 sm:p-4 font-medium" />
              </tr>
            </thead>
            <tbody>
              {orders.concat(orders).map((order, index) => (
                <tr
                  key={`${order.id}-${index}`}
                  className={`border-b ${borderColor} ${hoverBgColor} ${
                    order.order_id === '#CM9804' ? (isDarkMode ? 'bg-gray-700' : 'bg-gray-50') : ''
                  }`}
                >
                  <td className="p-3 sm:p-4">
                    <input
                      type="checkbox"
                      className="rounded"
                      defaultChecked={order.order_id === '#CM9804'}
                    />
                  </td>
                  <td className={`p-3 sm:p-4 text-xs sm:text-sm ${titleColor}`}>{order.order_id}</td>
                  <td className="p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={order.user_avatar}
                        alt={order.user_name}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
                      />
                      <span className={`text-xs sm:text-sm ${titleColor} hidden sm:inline`}>
                        {order.user_name}
                      </span>
                    </div>
                  </td>
                  <td className={`p-3 sm:p-4 text-xs sm:text-sm ${titleColor}`}>{order.project}</td>
                  <td className={`p-3 sm:p-4 text-xs sm:text-sm ${titleColor}`}>
                    <div className="flex items-center gap-1">
                      {order.address}
                      {order.order_id === '#CM9805' && (
                        <span className="text-gray-400">📋</span>
                      )}
                    </div>
                  </td>
                  <td className={`p-3 sm:p-4 text-xs sm:text-sm ${titleColor}`}>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">📅</span>
                      {formatDate(order.date)}
                    </div>
                  </td>
                  <td className="p-3 sm:p-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(order.status)}`} />
                      <span className={`text-xs sm:text-sm ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-3 sm:p-4">
                    {order.order_id === '#CM9805' && (
                      <button className={`text-sm ${textColor}`}>...</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 flex-wrap">
          <button className={`p-2 rounded ${hoverBgColor}`}>
            <ChevronLeft className={`w-5 h-5 ${textColor}`} />
          </button>
          <button className={`px-2 sm:px-3 py-1 rounded text-sm ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} ${titleColor}`}>
            1
          </button>
          <button className={`px-2 sm:px-3 py-1 rounded text-sm ${hoverBgColor} ${textColor}`}>
            2
          </button>
          <button className={`px-2 sm:px-3 py-1 rounded text-sm ${hoverBgColor} ${textColor}`}>
            3
          </button>
          <button className={`px-2 sm:px-3 py-1 rounded text-sm ${hoverBgColor} ${textColor}`}>
            4
          </button>
          <button className={`px-2 sm:px-3 py-1 rounded text-sm ${hoverBgColor} ${textColor}`}>
            5
          </button>
          <button className={`p-2 rounded ${hoverBgColor}`}>
            <ChevronRight className={`w-5 h-5 ${textColor}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
