
export enum SportType {
  PADEL = 'Pádel',
  TENNIS = 'Tenis',
  FOOTBALL_5 = 'Fútbol 5',
  FOOTBALL_7 = 'Fútbol 7',
  BASKETBALL = 'Básquet',
  OTHER = 'Otro'
}

export enum BookingStatus {
  PENDING = 'Pendiente',
  CONFIRMED = 'Confirmada', // Señado
  PAID = 'Pagada',
  CANCELLED = 'Cancelada',
  NO_SHOW = 'Ausente'
}

export interface Service {
  id: string;
  name: string;
  price: number;
  unit: 'per_booking' | 'per_hour' | 'per_person';
  icon: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  opensAt: number; // Hour (0-23)
  closesAt: number; // Hour (0-23)
}

export interface Court {
  id: string;
  venueId: string;
  name: string;
  sport: SportType;
  surface: string;
  pricePerHour: number;
  isIndoor: boolean;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];
}

export interface Booking {
  id: string;
  courtId: string;
  clientId: string;
  date: string; // YYYY-MM-DD
  startTime: number; // Hour (e.g., 14.5 for 14:30)
  duration: number; // Hours
  status: BookingStatus;
  totalPrice: number;
  services: string[]; // IDs of selected services
  notes?: string;
}

export interface DashboardStats {
  revenue: number;
  occupancy: number;
  activeBookings: number;
  newClients: number;
}

// New Types for Tournaments and Schools

export interface Tournament {
  id: string;
  name: string;
  sport: SportType;
  startDate: string;
  endDate: string;
  status: 'Borrador' | 'Activo' | 'Finalizado';
  format: 'Liga' | 'Eliminatoria' | 'Grupos';
  maxTeams: number;
  prizePool: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  roundName: string; // e.g., "Cuartos de Final", "Fecha 1"
  teamA: string;
  teamB: string;
  date: string;
  time: string;
  courtId?: string;
  scoreA?: number;
  scoreB?: number;
  isCompleted: boolean;
}

export interface SchoolClass {
  id: string;
  name: string;
  sport: SportType;
  instructor: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzado';
  dayOfWeek: string;
  time: string;
  durationMinutes: number;
  pricePerMonth: number;
  maxStudents: number;
  enrolledStudentIds: string[];
}