
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { GraduationCap, Clock, Users, ChevronRight, Plus, Calendar } from 'lucide-react';
import { AppContextType } from '../App';

export const SchoolsPage: React.FC = () => {
  const { classes, clients } = useOutletContext<AppContextType>();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Escuela Deportiva</h1>
          <p className="text-slate-500">Gestiona clases, profesores y alumnos.</p>
        </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-colors">
          <Plus size={18} />
          Crear Clase
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((cls) => {
          const occupancyPercent = (cls.enrolledStudentIds.length / cls.maxStudents) * 100;
          const isFull = cls.enrolledStudentIds.length >= cls.maxStudents;

          return (
            <div key={cls.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                   <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <GraduationCap size={24} />
                   </div>
                   <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                     cls.level === 'Principiante' ? 'bg-green-100 text-green-700' :
                     cls.level === 'Intermedio' ? 'bg-blue-100 text-blue-700' :
                     'bg-orange-100 text-orange-700'
                   }`}>
                     {cls.level}
                   </span>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-1">{cls.name}</h3>
                <p className="text-sm text-slate-500 mb-4">con {cls.instructor}</p>

                <div className="space-y-3 border-t border-slate-100 pt-4 mb-4">
                   <div className="flex items-center text-sm text-slate-600">
                      <Calendar size={16} className="mr-2 text-slate-400" />
                      {cls.dayOfWeek}s
                   </div>
                   <div className="flex items-center text-sm text-slate-600">
                      <Clock size={16} className="mr-2 text-slate-400" />
                      {cls.time} ({cls.durationMinutes} min)
                   </div>
                   <div className="flex items-center text-sm text-slate-600">
                      <Users size={16} className="mr-2 text-slate-400" />
                      {cls.enrolledStudentIds.length} / {cls.maxStudents} Alumnos
                   </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-2 mb-1">
                  <div 
                    className={`h-2 rounded-full ${isFull ? 'bg-red-500' : 'bg-indigo-500'}`} 
                    style={{ width: `${occupancyPercent}%` }}
                  ></div>
                </div>
                <div className="text-xs text-right text-slate-400 mb-4">
                  {isFull ? 'Clase Completa' : `${cls.maxStudents - cls.enrolledStudentIds.length} lugares libres`}
                </div>

                <button className="w-full py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-all flex items-center justify-center">
                   Gestionar Alumnos <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          );
        })}

        {/* Add New Placeholder Card */}
        <div className="border-2 border-dashed border-slate-200 rounded-xl flex flex-col items-center justify-center p-6 text-slate-400 hover:border-indigo-300 hover:bg-indigo-50/30 cursor-pointer transition-all min-h-[320px]">
           <Plus size={40} className="mb-2 opacity-50" />
           <span className="font-medium">Añadir otra clase</span>
        </div>
      </div>
    </div>
  );
};