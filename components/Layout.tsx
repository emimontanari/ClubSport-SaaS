
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarDays, 
  Trophy, 
  Users, 
  Settings, 
  Menu,
  Store,
  Dumbbell,
  Zap,
  GraduationCap,
  Grid3X3
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Inicio', path: '/', icon: LayoutDashboard },
  { label: 'Calendario', path: '/calendar', icon: CalendarDays },
  { label: 'Canchas', path: '/courts', icon: Grid3X3 },
  { label: 'Torneos', path: '/tournaments', icon: Trophy },
  { label: 'Escuelas', path: '/schools', icon: GraduationCap },
  { label: 'Clientes', path: '/clients', icon: Users },
  { label: 'Servicios', path: '/services', icon: Store },
  { label: 'Widget Web', path: '/widget', icon: Zap },
];

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white fixed h-full z-10">
        <div className="p-6 flex items-center gap-2 border-b border-slate-800">
          <Dumbbell className="text-indigo-400" size={28} />
          <span className="text-xl font-bold tracking-tight">ClubSport</span>
        </div>

        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-white cursor-pointer">
            <Settings size={20} />
            <span className="text-sm font-medium">Configuración</span>
          </div>
          <div className="mt-4 px-3">
             <div className="bg-slate-800 rounded p-3 text-xs text-slate-400">
                <p className="font-semibold text-white">Plan Pro</p>
                <p className="mt-1">Vence Oct 2025</p>
             </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white z-20 px-4 py-3 flex justify-between items-center shadow-md">
         <div className="flex items-center gap-2">
          <Dumbbell className="text-indigo-400" size={24} />
          <span className="font-bold">ClubSport</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}>
           <div className="bg-slate-900 w-64 h-full p-4" onClick={e => e.stopPropagation()}>
              <nav className="mt-12 space-y-2">
                {NAV_ITEMS.map((item) => (
                   <Link
                   key={item.path}
                   to={item.path}
                   onClick={() => setIsSidebarOpen(false)}
                   className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium ${
                     location.pathname === item.path
                       ? 'bg-indigo-600 text-white' 
                       : 'text-slate-400'
                   }`}
                 >
                   <item.icon size={20} />
                   {item.label}
                 </Link>
                ))}
              </nav>
           </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 mt-14 md:mt-0 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};