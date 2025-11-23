import { notifications, activities, contacts } from '../data/mockData';
import { Bug, User, Radio } from 'lucide-react';

interface RightSidebarProps {
  isDarkMode: boolean;
  showNotifications: boolean;
}

export default function RightSidebar({ isDarkMode, showNotifications }: RightSidebarProps) {
  const bgColor = isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200';
  const textColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const titleColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const itemHoverColor = isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-50';

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'bug':
        return <Bug className="w-4 h-4" />;
      case 'user':
        return <User className="w-4 h-4" />;
      case 'broadcast':
        return <Radio className="w-4 h-4" />;
      default:
        return <Bug className="w-4 h-4" />;
    }
  };

  return (
    <div className={`w-80 flex flex-col ${bgColor} p-4 sm:p-6 overflow-auto h-full`}>
      {showNotifications ? (
        <div>
          <h2 className={`text-lg font-semibold mb-4 ${titleColor}`}>Notifications</h2>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start gap-3 p-3 rounded ${itemHoverColor} cursor-pointer`}
              >
                <div className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  {getIcon(notification.icon_type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`text-sm ${titleColor} mb-1`}>{notification.message}</div>
                  <div className={`text-xs ${textColor}`}>{notification.timestamp}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="mb-8">
            <h2 className={`text-lg font-semibold mb-4 ${titleColor}`}>Activities</h2>
            <div className="space-y-3">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className={`flex items-start gap-3 p-2 rounded ${itemHoverColor} cursor-pointer`}
                >
                  <img
                    src={activity.user_avatar}
                    alt={activity.user_name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm ${titleColor} mb-1`}>{activity.activity}</div>
                    <div className={`text-xs ${textColor}`}>{activity.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className={`text-lg font-semibold mb-4 ${titleColor}`}>Contacts</h2>
            <div className="space-y-2">
              {contacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`flex items-center gap-3 p-2 rounded ${itemHoverColor} cursor-pointer`}
                >
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                  />
                  <span className={`text-sm ${titleColor}`}>{contact.name}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
