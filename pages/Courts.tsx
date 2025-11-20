
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Edit, Plus, Trash2 } from 'lucide-react';
import { AppContextType } from '../App';
import { SportType } from '../types';

export const CourtsPage: React.FC = () => {
  const { courts, currentVenue } = useOutletContext<AppContextType>();
  
  const filteredCourts = courts.filter(c => c.venueId === currentVenue.id);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
         <div>
           <h1 className="text-2xl font-bold text-slate-800">Canchas</h1>
           <p className="text-slate-500">Administra tus instalaciones en {currentVenue.name}</p>
         </div>
         <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
           <Plus size={18} />
           Nueva Cancha
         </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourts.map((court) => (
          <div key={court.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-24 bg-slate-100 flex items-center justify-center border-b border-slate-100">
               {/* Placeholder Visual based on sport */}
               <span className="text-4xl select-none grayscale opacity-30">
                 {court.sport === SportType.PADEL ? '🎾' : 
                  court.sport === SportType.FOOTBALL_5 ? '⚽️' : 
                  court.sport === SportType.TENNIS ? '🎾' : '🏀'}
               </span>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-slate-800">{court.name}</h3>
                <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide ${
                  court.isIndoor ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                }`}>
                  {court.isIndoor ? 'Techada' : 'Descubierta'}
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-slate-600 mb-4">
                <div className="flex justify-between">
                  <span>Deporte:</span>
                  <span className="font-medium">{court.sport}</span>
                </div>
                <div className="flex justify-between">
                  <span>Superficie:</span>
                  <span className="font-medium">{court.surface}</span>
                </div>
                <div className="flex justify-between">
                  <span>Precio:</span>
                  <span className="font-medium text-emerald-600">${court.pricePerHour}/hr</span>
                </div>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-100">
                <button className="flex-1 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 text-sm font-medium flex justify-center items-center gap-2">
                  <Edit size={16} /> Editar
                </button>
                 <button className="p-2 border border-red-100 text-red-500 rounded-lg hover:bg-red-50">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};