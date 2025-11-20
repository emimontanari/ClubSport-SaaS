
import React, { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Clock, DollarSign, User, CheckCircle } from 'lucide-react';
import { AppContextType } from '../App';
import { Modal } from '../components/ui/Modal';
import { BookingStatus, SportType } from '../types';

const TIME_SLOTS = Array.from({ length: 16 }, (_, i) => 8 + i); // 8:00 to 23:00

export const CalendarPage: React.FC = () => {
  const { bookings, courts, clients, services, addBooking, currentVenue } = useOutletContext<AppContextType>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{ courtId: string, time: number } | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    clientId: '',
    duration: 1.5,
    status: BookingStatus.CONFIRMED,
    selectedServices: [] as string[]
  });

  const filteredCourts = useMemo(() => 
    courts.filter(c => c.venueId === currentVenue.id), 
  [courts, currentVenue.id]);

  const dateString = selectedDate.toISOString().split('T')[0];

  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const handleSlotClick = (courtId: string, time: number) => {
    // Check if slot is occupied
    const isOccupied = bookings.some(b => 
      b.courtId === courtId && 
      b.date === dateString && 
      time >= b.startTime && 
      time < (b.startTime + b.duration)
    );

    if (!isOccupied) {
      setSelectedSlot({ courtId, time });
      setIsModalOpen(true);
      setFormData({ ...formData, clientId: clients[0]?.id || '' });
    }
  };

  const handleSaveBooking = () => {
    if (!selectedSlot || !formData.clientId) return;

    const court = courts.find(c => c.id === selectedSlot.courtId);
    if (!court) return;

    // Calculate total
    let total = court.pricePerHour * formData.duration;
    // Add services
    formData.selectedServices.forEach(sId => {
        const svc = services.find(s => s.id === sId);
        if (svc) total += svc.price;
    });

    addBooking({
      id: Math.random().toString(36).substr(2, 9),
      courtId: selectedSlot.courtId,
      clientId: formData.clientId,
      date: dateString,
      startTime: selectedSlot.time,
      duration: formData.duration,
      status: formData.status,
      totalPrice: total,
      services: formData.selectedServices
    });
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Calendario de Reservas</h1>
          <p className="text-slate-500">{currentVenue.name}</p>
        </div>
        
        <div className="flex items-center bg-white p-1 rounded-lg border border-slate-200 shadow-sm">
          <button onClick={handlePrevDay} className="p-2 hover:bg-slate-100 rounded-md text-slate-600">
            <ChevronLeft size={20} />
          </button>
          <div className="px-4 font-medium text-slate-700 min-w-[180px] text-center capitalize">
            {selectedDate.toLocaleDateString('es-ES', { weekday: 'short', month: 'short', day: 'numeric' })}
          </div>
          <button onClick={handleNextDay} className="p-2 hover:bg-slate-100 rounded-md text-slate-600">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header Row (Courts) */}
          <div className="grid border-b border-slate-200 bg-slate-50" style={{ gridTemplateColumns: `60px repeat(${filteredCourts.length}, 1fr)` }}>
            <div className="p-3 border-r border-slate-200 text-center text-xs font-semibold text-slate-400 uppercase">Hora</div>
            {filteredCourts.map(court => (
              <div key={court.id} className="p-3 border-r border-slate-200 last:border-r-0 text-center">
                <div className="font-semibold text-slate-700">{court.name}</div>
                <div className="text-xs text-slate-500">{court.sport}</div>
              </div>
            ))}
          </div>

          {/* Time Rows */}
          <div className="relative">
            {TIME_SLOTS.map((time) => (
              <div key={time} className="grid group" style={{ gridTemplateColumns: `60px repeat(${filteredCourts.length}, 1fr)` }}>
                {/* Time Label */}
                <div className="h-16 border-b border-r border-slate-100 text-xs text-slate-400 flex items-start justify-center pt-2 bg-slate-50/50">
                  {time}:00
                </div>

                {/* Slots */}
                {filteredCourts.map(court => {
                   const booking = bookings.find(b => 
                      b.courtId === court.id && 
                      b.date === dateString && 
                      Math.floor(b.startTime) === time
                   );
                   
                   // If this slot is covered by a booking starting earlier
                   const isCovered = bookings.some(b => 
                      b.courtId === court.id && 
                      b.date === dateString && 
                      b.startTime < time && 
                      (b.startTime + b.duration) > time
                   );

                   if (isCovered) return <div key={`${court.id}-${time}`} className="border-b border-r border-slate-100 bg-slate-50/30" />;

                   if (booking) {
                      // Calculate height based on duration (assuming 64px per hour)
                      const height = booking.duration * 64; 
                      const statusColors = {
                        [BookingStatus.PAID]: 'bg-emerald-100 border-emerald-300 text-emerald-800',
                        [BookingStatus.CONFIRMED]: 'bg-blue-100 border-blue-300 text-blue-800',
                        [BookingStatus.PENDING]: 'bg-amber-100 border-amber-300 text-amber-800',
                        [BookingStatus.CANCELLED]: 'bg-gray-100 border-gray-300 text-gray-500',
                        [BookingStatus.NO_SHOW]: 'bg-red-100 border-red-300 text-red-800',
                      };
                      const clientName = clients.find(c => c.id === booking.clientId)?.name || 'Desconocido';

                      return (
                        <div key={booking.id} className="relative border-b border-r border-slate-100 p-1 z-10">
                          <div 
                            className={`absolute top-0 left-0 right-0 m-1 rounded-md border-l-4 shadow-sm p-2 text-xs overflow-hidden cursor-pointer hover:opacity-90 transition-opacity ${statusColors[booking.status]}`}
                            style={{ height: `${height - 8}px` }}
                          >
                             <div className="font-bold truncate">{clientName}</div>
                             <div className="opacity-75 truncate">{booking.startTime}:00 - {booking.startTime + booking.duration}:00</div>
                             {booking.services.length > 0 && <div className="mt-1 text-[10px] bg-white/40 inline-block px-1 rounded">+Extras</div>}
                          </div>
                        </div>
                      );
                   }

                   return (
                     <div 
                        key={`${court.id}-${time}`} 
                        className="h-16 border-b border-r border-slate-100 hover:bg-indigo-50 cursor-pointer transition-colors flex items-center justify-center opacity-0 hover:opacity-100"
                        onClick={() => handleSlotClick(court.id, time)}
                      >
                        <Plus className="text-indigo-400" size={16} />
                      </div>
                   );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Booking Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Nueva Reserva">
        <div className="space-y-4">
           <div className="bg-indigo-50 p-3 rounded-lg flex justify-between items-center text-sm text-indigo-800 mb-4">
             <span className="font-semibold capitalize">{selectedDate.toLocaleDateString('es-ES', {weekday: 'long', day: 'numeric'})} a las {selectedSlot?.time}:00</span>
             <span>{courts.find(c => c.id === selectedSlot?.courtId)?.name}</span>
           </div>

           <div>
             <label className="block text-sm font-medium text-slate-700 mb-1">Cliente</label>
             <select 
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.clientId}
                onChange={e => setFormData({...formData, clientId: e.target.value})}
              >
                <option value="" disabled>Seleccionar cliente</option>
                {clients.map(c => (
                  <option key={c.id} value={c.id}>{c.name} ({c.phone})</option>
                ))}
             </select>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Duración</label>
                <select 
                  className="w-full p-2.5 border border-slate-300 rounded-lg"
                  value={formData.duration}
                  onChange={e => setFormData({...formData, duration: Number(e.target.value)})}
                >
                  <option value={1}>1 Hora</option>
                  <option value={1.5}>1.5 Horas</option>
                  <option value={2}>2 Horas</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Estado</label>
                <select 
                  className="w-full p-2.5 border border-slate-300 rounded-lg"
                  value={formData.status}
                  onChange={e => setFormData({...formData, status: e.target.value as BookingStatus})}
                >
                  {Object.values(BookingStatus).map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
           </div>

           <div>
             <label className="block text-sm font-medium text-slate-700 mb-2">Extras</label>
             <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto border border-slate-200 rounded-lg p-2">
                {services.map(svc => (
                   <label key={svc.id} className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                        checked={formData.selectedServices.includes(svc.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData(prev => ({ ...prev, selectedServices: [...prev.selectedServices, svc.id]}));
                          } else {
                            setFormData(prev => ({ ...prev, selectedServices: prev.selectedServices.filter(id => id !== svc.id)}));
                          }
                        }}
                      />
                      <span className="text-sm text-slate-700 flex-1">{svc.name}</span>
                      <span className="text-sm font-semibold text-slate-900">${svc.price}</span>
                   </label>
                ))}
             </div>
           </div>

           <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg">Cancelar</button>
              <button onClick={handleSaveBooking} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 shadow-sm">
                Crear Reserva
              </button>
           </div>
        </div>
      </Modal>
    </div>
  );
};