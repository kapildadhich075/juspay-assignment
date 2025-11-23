import { useState } from 'react'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import RightSidebar from './components/RightSidebar'
import OrderList from './components/OrderList'

function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'orders'>('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);


  return (
    <div className={`flex h-screen overflow-hidden ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div
        className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-r overflow-hidden transition-all duration-300 ease-in-out ${
          sidebarOpen ? 'w-48' : 'w-0'
        }`}
      >
        <div className={`h-full transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <Sidebar
            currentView={currentView}
            onViewChange={setCurrentView}
            isDarkMode={isDarkMode}
            onCloseMobile={() => setSidebarOpen(false)}
          />
        </div>
      </div>

    <div className="flex-1 flex flex-col overflow-hidden">
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        showNotifications={showNotifications}
        onToggleNotifications={() => {
          setShowNotifications(true);
          setRightSidebarOpen(true);
        }}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onRightSidebarClick={() => {
          const willOpen = !rightSidebarOpen;
          setRightSidebarOpen(willOpen);
          if (willOpen) {
            setShowNotifications(false);
          }
        }}
      />

      <div className="flex flex-1 overflow-hidden scrollbar-hide">
        {currentView === 'dashboard' ? (
          <Dashboard isDarkMode={isDarkMode} />
        ) : (
          <OrderList isDarkMode={isDarkMode} />
        )}

        <div
          className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} border-l overflow-hidden transition-all duration-300 ease-in-out hidden lg:block ${
            rightSidebarOpen ? 'w-80' : 'w-0'
          }`}
        >
          <div className={`h-full transition-transform duration-300 ease-in-out ${
            rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <RightSidebar
              isDarkMode={isDarkMode}
              showNotifications={showNotifications}
            />
          </div>
        </div>
        
        {rightSidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setRightSidebarOpen(false)}
            />
            <div className="fixed right-0 top-0 bottom-0 w-80 z-40 lg:hidden">
              <RightSidebar
                isDarkMode={isDarkMode}
                showNotifications={showNotifications}
              />
            </div>
          </>
        )}
      </div>
    </div>
  </div>
  )
}

export default App
