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

## 🗺️ Roadmap

### ✅ Fase 1: MVP (Actual)
- [x] Dashboard con métricas básicas
- [x] Sistema de reservas con calendario
- [x] Gestión multi-sede
- [x] Módulo de torneos
- [x] Módulo de escuelas deportivas
- [x] Integración con Gemini AI

### 🚧 Fase 2: Automatización (Q2 2025)
- [ ] **Sistema de recordatorios automáticos** (24h y 2h antes)
  - Integración con WhatsApp Business API
  - Email transaccional con SendGrid/Resend
  - SMS para confirmaciones urgentes
- [ ] **Chatbot con IA 24/7**
  - Responde consultas sobre horarios, precios, disponibilidad
  - Toma reservas automáticamente
  - Escalamiento inteligente a humano
  - Multicanal (WhatsApp, Instagram, Facebook, Web)
- [ ] **Gestión de no-shows**
  - Re-confirmación automática 2 horas antes
  - Lista de espera automática
  - Sistema de penalización configurable
- [ ] **Base de datos persistente**
  - Migración a PostgreSQL/Supabase
  - Sistema de backups automáticos
- [ ] **Autenticación y autorización**
  - Login con Clerk/NextAuth
  - Roles: Admin, Manager, Instructor, Cliente
  - Multi-tenancy para múltiples clubes

### 🔮 Fase 3: Inteligencia y Escala (Q3 2025)
- [ ] **Hub de marketing automático**
  - Generación de contenido para redes con GPT
  - Publicación automática en Instagram, Facebook
  - Campañas de email/WhatsApp segmentadas
  - Promociones flash en horarios valle
- [ ] **Sistema de fidelización**
  - Programa de puntos personalizable
  - Recompensas y cupones automáticos
  - Detección de clientes en riesgo de abandono
  - Campañas de reactivación
- [ ] **Predicción de demanda con ML**
  - Precios dinámicos según ocupación
  - Sugerencias de promociones inteligentes
  - Forecast de ingresos mensuales
- [ ] **App móvil nativa**
  - React Native / Flutter
  - Notificaciones push
  - Check-in con QR

### 🌟 Fase 4: Ecosistema Completo (Q4 2025)
- [ ] **Gestión de inventario con IA**
  - Control de equipamiento y consumibles
  - Alertas de stock bajo
  - Órdenes de compra automáticas
- [ ] **Sistema de turnos para empleados**
  - Generación automática de horarios
  - Check-in con geolocalización
  - Cálculo de horas y liquidación
- [ ] **Plataforma de análisis de reputación**
  - Monitoreo de reviews en tiempo real
  - Análisis de sentimiento con IA
  - Respuestas sugeridas automáticas
  - Benchmarking vs. competencia
- [ ] **Marketplace de servicios**
  - Tienda online de productos del club
  - Contratación de servicios profesionales (fisio, nutrición)
  - Sistema de referidos

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
