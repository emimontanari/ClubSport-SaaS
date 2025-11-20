
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Trophy, Calendar, User, Plus, Medal, Edit2 } from 'lucide-react';
import { AppContextType } from '../App';
import { Modal } from '../components/ui/Modal';

export const TournamentsPage: React.FC = () => {
  const { tournaments, matches, courts } = useOutletContext<AppContextType>();
  const [selectedTournamentId, setSelectedTournamentId] = useState<string | null>(tournaments[0]?.id || null);
  const [isEditingMatch, setIsEditingMatch] = useState<string | null>(null);
  const [tempScores, setTempScores] = useState<{a: number, b: number}>({ a: 0, b: 0 });

  const selectedTournament = tournaments.find(t => t.id === selectedTournamentId);
  const tournamentMatches = matches.filter(m => m.tournamentId === selectedTournamentId);

  const handleEditScore = (matchId: string, currentA: number = 0, currentB: number = 0) => {
    setIsEditingMatch(matchId);
    setTempScores({ a: currentA, b: currentB });
  };

  // Mock save function
  const handleSaveScore = () => {
    // In a real app, this would update the context/backend
    console.log(`Saving score for match ${isEditingMatch}: ${tempScores.a} - ${tempScores.b}`);
    setIsEditingMatch(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Torneos y Fixtures</h1>
          <p className="text-slate-500">Administra competiciones, genera llaves y registra resultados.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
          <Plus size={18} />
          Nuevo Torneo
        </button>
      </div>

      {/* Tournament Selector */}
      <div className="flex overflow-x-auto pb-2 gap-4">
        {tournaments.map(t => (
          <div 
            key={t.id}
            onClick={() => setSelectedTournamentId(t.id)}
            className={`min-w-[280px] p-4 rounded-xl border cursor-pointer transition-all ${
              selectedTournamentId === t.id 
                ? 'bg-white border-indigo-500 ring-2 ring-indigo-100 shadow-md' 
                : 'bg-white border-slate-200 hover:border-indigo-300'
            }`}
          >
             <div className="flex justify-between items-start mb-2">
               <div className={`p-2 rounded-lg ${t.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                  <Trophy size={20} />
               </div>
               <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                 t.status === 'Activo' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
               }`}>
                 {t.status}
               </span>
             </div>
             <h3 className="font-bold text-slate-800">{t.name}</h3>
             <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
               <Calendar size={14} />
               {t.startDate}
             </div>
          </div>
        ))}
      </div>

      {selectedTournament && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info Column */}
          <div className="space-y-6">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Detalles</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-50">
                    <span className="text-slate-500">Deporte</span>
                    <span className="font-medium">{selectedTournament.sport}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-50">
                    <span className="text-slate-500">Formato</span>
                    <span className="font-medium">{selectedTournament.format}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-50">
                    <span className="text-slate-500">Equipos</span>
                    <span className="font-medium">{selectedTournament.maxTeams} Max</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-50">
                    <span className="text-slate-500">Premios</span>
                    <span className="font-medium text-indigo-600">{selectedTournament.prizePool}</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-100">
                   <button className="w-full py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:bg-slate-50">
                     Editar Configuración
                   </button>
                </div>
             </div>
          </div>

          {/* Fixture Column */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-6">
               <h3 className="font-bold text-lg text-slate-800">Partidos</h3>
               <button className="text-sm text-indigo-600 font-medium hover:underline">
                  Generar Siguiente Ronda
               </button>
            </div>

            <div className="space-y-4">
               {tournamentMatches.length === 0 ? (
                 <div className="text-center py-10 text-slate-400">
                   No hay partidos programados aún.
                 </div>
               ) : (
                 tournamentMatches.map(match => {
                   const courtName = courts.find(c => c.id === match.courtId)?.name || 'Cancha Asignada';
                   return (
                     <div key={match.id} className="border border-slate-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                       <div className="flex justify-between items-center mb-3">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{match.roundName}</span>
                         <div className="flex items-center gap-2 text-xs text-slate-500">
                            <Calendar size={12} />
                            <span>{match.date} • {match.time}</span>
                            <span className="text-slate-300">|</span>
                            <span>{courtName}</span>
                         </div>
                       </div>
                       
                       <div className="flex items-center justify-between gap-4">
                          <div className={`flex-1 text-right font-semibold ${match.isCompleted && (match.scoreA || 0) > (match.scoreB || 0) ? 'text-slate-900' : 'text-slate-500'}`}>
                            {match.teamA}
                          </div>

                          {/* Score Box */}
                          <div className="flex items-center gap-3 bg-slate-50 px-3 py-1 rounded-lg">
                             {isEditingMatch === match.id ? (
                               <>
                                 <input 
                                   type="number" 
                                   className="w-10 text-center border rounded p-1" 
                                   value={tempScores.a} 
                                   onChange={e => setTempScores({...tempScores, a: parseInt(e.target.value) || 0})}
                                 />
                                 <span className="text-slate-400">-</span>
                                 <input 
                                   type="number" 
                                   className="w-10 text-center border rounded p-1" 
                                   value={tempScores.b} 
                                   onChange={e => setTempScores({...tempScores, b: parseInt(e.target.value) || 0})}
                                 />
                                 <button onClick={handleSaveScore} className="ml-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded">Guardar</button>
                               </>
                             ) : (
                               <>
                                 <span className="text-xl font-bold text-slate-800">{match.scoreA ?? '-'}</span>
                                 <span className="text-slate-400">:</span>
                                 <span className="text-xl font-bold text-slate-800">{match.scoreB ?? '-'}</span>
                                 {!match.isCompleted && (
                                   <button onClick={() => handleEditScore(match.id, match.scoreA, match.scoreB)} className="ml-2 text-slate-400 hover:text-indigo-600">
                                     <Edit2 size={14} />
                                   </button>
                                 )}
                               </>
                             )}
                          </div>

                          <div className={`flex-1 text-left font-semibold ${match.isCompleted && (match.scoreB || 0) > (match.scoreA || 0) ? 'text-slate-900' : 'text-slate-500'}`}>
                            {match.teamB}
                          </div>
                       </div>
                     </div>
                   );
                 })
               )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};