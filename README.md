<div align="center">

# ⚽ ClubSport SaaS

### Plataforma integral de gestión para clubes deportivos

Una solución completa para automatizar reservas, gestionar múltiples sedes, organizar torneos y escuelas deportivas con inteligencia artificial.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=flat&logo=google&logoColor=white)](https://ai.google.dev/)

[Demo en Vivo](https://ai.studio/apps/drive/1WiJZ0dZYRwCNlIEH5i7H94p-CmTbseq5) · [Reportar Bug](../../issues) · [Solicitar Feature](../../issues)

</div>

---

## 📋 Tabla de Contenidos

- [Problema que Resuelve](#-problema-que-resuelve)
- [Características Principales](#-características-principales)
- [Stack Tecnológico](#️-stack-tecnológico)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Arquitectura del Proyecto](#-arquitectura-del-proyecto)
- [Roadmap](#-roadmap)
- [Casos de Uso](#-casos-de-uso)
- [Contribuir](#-contribuir)

---

## 🎯 Problema que Resuelve

Los clubes deportivos enfrentan desafíos críticos en su operación diaria:

### 🔴 Desafíos Actuales
- **Pérdida de reservas** por gestión manual (llamadas, WhatsApp, papel)
- **Baja ocupación** en horarios valle por falta de visibilidad
- **No-shows** que impactan la rentabilidad (15-30% en promedio)
- **Gestión multi-sede** compleja y sin visibilidad consolidada
- **Torneos desorganizados** con fixtures manuales en Excel
- **Escuelas deportivas** sin seguimiento de alumnos y pagos
- **Tiempo perdido** respondiendo las mismas preguntas en redes sociales
- **Falta de datos** para tomar decisiones estratégicas

### ✅ Solución: ClubSport SaaS
Plataforma todo-en-uno que automatiza la operación completa de clubes deportivos, desde reservas 24/7 hasta reportes impulsados por IA, liberando tiempo para enfocarse en la experiencia del cliente.

---

## 🚀 Características Principales

### 📅 Sistema de Reservas Inteligente
- **Calendario visual** con drag & drop para gestión rápida
- **Widget embebible** para tu sitio web - reservas 24/7 sin intervención
- **Gestión de horarios** por cancha con bloqueo de disponibilidad
- **Múltiples deportes**: Pádel, Tenis, Fútbol 5/7, Básquet y más
- **Estados de reserva**: Pendiente, Confirmada (Señada), Pagada, Cancelada, No-Show
- **Servicios adicionales**: Alquiler de equipamiento, quincho, pelotas, árbitro

### 🏢 Gestión Multi-Sede
- **Vista consolidada** de todas las sucursales
- **Selector de sede** con métricas independientes por ubicación
- **Configuración personalizada** por venue (horarios, canchas, precios)
- **Reportes comparativos** entre sedes

### 🎓 Escuelas Deportivas
- **Gestión de clases** por deporte, nivel e instructor
- **Control de inscripciones** con límite de cupos
- **Calendario semanal** de clases recurrentes
- **Seguimiento de alumnos** con historial y progreso
- **Facturación mensual** automática

### 🏆 Torneos y Competencias
- **Creador de torneos** con múltiples formatos (Liga, Eliminatoria, Grupos)
- **Gestión de fixtures** automática con drag & drop
- **Seguimiento de partidos** con resultados en tiempo real
- **Asignación de canchas** y horarios optimizada
- **Rankings y estadísticas** por equipo y jugador

### 👥 Gestión de Clientes
- **Perfiles completos** con historial de reservas
- **Sistema de etiquetas** (Habitual, VIP, Equipo, Alumno)
- **Segmentación** para campañas y promociones
- **Comunicación centralizada** (próximamente)

### 📊 Dashboard con IA
- **Métricas en tiempo real**: Ingresos, ocupación, reservas activas, clientes nuevos
- **Gráficos interactivos** de performance con Recharts
- **Insights impulsados por Gemini AI** para decisiones estratégicas
- **Predicción de demanda** para optimizar precios (roadmap)

---

## 🛠️ Stack Tecnológico

### Frontend (MVP Actual)
```
- React 19             → Framework principal
- TypeScript           → Type safety
- Vite                 → Build tool ultrarrápido
- React Router DOM     → Navegación SPA
- Lucide React         → Sistema de iconos
- Recharts             → Gráficos y visualizaciones
- TailwindCSS          → Estilos (implícito)
```

### IA y Automatización
```
- Gemini AI (@google/genai)  → Insights y análisis inteligente
- n8n (roadmap)              → Automatización de workflows
```

### Roadmap Técnico (v2.0)
```
🔜 Migración a arquitectura escalable:
   - TurboRepo           → Monorepo para multi-apps
   - Next.js 14+         → SSR, ISR, API Routes
   - shadcn/ui           → Componentes reutilizables
   - PostgreSQL/Supabase → Base de datos persistente
   - n8n                 → Automatizaciones completas
   - Clerk/NextAuth      → Autenticación robusta
```

---

## 📦 Instalación

### Requisitos Previos
- Node.js 18+ ([Descargar](https://nodejs.org/))
- npm o pnpm
- Gemini API Key ([Obtener gratis](https://ai.google.dev/))

### Paso a Paso

1. **Clonar el repositorio**
```bash
git clone https://github.com/emimontanari/ClubSport-SaaS.git
cd ClubSport-SaaS
```

2. **Instalar dependencias**
```bash
npm install
# o con pnpm
pnpm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env.local en la raíz del proyecto
echo "GEMINI_API_KEY=tu_api_key_aqui" > .env.local
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:5173
```

### Build para Producción
```bash
npm run build
npm run preview  # Para preview local del build
```

---

## 💡 Uso

### Navegación Principal

#### 🏠 Dashboard
- Vista general de métricas clave
- Gráficos de ocupación e ingresos
- Alertas y acciones rápidas

#### 📅 Calendario
- Vista semanal/diaria de reservas
- Crear nueva reserva con formulario modal
- Filtrar por cancha y estado
- Drag & drop para reagendar (roadmap)

#### 🏟️ Canchas
- Listado de todas las canchas por sede
- Configuración de precios por hora
- Ver disponibilidad en tiempo real

#### 🏆 Torneos
- Listado de torneos activos y finalizados
- Crear nuevo torneo con formato personalizado
- Gestionar fixtures y resultados

#### 🎓 Escuelas
- Clases programadas semanalmente
- Control de inscripciones por cupo
- Gestión de instructores

#### 🔌 Widget
- Código para embeber en tu sitio web
- Preview del widget público de reservas

### Datos de Prueba
El MVP incluye datos mock para explorar todas las funcionalidades:
- 2 sedes configuradas
- 4 canchas (Pádel, Tenis, Fútbol 5)
- 5 clientes de ejemplo
- 3 reservas activas
- 2 torneos
- 2 escuelas deportivas

---

## 🏗️ Arquitectura del Proyecto

### Estructura de Archivos
```
ClubSport-SaaS/
├── components/          # Componentes React reutilizables
│   └── Layout.tsx      # Layout principal con navegación
├── pages/              # Páginas/vistas principales
│   ├── Dashboard.tsx   # Métricas y overview
│   ├── Calendar.tsx    # Sistema de reservas
│   ├── Courts.tsx      # Gestión de canchas
│   ├── Tournaments.tsx # Torneos
│   └── Schools.tsx     # Escuelas deportivas
├── services/           # Lógica de negocio y API calls
├── types.ts            # Definiciones TypeScript
├── constants.ts        # Datos mock y configuración
├── App.tsx             # Router y Context Provider
├── index.tsx           # Entry point
└── vite.config.ts      # Configuración de Vite
```

### Tipos Principales
```typescript
// Deportes soportados
SportType: PADEL | TENNIS | FOOTBALL_5 | FOOTBALL_7 | BASKETBALL | OTHER

// Estados de reserva
BookingStatus: PENDING | CONFIRMED | PAID | CANCELLED | NO_SHOW

// Entidades core
Venue       → Sedes/locaciones
Court       → Canchas por sede
Booking     → Reservas con cliente y servicios
Client      → Perfiles de clientes
Service     → Servicios adicionales
Tournament  → Torneos competitivos
Match       → Partidos con equipos y resultados
SchoolClass → Clases deportivas recurrentes
```

### Context API
El estado global se maneja con React Context (`AppContext`) que provee:
- Lista de sedes y sede actual seleccionada
- Canchas, reservas, clientes, servicios
- Torneos, partidos y clases
- Funciones para agregar/modificar entidades

---

## 📊 Estado Actual de Funcionalidades

### ✅ Funcionalidades Implementadas (MVP v1.0)

#### Sistema de Reservas
- ✅ Calendario visual diario con vista por hora
- ✅ Creación manual de reservas desde panel
- ✅ Selección de cliente, duración y estado
- ✅ Agregar servicios adicionales (paletas, quincho, pelotas, árbitro)
- ✅ Cálculo automático de precio total
- ✅ Validación de ocupación (sin superposiciones)
- ✅ Estados de reserva: Pendiente, Confirmada, Pagada, Cancelada, No-Show
- ✅ Códigos de color por estado

#### Dashboard con IA
- ✅ 4 KPIs principales: Ingresos, Reservas Activas, Clientes, Ocupación
- ✅ Gráfico de actividad semanal (BarChart)
- ✅ Gráfico de ingresos por deporte (PieChart)
- ✅ Integración con Gemini AI para insights inteligentes
- ✅ Selector de sede actual

#### Gestión Multi-Sede
- ✅ 2 sedes configuradas
- ✅ Selector de sede en Dashboard
- ✅ Filtrado de canchas por sede

#### Gestión de Canchas
- ✅ Listado de canchas por sede
- ✅ Información: nombre, deporte, superficie, precio/hora
- ✅ Visualización con emojis por deporte
- ✅ Estados: techada/descubierta

#### Torneos y Fixtures
- ✅ Listado de torneos (Activos/Finalizados)
- ✅ Información: formato, fechas, equipos, premios
- ✅ Gestión de fixtures y partidos
- ✅ Edición de resultados (scores)
- ✅ Indicadores visuales de partidos completados

#### Escuelas Deportivas
- ✅ Listado de clases por deporte
- ✅ Información: instructor, nivel, horario, cupos
- ✅ Barra de progreso de inscripciones
- ✅ Indicador de clase completa

#### Navegación y UI
- ✅ Layout responsive con sidebar
- ✅ 8 secciones de navegación
- ✅ Menú hamburguesa para móviles
- ✅ Sistema de iconos con Lucide React
- ✅ Animaciones y transiciones

### ⚠️ Limitaciones Actuales

#### Persistencia
- ❌ **Datos MOCK en memoria** (se pierden al refrescar)
- ❌ Sin base de datos real
- ❌ Sin sistema de backups

#### Autenticación
- ❌ Sin login/signup
- ❌ Sin roles ni permisos
- ❌ Sin multi-tenancy
- ❌ Acceso abierto a todas las funcionalidades

#### CRUD Incompleto
- ❌ No se pueden crear/editar/eliminar canchas
- ❌ No se pueden crear/editar torneos
- ❌ No se pueden crear/editar clases
- ❌ No se pueden editar/cancelar reservas existentes
- ❌ No se pueden gestionar clientes ni servicios

#### Widget Público
- ⚠️ Página de preview implementada
- ❌ Widget embebible NO funcional
- ❌ Sin reservas online desde exterior

#### Automatizaciones
- ❌ Sin notificaciones automáticas
- ❌ Sin recordatorios
- ❌ Sin integración con WhatsApp/Email/SMS
- ❌ Sin chatbot

#### Pagos
- ❌ Sin integración con pasarelas
- ❌ Sin facturación electrónica
- ❌ Solo registro manual de pagos

---

## 🗺️ Roadmap

### ✅ Fase 1: MVP (Completado - v1.0)
- [x] Dashboard con métricas básicas e integración IA
- [x] Sistema de reservas con calendario visual
- [x] Gestión multi-sede básica
- [x] Módulo de torneos (visualización y resultados)
- [x] Módulo de escuelas deportivas (visualización)
- [x] UI/UX completa y responsive

**Estado**: ✅ Listo para DEMO | ❌ NO listo para PRODUCCIÓN

---

### 🚧 Fase 2: Fundamentos de Producción (Q2 2025)

#### 2.1 Migración a Stack Escalable
- [ ] **Migración a Next.js 14+**
  - SSR y ISR para performance
  - API Routes para backend
  - Middleware para protección de rutas
- [ ] **Base de datos persistente**
  - PostgreSQL con Supabase
  - Prisma ORM
  - Sistema de migraciones
  - Backups automáticos diarios
- [ ] **Autenticación y autorización**
  - Login/Signup con Clerk o NextAuth
  - Roles: Super Admin, Admin, Manager, Instructor, Cliente
  - Multi-tenancy (un club = un tenant)
  - Protección de rutas por rol

#### 2.2 CRUD Completo
- [ ] **Gestión de Canchas**
  - Crear, editar, eliminar canchas
  - Configurar horarios de disponibilidad
  - Bloquear slots por mantenimiento
  - Asignar responsables por cancha
- [ ] **Gestión de Clientes**
  - CRUD completo de clientes
  - Historial de reservas por cliente
  - Sistema de etiquetas avanzado
  - Notas internas y seguimiento
- [ ] **Gestión de Servicios Adicionales**
  - CRUD de servicios
  - Configuración de precios
  - Disponibilidad por sede
  - Control de inventario básico
- [ ] **Sistema de Reservas Completo**
  - Editar reservas existentes
  - Cancelar reservas con políticas
  - Drag & drop para reagendar
  - Vista semanal y mensual
  - Filtros avanzados

#### 2.3 Widget Público de Reservas
- [ ] **Widget embebible funcional**
  - Iframe responsive
  - Disponibilidad en tiempo real
  - Formulario de reserva
  - Captura de datos de contacto
  - Verificación de disponibilidad
- [ ] **Personalización del widget**
  - Colores del club
  - Logo personalizado
  - Textos configurables

---

### 🤖 Fase 3: Automatización e IA (Q3 2025)

#### 3.1 Sistema de Notificaciones
- [ ] **Recordatorios automáticos**
  - 24 horas antes de la reserva
  - 2 horas antes (re-confirmación)
  - Confirmación al crear reserva
- [ ] **Canales de comunicación**
  - Email transaccional (SendGrid/Resend)
  - WhatsApp Business API
  - SMS para urgencias (Twilio)
- [ ] **Plantillas personalizables**
  - Editor de mensajes
  - Variables dinámicas
  - A/B testing

#### 3.2 Chatbot con IA 24/7
- [ ] **Funcionalidades del bot**
  - Consultas sobre horarios y disponibilidad
  - Toma de reservas automática
  - Consultas de precios
  - Escalamiento inteligente a humano
- [ ] **Canales soportados**
  - WhatsApp
  - Instagram DM
  - Facebook Messenger
  - Widget web
- [ ] **Entrenamiento con IA**
  - Base de conocimiento del club
  - Aprendizaje de conversaciones
  - Análisis de sentimiento

#### 3.3 Gestión de No-Shows
- [ ] Re-confirmación automática 2h antes
- [ ] Lista de espera automática
- [ ] Sistema de penalización configurable
- [ ] Alertas a administradores
- [ ] Estadísticas de no-show por cliente

#### 3.4 Hub de Marketing Automático
- [ ] **Generación de contenido con IA**
  - Posts para Instagram/Facebook
  - Copys para promociones
  - Hashtags inteligentes
- [ ] **Publicación automática**
  - Buffer/Hootsuite integration
  - Scheduling inteligente
  - Analytics de engagement
- [ ] **Campañas segmentadas**
  - Email marketing por segmento
  - WhatsApp bulk (con opt-in)
  - Promociones flash en horarios valle

---

### 🚀 Fase 4: Inteligencia y Fidelización (Q4 2025)

#### 4.1 Sistema de Fidelización
- [ ] **Programa de puntos**
  - Acumulación por reservas
  - Puntos por monto gastado
  - Niveles: Bronce, Plata, Oro, Platinum
- [ ] **Recompensas**
  - Descuentos por puntos
  - Reservas gratis
  - Upgrades de cancha
  - Servicios premium sin cargo
- [ ] **Gamificación**
  - Logros y badges
  - Tabla de líderes
  - Desafíos mensuales
- [ ] **Detección de abandono**
  - IA predice clientes en riesgo
  - Campañas de reactivación automáticas
  - Ofertas personalizadas

#### 4.2 Predicción de Demanda con ML
- [ ] **Precios dinámicos**
  - Ajuste automático según ocupación
  - Análisis de elasticidad de precios
  - Promociones inteligentes en horarios valle
- [ ] **Forecast de ingresos**
  - Predicción mensual/anual
  - Simulaciones de escenarios
  - Alertas de desviaciones
- [ ] **Recomendaciones personalizadas**
  - Horarios sugeridos por cliente
  - Cross-selling de servicios
  - Upselling inteligente

#### 4.3 App Móvil Nativa
- [ ] **React Native / Flutter**
  - iOS y Android
  - Diseño nativo por plataforma
- [ ] **Funcionalidades clave**
  - Reservas rápidas
  - Check-in con QR
  - Notificaciones push
  - Wallet de puntos de fidelización
  - Chat con soporte
- [ ] **Offline-first**
  - Funcionalidad básica sin internet
  - Sincronización automática

---

### 🌟 Fase 5: Ecosistema Completo (2026)

#### 5.1 Sistema de Pagos Integrado
- [ ] **Pasarelas de pago**
  - MercadoPago (LATAM)
  - Stripe (Global)
  - PayPal
- [ ] **Tipos de pago**
  - Pago completo online
  - Señas + saldo
  - Pagos recurrentes (suscripciones)
- [ ] **Facturación electrónica**
  - Integración con AFIP (Argentina)
  - Facturas automáticas
  - Gestión de mora
  - Recordatorios de pago

#### 5.2 Control de Acceso Inteligente
- [ ] **Check-in con QR**
  - Generación de códigos por reserva
  - Validación en tiempo real
  - Control de horarios
- [ ] **Integración con torniquetes**
  - API para hardware de acceso
  - Control biométrico (facial/huella)
  - Registro de ingresos/egresos
- [ ] **Alertas de seguridad**
  - Accesos no autorizados
  - Exceso de capacidad
  - Permanencia prolongada

#### 5.3 Gestión de Inventario y Equipamiento
- [ ] **Alquiler de equipamiento**
  - Paletas, raquetas, pelotas
  - Chalecos, conos, arcos
  - Sistema de préstamo/devolución
  - Facturación automática
- [ ] **Control de stock**
  - Inventario en tiempo real
  - Alertas de stock bajo
  - Órdenes de compra automáticas
  - Proveedores integrados
- [ ] **Vestuarios y Lockers**
  - Asignación automática de lockers
  - Códigos QR para acceso
  - Gestión de limpieza
  - Reserva de duchas premium

#### 5.4 Gestión de Empleados
- [ ] **Sistema de turnos**
  - Generación automática de horarios
  - Turnos rotativos
  - Swap de turnos entre empleados
- [ ] **Control de asistencia**
  - Check-in con geolocalización
  - Registro de horas trabajadas
  - Horas extras automáticas
- [ ] **Liquidaciones**
  - Cálculo de sueldos
  - Descuentos y bonos
  - Integración con contabilidad
- [ ] **Evaluaciones**
  - Performance reviews
  - Feedback de clientes
  - Capacitaciones requeridas

#### 5.5 Suscripciones y Membresías
- [ ] **Planes de suscripción**
  - Mensual, trimestral, anual
  - Descuentos por volumen
  - Acceso preferencial en pico
- [ ] **Beneficios por nivel**
  - Socios básicos, premium, VIP
  - Cancelación sin cargo
  - Invitados sin cargo
- [ ] **Gestión automática**
  - Renovación automática
  - Alertas de vencimiento
  - Cobro recurrente

#### 5.6 Mantenimiento Predictivo
- [ ] **Calendario de mantenimiento**
  - Preventivo programado
  - Correctivo por incidencias
  - Historial completo por cancha
- [ ] **Alertas inteligentes**
  - Detección de deterioro
  - Predicción de vida útil
  - Priorización de reparaciones
- [ ] **Gestión de proveedores**
  - Base de datos de proveedores
  - Cotizaciones automáticas
  - Evaluación de servicios

#### 5.7 Sistema de Reviews y Reputación
- [ ] **Evaluaciones de clientes**
  - Calificar canchas, instructores, servicios
  - Reviews públicas y privadas
  - Fotos y videos
- [ ] **Análisis con IA**
  - Análisis de sentimiento
  - Detección de problemas recurrentes
  - Respuestas sugeridas automáticas
- [ ] **Reputación online**
  - Monitoreo de Google Reviews
  - Integración con TripAdvisor
  - Benchmarking vs. competencia
  - Dashboard de NPS (Net Promoter Score)

#### 5.8 Eventos Especiales y Corporativos
- [ ] **Organización de eventos**
  - Campeonatos y ligas
  - Clínicas con profesionales
  - Eventos corporativos
  - Fiestas y celebraciones
- [ ] **Gestión completa**
  - Inscripción online
  - Pagos grupales
  - Catering integrado
  - Fotografía y video
- [ ] **Marketing de eventos**
  - Landing pages automáticas
  - Email marketing
  - Venta de entradas online

#### 5.9 Sistema de Referidos
- [ ] **Programa "Trae un Amigo"**
  - Código único por cliente
  - Bonos para referidor y referido
  - Tracking de conversión
- [ ] **Incentivos escalables**
  - 1 amigo = 10% descuento
  - 5 amigos = 1 reserva gratis
  - 10 amigos = membresía gratis
- [ ] **Gamificación**
  - Tabla de mejores referidores
  - Premios mensuales
  - Competencias entre socios

#### 5.10 Marketplace de Servicios
- [ ] **Tienda online**
  - Productos del club (merchandising)
  - Equipamiento deportivo
  - Bebidas y snacks
  - Reserva de productos
- [ ] **Servicios profesionales**
  - Fisioterapeutas
  - Nutricionistas
  - Entrenadores personales
  - Masajes deportivos
- [ ] **Comisión por venta**
  - Modelo de marketplace
  - Pagos automáticos a proveedores
  - Facturación integrada

---

## 🆕 Funcionalidades Innovadoras (Roadmap Extendido)

### Análisis Avanzado con IA
- **Predicción de lesiones**: Análisis de patrones de juego
- **Optimización de superficies**: Recomendaciones por deporte
- **Análisis de video**: Grabación automática de partidos con resumen IA
- **Coaching virtual**: Sugerencias técnicas post-partido

### Integración con Wearables
- **Dispositivos deportivos**: Garmin, Fitbit, Apple Watch
- **Métricas en vivo**: Frecuencia cardíaca, calorías, pasos
- **Desafíos de fitness**: Competencias entre socios
- **Historial de rendimiento**: Evolución personal

### Sostenibilidad
- **Medición de huella de carbono**: Por reserva, por cliente
- **Energías renovables**: Panel solar tracking
- **Programa de reciclaje**: Incentivos por pelotas/paletas viejas
- **Compensación de CO2**: Plantación de árboles por reserva

### Blockchain y NFTs (Exploratorio)
- **Tokens de fidelización**: Recompensas en blockchain
- **NFTs de logros**: Coleccionables digitales por torneos
- **Smart contracts**: Reservas descentralizadas
- **Pagos crypto**: Bitcoin, Ethereum, stablecoins

---

## 🎯 Casos de Uso

### 🥎 Club de Pádel
**Problema**: Gestión caótica de 8 canchas con llamadas y WhatsApp
**Solución**:
✅ Widget en sitio web → Reservas 24/7 sin intervención
✅ Recordatorios automáticos → 80% menos no-shows
✅ Promociones en horarios valle → +35% ocupación días de semana
✅ Torneos mensuales organizados en la plataforma

### ⚽ Complejo de Fútbol 5/7
**Problema**: 3 sedes con baja visibilidad consolidada
**Solución**:
✅ Dashboard multi-sede → Comparar performance en tiempo real
✅ Chatbot con IA → Responde consultas de disponibilidad 24/7
✅ Sistema de fidelización → 10 partidos = 1 gratis
✅ Marketing automático → Posts diarios en Instagram con horarios libres

### 🎾 Club Social con Múltiples Deportes
**Problema**: Tenis, pádel, fútbol y básquet desorganizados
**Solución**:
✅ Escuelas deportivas por disciplina → Gestión de 150+ alumnos
✅ Torneos inter-categorías → Fixtures automáticos
✅ Gestión de socios → Beneficios y descuentos por categoría
✅ Reportes financieros → Rentabilidad por deporte

### 🏋️ Centro Deportivo Premium
**Problema**: Clientes VIP esperan experiencia digital
**Solución**:
✅ App móvil personalizada → Reservas desde el celular
✅ Servicios premium → Quincho, parrilla, árbitro online
✅ IA predictiva → Sugerencias personalizadas por historial
✅ Programa de referidos → Bonos por traer nuevos socios

---

## 💰 Modelo de Negocio (SaaS)

### Planes Sugeridos
```
📦 STARTER - $29 USD/mes
   ✓ 1 sede
   ✓ Hasta 5 canchas
   ✓ 200 reservas/mes
   ✓ Widget de reservas
   ✓ Dashboard básico

🚀 PROFESSIONAL - $79 USD/mes
   ✓ Hasta 3 sedes
   ✓ Canchas ilimitadas
   ✓ Reservas ilimitadas
   ✓ Torneos + Escuelas
   ✓ Automatizaciones con n8n
   ✓ Chatbot con IA
   ✓ Reportes avanzados

⭐ ENTERPRISE - $199 USD/mes
   ✓ Todo lo de Professional
   ✓ Sedes ilimitadas
   ✓ App móvil con marca propia
   ✓ Integración con ERP
   ✓ Soporte prioritario 24/7
   ✓ Consultoría mensual
```

### Servicios Adicionales
- Setup inicial y migración de datos: **$200-500 USD** (one-time)
- Diseño de marca para app móvil: **$300 USD**
- Campañas de marketing digital: **$50/mes**
- Fotografía profesional de instalaciones: **$150**

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Este proyecto busca ser la solución open-source líder para gestión de clubes deportivos en Latinoamérica.

### Cómo Contribuir
1. Fork el proyecto
2. Crear branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva funcionalidad increíble'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

### Áreas Donde Puedes Ayudar
- 🐛 Reportar bugs y issues
- 💡 Proponer nuevas funcionalidades
- 📝 Mejorar documentación
- 🎨 Diseñar UI/UX
- 🧪 Escribir tests
- 🌐 Traducir a otros idiomas (PT, EN)
- 🔌 Crear integraciones (MercadoPago, Stripe, etc.)

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 📞 Contacto y Soporte

- **Issues**: [GitHub Issues](../../issues)
- **Documentación completa**: [Wiki del proyecto](../../wiki) (próximamente)
- **Demo en vivo**: [AI Studio](https://ai.studio/apps/drive/1WiJZ0dZYRwCNlIEH5i7H94p-CmTbseq5)

---

## 🙏 Agradecimientos

Inspirado en las necesidades reales de clubes deportivos en Latinoamérica que buscan digitalizar sus operaciones sin costos prohibitivos.

### Tecnologías Destacadas
- [React](https://reactjs.org/) - Framework frontend
- [Vite](https://vitejs.dev/) - Build tool de próxima generación
- [Gemini AI](https://ai.google.dev/) - IA generativa de Google
- [Recharts](https://recharts.org/) - Librería de gráficos para React
- [Lucide](https://lucide.dev/) - Beautiful open-source icons

---

<div align="center">

**Hecho con ❤️ para la comunidad de clubes deportivos**

[⬆ Volver arriba](#-clubsport-saas)

</div>
