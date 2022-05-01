export interface ProjectRaw {
    displayName: string
    githubUrl: string
    name: string
    primaryLanguage: string
    summary: string
    website: string
}

export interface ProjectResult {
    title: string
    description: string
    githubURL: string
    websiteURL: string
    stars: number
}
