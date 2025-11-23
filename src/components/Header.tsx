import { LayoutGrid, Star, Search, Sun, Moon, RotateCcw, Bell, Menu, PanelsTopLeft, History } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  showNotifications: boolean;
  onToggleNotifications: () => void;
  onMenuClick?: () => void;
  onRightSidebarClick?: () => void;
}

export default function Header({ isDarkMode, onToggleDarkMode, showNotifications, onToggleNotifications, onMenuClick, onRightSidebarClick }: HeaderProps) {
  const bgColor = isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const inputBgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-50';

  return (
    <div className={`${bgColor} border-b px-3 sm:px-6 py-3 flex items-center justify-between gap-3 sm:gap-6 flex-wrap sm:flex-nowrap`}>
      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
        <button
          onClick={onMenuClick}
          className={`lg:hidden p-1 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex-shrink-0`}
        >
          <Menu className={`w-5 h-5 ${textColor}`} />
        </button>
        <button
          onClick={onMenuClick}
          className={`p-1 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex-shrink-0 hidden sm:block`}
        >
          <PanelsTopLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${textColor}`} />
        </button>
        <Star className={`w-4 h-4 sm:w-5 sm:h-5 ${textColor} hidden sm:block flex-shrink-0`} />
        <div className={`text-xs sm:text-sm ${textColor} truncate`}>Dashboards / Default</div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden sm:block">
          <Search className={`w-4 h-4 ${textColor} absolute left-3 top-1/2 -translate-y-1/2`} />
          <input
            type="text"
            placeholder="Search"
            className={`${inputBgColor} ${textColor} pl-9 pr-4 py-1.5 rounded text-sm w-48 lg:w-64 border-0 focus:outline-none focus:ring-1 focus:ring-gray-400`}
          />
          <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${textColor}`}>⌘/</span>
        </div>

        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} flex-shrink-0`}
        >
          {isDarkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />}
        </button>

        <button className={`p-2 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} hidden sm:block flex-shrink-0`}>
          <History className={`w-4 h-4 sm:w-5 sm:h-5 ${textColor}`} />
        </button>

       

        <button className={`p-2 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} hidden sm:block flex-shrink-0`}
          onClick={onToggleNotifications}
        >
      
          <Bell className={`w-4 h-4 sm:w-5 sm:h-5 ${textColor}`} />
        </button>

        <button
          onClick={onRightSidebarClick}
          className={`p-2 rounded ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} hidden sm:block flex-shrink-0`}
        >
          <PanelsTopLeft className={`w-4 h-4 sm:w-5 sm:h-5 ${textColor}`} />
        </button>
      </div>
    </div>
  );
}
