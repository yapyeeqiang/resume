type Level = 'Basic' | 'Intermediate' | 'Advanced'

export interface SkillRaw {
    name: string
    level: Level
    keywords: string[]
}

export interface SkillResult {
    name: string
    keywords: string
}
