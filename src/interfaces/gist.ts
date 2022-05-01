import type { EducationRaw } from './education'
import type { LanguageRaw } from './language'
import type { PersonalRaw } from './personal'
import type { ProjectRaw } from './project'
import type { SkillRaw } from './skill'
import type { WorkRaw } from './work'

export interface GistRaw {
    basics: PersonalRaw
    education: EducationRaw[]
    languages: LanguageRaw[]
    projects: ProjectRaw[]
    skills: SkillRaw[]
    work: WorkRaw[]
}
