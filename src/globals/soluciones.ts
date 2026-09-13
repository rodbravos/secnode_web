export interface Solucion {
  icon: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  metric: string;
  metricLabel: string;
  idealFor: string;
}

export const SOLUCIONES_DATA: Solucion[] = [
  {
    icon: "shield-bug-outline-icon",
    tag: "Seguridad Corporativa",
    title: "Cumplimiento & Protección de Datos",
    description:
      "Protegemos tus activos digitales y adecuamos tus sistemas a las leyes de ciberseguridad vigentes para evitar multas y filtraciones.",
    features: ["Pentesting preventivo", "Adecuación legal", "Cifrado de datos"],
    metric: "100%",
    metricLabel: "Cumplimiento Legal y Normativo",
    idealFor: "Empresas con manejo de datos sensibles",
  },
  {
    icon: "cloud-sync-outline-icon",
    tag: "Infraestructura",
    title: "Migración e Infraestructura Cloud",
    description:
      "Llevamos tu operación a la nube de forma transparente, reduciendo costos de infraestructura física y optimizando la velocidad.",
    features: [
      "Servidores alta disponibilidad",
      "Respaldos automatizados",
      "Cero interrupciones",
    ],
    metric: "99.99%",
    metricLabel: "Uptime & Disponibilidad Operativa",
    idealFor: "Organizaciones en proceso de escalabilidad",
  },
  {
    icon: "cogs-icon",
    tag: "Eficiencia Operativa",
    title: "Continuidad & Soporte Crítico",
    description:
      "Soporte técnico proactivo para asegurar que la infraestructura y redes de tu empresa operen al máximo rendimiento sin detener las ventas.",
    features: [
      "Mesa de ayuda prioritaria",
      "Mantenimiento proactivo",
      "Monitoreo en tiempo real",
    ],
    metric: "< 20 min",
    metricLabel: "Tiempo Medio de Respuesta",
    idealFor: "Equipos que no pueden permitir pausas",
  },
];
