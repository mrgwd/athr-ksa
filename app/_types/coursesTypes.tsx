export interface Course {
  id: number
  title: string
  titleInArabic: string
  description: string
  descriptionInArabic: string
  image: string
  // topics: string[] // ["HTML", "PHP", "JavaScript"]
  topics: string // "HTML,PHP,JavaScript"
  category: string // "Web Development"
  date: string
  duration: number
  level: 'beginner' | 'intermediate' | 'advanced'
  levelInArabic: 'مبتدئ' | 'متوسط' | 'متقدم'
  language: 'english' | 'arabic'
  price?: number
  students: number
  lessons: number
  quizzes: number
  assignments: number
}
