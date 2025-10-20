export interface Project {
  id: string
  title: string
  description: string
  stack: string[]
  image: string
  demoUrl?: string
  codeUrl?: string
  period?: string
}

export const projects: Project[] = [
  {
    id: "mls-journals",
    title: "Multi-Lingual Scientific Journals",
    description:
      "Lideré la migración y personalización de Open Journal Systems (OJS) de la versión 3.1 a 3.4 para la página MLS Journals, logrando una interfaz más moderna e intuitiva, funciones no disponibles por defecto (como certificados, artículos aceptados y estadísticas) y una mejora significativa del flujo de trabajo y la usabilidad, esto por medio de plugins (php), modificaciones en los .tpl y los handler.",
    stack: ["PHP", "OJS", "JavaScript", "MySQL", "HTML", "CSS"],
    image: "/scientific-journals-platform-interface.jpg",
    demoUrl: "https://www.mlsjournals.com/",
    period: "Marzo 2024 - Julio 2024",
  },
  {
    id: "dietinglab",
    title: "E+Dieting Lab",
    description:
      "Participé en el proyecto E+Dieting Lab, una página de aprendizaje para la formación de los estudiantes de nutrición. Mi trabajo consistió en la migración completa del frontend de Vue 2 a Vue 3, incluyendo la adaptación de plugins, copias de seguridad de pacientes virtuales en Google Cloud y reestructuración del código.",
    stack: ["Vue.js", "TypeScript", "Google Cloud", "JavaScript", "HTML", "CSS"],
    image: "/nutrition-education-platform-dashboard.jpg",
    demoUrl: "https://edietinglab.eu/es/",
    period: "Septiembre 2023 - Marzo 2024",
  },
]
