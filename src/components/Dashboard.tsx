import { TrendingUp, TrendingDown } from 'lucide-react';
import { products } from '../data/mockData';
import { ProjectionsChart, RevenueChart, CircleChart, WorldMapChart } from './Charts';

interface DashboardProps {
  isDarkMode: boolean;
}

export default function Dashboard({ isDarkMode }: DashboardProps) {
  const bgColor = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const cardBgColor = isDarkMode ? 'bg-blue-950' : 'bg-blue-50';
  const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className="flex-1 overflow-auto ">
      <div className="p-4 sm:p-6">
        <h1 className={`text-xl sm:text-2xl font-semibold mb-6 ${titleColor}`}>eCommerce</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className={`${cardBgColor} p-6 rounded-lg`}>
            <div className={`text-sm ${textColor} mb-2`}>Customers</div>
            <div className="flex items-end justify-between">
              <div className={`text-2xl sm:text-3xl font-semibold ${titleColor}`}>3,781</div>
              <div className="flex items-center text-green-500 text-xs sm:text-sm">
                <span>+11.01%</span>
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </div>
            </div>
          </div>

          <div className={`${bgColor} p-6 rounded-lg`}>
            <div className={`text-sm ${textColor} mb-2`}>Orders</div>
            <div className="flex items-end justify-between">
              <div className={`text-2xl sm:text-3xl font-semibold ${titleColor}`}>1,219</div>
              <div className="flex items-center text-red-500 text-xs sm:text-sm">
                <span>-0.03%</span>
                <TrendingDown className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </div>
            </div>
          </div>

          <div className={`${bgColor} p-6 rounded-lg col-span-1 md:col-span-2 lg:col-span-2`}>
            <div className={`text-sm ${textColor} mb-3`}>Projections vs Actuals</div>
            <div className="h-72">
              <ProjectionsChart isDarkMode={isDarkMode} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className={`${bgColor} p-6 rounded-lg`}>
            <div className={`text-sm ${textColor} mb-2`}>Revenue</div>
            <div className="flex items-end justify-between">
              <div className={`text-2xl sm:text-3xl font-semibold ${titleColor}`}>$695</div>
              <div className="flex items-center text-green-500 text-xs sm:text-sm">
                <span>+15.03%</span>
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </div>
            </div>
          </div>

          <div className={`${cardBgColor} p-6 rounded-lg`}>
            <div className={`text-sm ${textColor} mb-2`}>Growth</div>
            <div className="flex items-end justify-between">
              <div className={`text-2xl sm:text-3xl font-semibold ${titleColor}`}>30.1%</div>
              <div className="flex items-center text-green-500 text-xs sm:text-sm">
                <span>+6.08%</span>
                <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className={`${bgColor} p-6 rounded-lg lg:col-span-2`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div className={`text-base font-medium ${titleColor}`}>Revenue</div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-purple-400' : 'bg-purple-600'}`} />
                  <span className={textColor}>Current Week</span>
                  <span className={titleColor}>$58,211</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg width="12" height="2" className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} style={{ opacity: 0.7 }}>
                    <line x1="0" y1="1" x2="12" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="2,2" />
                  </svg>
                  <span className={textColor}>Previous Week</span>
                  <span className={titleColor}>$68,768</span>
                </div>
              </div>
            </div>
            <div className="h-40 sm:h-48">
              <RevenueChart isDarkMode={isDarkMode} />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                <span key={month}>{month}</span>
              ))}
            </div>
          </div>

          <div className={`${bgColor} p-6 rounded-lg`}>
            <div className={`text-base font-medium mb-4 ${titleColor}`}>Revenue by Location</div>
            <WorldMapChart isDarkMode={isDarkMode} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className={`${bgColor} p-6 rounded-lg lg:col-span-2`}>
            <div className={`text-base font-medium mb-4 ${titleColor}`}>Top Selling Products</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className={`text-xs ${textColor} border-b ${borderColor}`}>
                    <th className="text-left pb-3 font-medium">Name</th>
                    <th className="text-left pb-3 font-medium">Price</th>
                    <th className="text-left pb-3 font-medium">Quantity</th>
                    <th className="text-left pb-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className={`text-sm border-b ${borderColor}`}>
                      <td className={`py-3 ${titleColor}`}>{product.name}</td>
                      <td className={`py-3 ${titleColor}`}>${product.price.toFixed(2)}</td>
                      <td className={`py-3 ${titleColor}`}>{product.quantity}</td>
                      <td className={`py-3 ${titleColor}`}>${product.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className={`${bgColor} p-6 rounded-lg`}>
            <div className={`text-base font-medium mb-4 ${titleColor}`}>Total Sales</div>
            <CircleChart isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
