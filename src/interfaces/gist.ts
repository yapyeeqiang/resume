import type { PersonalRaw, EducationRaw, LanguageRaw, ProjectRaw, SkillRaw, WorkRaw } from '.'

export interface GistRaw {
    basics: PersonalRaw
    education: EducationRaw[]
    languages: LanguageRaw[]
    projects: ProjectRaw[]
    skills: SkillRaw[]
    work: WorkRaw[]
}
