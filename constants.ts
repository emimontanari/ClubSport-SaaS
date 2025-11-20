
import { Booking, BookingStatus, Client, Court, Match, SchoolClass, Service, SportType, Tournament, Venue } from "./types";

export const MOCK_VENUES: Venue[] = [
  { id: 'v1', name: 'Club Central Pádel & Fútbol', address: 'Av. del Deporte 123', opensAt: 8, closesAt: 23 },
  { id: 'v2', name: 'Polideportivo Norte', address: 'Calle 45 Nro 800', opensAt: 9, closesAt: 22 },
];

export const MOCK_SERVICES: Service[] = [
  { id: 's1', name: 'Alquiler de Paleta', price: 5, unit: 'per_booking', icon: 'racket' },
  { id: 's2', name: 'Uso de Quincho/Parrilla', price: 30, unit: 'per_booking', icon: 'flame' },
  { id: 's3', name: 'Pelotas Nuevas (Tubo)', price: 8, unit: 'per_booking', icon: 'circle' },
  { id: 's4', name: 'Servicio de Árbitro', price: 20, unit: 'per_hour', icon: 'user' },
];

export const MOCK_COURTS: Court[] = [
  { id: 'c1', venueId: 'v1', name: 'Cancha 1 (Cristal)', sport: SportType.PADEL, surface: 'Césped Sintético', pricePerHour: 40, isIndoor: true },
  { id: 'c2', venueId: 'v1', name: 'Cancha 2 (Panorámica)', sport: SportType.PADEL, surface: 'Césped Sintético', pricePerHour: 45, isIndoor: true },
  { id: 'c3', venueId: 'v1', name: 'Cancha F5 A', sport: SportType.FOOTBALL_5, surface: 'Sintético', pricePerHour: 60, isIndoor: false },
  { id: 'c4', venueId: 'v2', name: 'Polvo de Ladrillo 1', sport: SportType.TENNIS, surface: 'Polvo de Ladrillo', pricePerHour: 35, isIndoor: false },
];

export const MOCK_CLIENTS: Client[] = [
  { id: 'cl1', name: 'Juan Pérez', email: 'juan@ejemplo.com', phone: '+54911234567', tags: ['Habitual'] },
  { id: 'cl2', name: 'Equipo Alfa', email: 'capitan@alfa.com', phone: '+54911987654', tags: ['Torneo', 'Equipo'] },
  { id: 'cl3', name: 'María González', email: 'maria@ejemplo.com', phone: '+54911223344', tags: ['VIP'] },
  { id: 'cl4', name: 'Miguel Torres', email: 'miguel@ejemplo.com', phone: '+54911555666', tags: ['Alumno'] },
  { id: 'cl5', name: 'Lucía Fernández', email: 'lucia@ejemplo.com', phone: '+54911777888', tags: ['Alumno'] },
];

const today = new Date().toISOString().split('T')[0];

export const MOCK_BOOKINGS: Booking[] = [
  { 
    id: 'b1', 
    courtId: 'c1', 
    clientId: 'cl1', 
    date: today, 
    startTime: 10, 
    duration: 1.5, 
    status: BookingStatus.CONFIRMED, 
    totalPrice: 60, 
    services: ['s1'] 
  },
  { 
    id: 'b2', 
    courtId: 'c1', 
    clientId: 'cl2', 
    date: today, 
    startTime: 18, 
    duration: 1.5, 
    status: BookingStatus.PAID, 
    totalPrice: 75, 
    services: ['s3'] 
  },
  { 
    id: 'b3', 
    courtId: 'c3', 
    clientId: 'cl2', 
    date: today, 
    startTime: 20, 
    duration: 1, 
    status: BookingStatus.PENDING, 
    totalPrice: 60, 
    services: [] 
  },
];

export const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: 't1',
    name: 'Copa Verano Pádel 2024',
    sport: SportType.PADEL,
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    status: 'Activo',
    format: 'Liga',
    maxTeams: 16,
    prizePool: '$1000 + Equipamiento'
  },
  {
    id: 't2',
    name: 'Relámpago Fútbol 5',
    sport: SportType.FOOTBALL_5,
    startDate: '2024-05-20',
    endDate: '2024-05-21',
    status: 'Finalizado',
    format: 'Eliminatoria',
    maxTeams: 8,
    prizePool: 'Horas de Cancha Gratis'
  }
];

export const MOCK_MATCHES: Match[] = [
  { id: 'm1', tournamentId: 't1', roundName: 'Fecha 1', teamA: 'Los Rematadores', teamB: 'Maestros de la Red', date: today, time: '19:00', courtId: 'c1', isCompleted: false },
  { id: 'm2', tournamentId: 't1', roundName: 'Fecha 1', teamA: 'Viboras', teamB: 'Bandeja Hnos', date: today, time: '20:30', courtId: 'c2', isCompleted: false },
  { id: 'm3', tournamentId: 't2', roundName: 'Final', teamA: 'Estrella Roja', teamB: 'Luna Azul', date: '2024-05-21', time: '16:00', courtId: 'c3', scoreA: 5, scoreB: 3, isCompleted: true },
];

export const MOCK_CLASSES: SchoolClass[] = [
  { 
    id: 'sc1', 
    name: 'Escuela de Pádel - Niños', 
    sport: SportType.PADEL, 
    instructor: 'Prof. Alejandro', 
    level: 'Principiante', 
    dayOfWeek: 'Martes', 
    time: '17:00', 
    durationMinutes: 60, 
    pricePerMonth: 50, 
    maxStudents: 6, 
    enrolledStudentIds: ['cl4', 'cl5'] 
  },
  { 
    id: 'sc2', 
    name: 'Tenis Adultos - Cardio', 
    sport: SportType.TENNIS, 
    instructor: 'Prof. Sara', 
    level: 'Intermedio', 
    dayOfWeek: 'Jueves', 
    time: '19:00', 
    durationMinutes: 90, 
    pricePerMonth: 70, 
    maxStudents: 4, 
    enrolledStudentIds: ['cl1'] 
  }
];