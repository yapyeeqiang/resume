import type { ShortDate } from './date'

interface Result {
    A?: number
    B?: number
    C?: number
    D?: number
    E?: number
    F?: number
    G?: number
}

export interface EducationRaw {
    institution: string
    studyType: string
    area: string
    description: string
    activities: string
    result: Result
    startDate: string
    start: ShortDate
    end: ShortDate
}
