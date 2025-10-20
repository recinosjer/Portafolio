export interface Skill {
  id: string
  name: string
  category: "frontend" | "backend" | "tools"
  color: string
}

export const skills: Skill[] = [
  { id: "vue", name: "Vue.js", category: "frontend", color: "#00c3ff" },
  { id: "react", name: "React", category: "frontend", color: "#00c3ff" },
  { id: "typescript", name: "TypeScript", category: "frontend", color: "#00c3ff" },
  { id: "javascript", name: "JavaScript", category: "frontend", color: "#00c3ff" },
  { id: "html", name: "HTML", category: "frontend", color: "#00c3ff" },
  { id: "css", name: "CSS", category: "frontend", color: "#00c3ff" },
  { id: "php", name: "PHP", category: "backend", color: "#7b61ff" },
  { id: "moodle", name: "Moodle", category: "backend", color: "#7b61ff" },
  { id: "mysql", name: "MySQL", category: "backend", color: "#7b61ff" },
  { id: "rest", name: "REST APIs", category: "backend", color: "#7b61ff" },
  { id: "git", name: "Git", category: "tools", color: "#e0e6f0" },
  { id: "scrum", name: "Scrum", category: "tools", color: "#e0e6f0" },
]
