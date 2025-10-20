export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
}

export const experiences: Experience[] = [
  {
    id: "funiber-dev",
    title: "Desarrollador de Software",
    company: "FUNIBER-UNEATLANTICO",
    location: "Santander, España",
    period: "Septiembre 2022 - Actual",
    description: [
      "Desarrollo Frontend en Vue.js, React, JavaScript, TypeScript, HTML y PHP",
      "Implementación de interfaces y consumo de endpoints REST",
      "Creación de mockups (UI/UX)",
      "Migración de versiones de framework",
      "Automatizaciones y personalización de Moodle (Mustache)",
      "Creación de Plugins (PHP)",
      "Metodología Scrum",
    ],
  },
  {
    id: "funiber-intern",
    title: "Desarrollador PHP / Moodle (Prácticas)",
    company: "FUNIBER",
    location: "Santander, España",
    period: "Septiembre 2024 - Febrero 2025",
    description: [
      "Diseño e integración de módulos",
      "Implementación de funcionalidades para mejorar la experiencia de usuario",
      "Creación de plantillas (Mustache)",
      "Integración de APIs",
    ],
  },
  {
    id: "product-owner",
    title: "Product Owner",
    company: "CORPOLEGAL",
    location: "Guatemala, Guatemala",
    period: "Junio 2021 - Julio 2022",
    description: [
      "Liderar el equipo de desarrollo",
      "Establecer prioridades y asignar tareas al equipo",
      "Planificar plazos de entrega",
      "Definir criterios de aceptación",
      "Analizar las necesidades del cliente y establecer requisitos funcionales",
    ],
  },
  {
    id: "teacher",
    title: "Profesor de TIC",
    company: "Ayuntamiento de Jutiapa",
    location: "Jutiapa, Guatemala",
    period: "Julio 2022 - Septiembre 2022",
    description: [
      "Impartir clases de computación a personas de distintas edades",
      "Enseñar el uso básico de un ordenador, programas ofimáticos y herramientas digitales",
      "Diseñar materiales y ejercicios prácticos adaptados al nivel y capacidades de cada grupo",
      "Promover la inclusión mediante un acompañamiento cercano y personalizado",
    ],
  },
]
