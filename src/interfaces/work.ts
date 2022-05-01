import type { ShortDate } from './date'

export interface WorkRaw {
    company: string
    isCurrentRole: boolean
    location: string
    position: string
    highlights: string[]
    website: string
    startDate: string
    start: ShortDate
    end: ShortDate
}
