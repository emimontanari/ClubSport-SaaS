
import React, { useState, useContext, createContext } from 'react';
import { HashRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { CalendarPage } from './pages/Calendar';
import { CourtsPage } from './pages/Courts';
import { TournamentsPage } from './pages/Tournaments';
import { SchoolsPage } from './pages/Schools';
import { 
  MOCK_BOOKINGS, 
  MOCK_CLIENTS, 
  MOCK_COURTS, 
  MOCK_SERVICES, 
  MOCK_VENUES,
  MOCK_TOURNAMENTS,
  MOCK_MATCHES,
  MOCK_CLASSES
} from './constants';
import { Booking, Client, Court, Service, Venue, Tournament, Match, SchoolClass } from './types';

// Widget Preview Page (Mocking the public facing side)
const WidgetPreview = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <div className="bg-white p-8 rounded-xl shadow-2xl border border-slate-200 max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Widget de Reservas Público</h2>
        <p className="text-slate-500 mb-6">Inserta este código en tu sitio web para permitir que tus clientes reserven 24/7.</p>
        
        <div className="bg-slate-900 text-slate-200 p-4 rounded-lg text-left text-xs font-mono overflow-x-auto mb-6">
          {`<iframe src="https://clubsport.app/widget/v1" width="100%" height="600" />`}
        </div>

        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition">
          Probar Widget en Vivo
        </button>
      </div>
    </div>
  )
}

// Context Setup
export interface AppContextType {
  venues: Venue[];
  currentVenue: Venue;
  setCurrentVenue: (v: Venue) => void;
  courts: Court[];
  bookings: Booking[];
  addBooking: (b: Booking) => void;
  clients: Client[];
  services: Service[];
  tournaments: Tournament[];
  matches: Match[];
  classes: SchoolClass[];
}

const AppContext = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [venues] = useState<Venue[]>(MOCK_VENUES);
  const [currentVenue, setCurrentVenue] = useState<Venue>(MOCK_VENUES[0]);
  const [courts] = useState<Court[]>(MOCK_COURTS);
  const [bookings, setBookings] = useState<Booking[]>(MOCK_BOOKINGS);
  const [clients] = useState<Client[]>(MOCK_CLIENTS);
  const [services] = useState<Service[]>(MOCK_SERVICES);
  
  // New State
  const [tournaments] = useState<Tournament[]>(MOCK_TOURNAMENTS);
  const [matches] = useState<Match[]>(MOCK_MATCHES);
  const [classes] = useState<SchoolClass[]>(MOCK_CLASSES);

  const addBooking = (booking: Booking) => {
    setBookings(prev => [...prev, booking]);
  };

  return (
    <AppContext.Provider value={{ 
      venues, 
      currentVenue, 
      setCurrentVenue, 
      courts, 
      bookings, 
      addBooking, 
      clients,
      services,
      tournaments,
      matches,
      classes
    }}>
      {children}
    </AppContext.Provider>
  );
};

// Wrap Layout with Context Consumer for Outlet
const ContextLayout = () => {
  const context = useContext(AppContext);
  if (!context) return null;
  
  return (
    <Layout>
      <Outlet context={context} />
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route element={<ContextLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/courts" element={<CourtsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/widget" element={<WidgetPreview />} />
            <Route path="/services" element={<div className="p-10 text-center text-slate-500">Módulo de Servicios (Próximamente)</div>} />
            <Route path="/clients" element={<div className="p-10 text-center text-slate-500">Módulo de Clientes (Próximamente)</div>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
};

export default App;