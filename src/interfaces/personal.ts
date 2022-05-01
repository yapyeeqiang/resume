interface ProfileRaw {
    network: string
    username: string
    url: string
}

interface ProfileResult {
    name: string
    url: string
}

export interface PersonalRaw {
    email: string
    headline: string
    label: string
    name: string
    picture: string
    project_url: string
    summary: string
    username: string
    website: string
    profiles: ProfileRaw[]
}

export interface PersonalResult {
    name: string
    role: string
    email: string
    socialMedias: ProfileResult[]
}
