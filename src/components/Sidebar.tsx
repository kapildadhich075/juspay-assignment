import { LayoutGrid, ShoppingCart, FolderKanban, GraduationCap, User, Briefcase, FileText, MessageSquare } from 'lucide-react';

interface SidebarProps {
  currentView: 'dashboard' | 'orders';
  onViewChange: (view: 'dashboard' | 'orders') => void;
  isDarkMode: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({ currentView, onViewChange, isDarkMode, onCloseMobile }: SidebarProps) {
  const bgColor = isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const activeTextColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const activeBgColor = isDarkMode ? 'bg-gray-800' : 'bg-gray-100';
  const hoverBgColor = isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50';

  const handleViewChange = (view: 'dashboard' | 'orders') => {
    onViewChange(view);
    onCloseMobile?.();
  };

  return (
    <div className={`w-48 ${bgColor} p-4 flex flex-col h-screen overflow-y-auto`}>
      <div className="flex items-center gap-2 mb-8">
        <div className={`w-6 h-6 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-800'}`} />
        <span className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>ByeWind</span>
      </div>

      <div className="mb-6">
        <div className={`text-xs font-medium ${textColor} mb-2 px-2`}>Favorites</div>
        <div className={`text-xs ${textColor} px-2 py-1`}>Overview</div>
        <div className={`text-xs ${textColor} px-2 py-1`}>Projects</div>
      </div>

      <div className="mb-6">
        <div className={`text-xs font-medium ${textColor} mb-2 px-2`}>Dashboards</div>
        <button
          onClick={() => handleViewChange('dashboard')}
          className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${
            currentView === 'dashboard'
              ? `${activeBgColor} ${activeTextColor}`
              : `${textColor} ${hoverBgColor}`
          }`}
        >
          <LayoutGrid className="w-4 h-4" />
          Default
        </button>
        <button
          onClick={() => handleViewChange('orders')}
          className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${
            currentView === 'orders'
              ? `${activeBgColor} ${activeTextColor}`
              : `${textColor} ${hoverBgColor}`
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          eCommerce
        </button>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <FolderKanban className="w-4 h-4" />
          Projects
        </button>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <GraduationCap className="w-4 h-4" />
          Online Courses
        </button>
      </div>

      <div>
        <div className={`text-xs font-medium ${textColor} mb-2 px-2`}>Pages</div>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <User className="w-4 h-4" />
          User Profile
        </button>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <Briefcase className="w-4 h-4" />
          Account
        </button>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <Briefcase className="w-4 h-4" />
          Corporate
        </button>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <FileText className="w-4 h-4" />
          Blog
        </button>
        <button className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs ${textColor} ${hoverBgColor}`}>
          <MessageSquare className="w-4 h-4" />
          Social
        </button>
      </div>
    </div>
  );
}
