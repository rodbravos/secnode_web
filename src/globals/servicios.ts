export interface Servicio {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export const SERVICIOS_DATA: Servicio[] = [
  {
    icon: "code-icon",
    title: "Desarrollo de Software",
    description:
      "Construcción de aplicaciones web, plataformas empresariales y APIs robustas optimizadas para alta disponibilidad.",
    features: [
      "Arquitecturas Cloud-Native",
      "Integraciones de API y Automatización",
    ],
  },
  {
    icon: "network-icon",
    title: "Asesorías Informáticas",
    description:
      "Consultoría técnica estratégica para optimizar tu infraestructura de TI, migración de servidores y bases de datos.",
    features: [
      "Auditoría de Infraestructura y Redes",
      "Optimización de Procesos Digitales",
    ],
  },
  {
    icon: "shield-check-icon",
    title: "Ciberseguridad & Normativa Legal",
    description:
      "Evaluación de vulnerabilidades, planes de respuesta a incidentes y adecuación a leyes de protección de datos.",
    features: [
      "Pentesting y Análisis de Riesgos",
      "Cumplimiento Normativo y Protección de Datos",
    ],
  },
  {
    icon: "terminal-icon",
    title: "Soporte Técnico Computacional",
    description:
      "Mantenimiento preventivo y correctivo de hardware/software, administración de servidores y soporte remoto.",
    features: [
      "Monitoreo Proactivo y Helpdesk",
      "Continuidad Operativa y Backups",
    ],
  },
];
