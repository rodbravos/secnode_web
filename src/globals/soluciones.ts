export interface Servicio {
  icon: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
}

export const SOLUCIONES_DATA: Servicio[] = [
  {
    icon: "shield-bug-outline-icon",
    tag: "Seguridad Corporativa",
    title: "Cumplimiento & Protección de Datos",
    description:
      "Protegemos tus activos digitales y te adaptamos a las leyes de ciberseguridad vigentes para evitar multas y filtraciones.",
    features: ["Pentesting preventivo", "Adecuación legal", "Cifrado de datos"],
  },
  {
    icon: "cloud-sync-outline-icon",
    tag: "Infraestructura",
    title: "Migración e Infraestructura Cloud",
    description:
      "Llevamos tu operación a la nube de forma transparente, reduciendo costos de mantenimiento físico y garantizando velocidad.",
    features: [
      "Servidores alta disponibilidad",
      "Respaldos automatizados",
      "Cero interrupciones",
    ],
  },
  {
    icon: "cogs-icon",
    tag: "Eficiencia Operativa",
    title: "Continuidad & Soporte Crítico",
    description:
      "Soporte técnico proactivo para asegurar que los equipos y redes de tu empresa operen al 100% sin detener las ventas.",
    features: [
      "Mesa de ayuda prioritaria",
      "Mantenimiento proactivo",
      "Monitoreo en tiempo real",
    ],
  },
];
