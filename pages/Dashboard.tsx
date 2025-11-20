
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Calendar, DollarSign, Sparkles, RefreshCw } from 'lucide-react';
import { AppContextType } from '../App';
import { generateBusinessInsights } from '../services/geminiService';

const COLORS = ['#4f46e5', '#0ea5e9', '#10b981', '#f59e0b'];

export const Dashboard: React.FC = () => {
  const { bookings, courts, clients, currentVenue } = useOutletContext<AppContextType>();
  const [aiInsights, setAiInsights] = useState<string | null>(null);
  const [isLoadingAi, setIsLoadingAi] = useState(false);

  // Calculate Stats
  const totalRevenue = bookings.reduce((acc, b) => acc + b.totalPrice, 0);
  const activeBookings = bookings.filter(b => b.status === 'Confirmada' || b.status === 'Pagada').length;
  
  // Revenue by Sport (Mock logic for chart)
  const revenueBySport = bookings.reduce((acc: any, booking) => {
    const court = courts.find(c => c.id === booking.courtId);
    if (court) {
      acc[court.sport] = (acc[court.sport] || 0) + booking.totalPrice;
    }
    return acc;
  }, {});
  
  const pieData = Object.keys(revenueBySport).map(key => ({
    name: key,
    value: revenueBySport[key]
  }));

  // Activity Mock Data
  const activityData = [
    { name: 'Lun', bookings: 12 },
    { name: 'Mar', bookings: 19 },
    { name: 'Mié', bookings: 15 },
    { name: 'Jue', bookings: 22 },
    { name: 'Vie', bookings: 28 },
    { name: 'Sáb', bookings: 32 },
    { name: 'Dom', bookings: 25 },
  ];

  const handleGenerateInsights = async () => {
    setIsLoadingAi(true);
    const result = await generateBusinessInsights(bookings, courts);
    setAiInsights(result);
    setIsLoadingAi(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-900">Panel Principal</h1>
        <div className="text-sm text-slate-500 font-medium bg-white px-3 py-1.5 rounded-full shadow-sm border border-slate-200">
          Sede: <span className="text-indigo-600">{currentVenue.name}</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard icon={DollarSign} label="Ingresos Totales" value={`$${totalRevenue.toLocaleString()}`} color="bg-indigo-500" />
        <StatCard icon={Calendar} label="Reservas Activas" value={activeBookings.toString()} color="bg-blue-500" />
        <StatCard icon={Users} label="Clientes Totales" value={clients.length.toString()} color="bg-emerald-500" />
        <StatCard icon={TrendingUp} label="Tasa de Ocupación" value="78%" color="bg-rose-500" />
      </div>

      {/* AI Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="text-yellow-300" />
            <h2 className="text-xl font-bold">Asistente IA Gemini</h2>
          </div>
          <button 
            onClick={handleGenerateInsights}
            disabled={isLoadingAi}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition flex items-center gap-2"
          >
             {isLoadingAi ? <RefreshCw className="animate-spin" size={16} /> : 'Generar Insights Inteligentes'}
          </button>
        </div>
        <div className="bg-black/20 rounded-xl p-4 min-h-[80px]">
          {aiInsights ? (
             <div className="prose prose-invert prose-sm max-w-none whitespace-pre-line">
               {aiInsights}
             </div>
          ) : (
            <p className="text-indigo-100 italic opacity-80">
              Haz clic en el botón para analizar el uso de tus canchas, tendencias de ingresos y recibir consejos de negocio accionables potenciados por Google Gemini.
            </p>
          )}
        </div>
      </div>

      {/* Charts Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Actividad Semanal</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="bookings" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue by Sport */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-800 mb-4">Ingresos por Deporte</h3>
          <div className="h-[300px] flex justify-center">
             {pieData.length > 0 ? (
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
             ) : (
               <div className="flex items-center justify-center text-slate-400">No hay datos disponibles</div>
             )}
          </div>
          <div className="flex justify-center gap-4 mt-4 flex-wrap">
            {pieData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                {entry.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color }: any) => (
  <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex items-center gap-4">
    <div className={`p-3 rounded-lg text-white ${color}`}>
      <Icon size={24} />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-2xl font-bold text-slate-800">{value}</p>
    </div>
  </div>
);