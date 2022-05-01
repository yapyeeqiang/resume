import type { GistRaw } from '@/interfaces/gist'
import type { PersonalResult } from '@/interfaces/personal'
import type { ProjectResult } from '@/interfaces/project'
import axios from 'axios'

const RESUME_DATA_GIST_ENDPOINT = 'https://api.github.com/gists/549cdaa52a7a00afe355ccf0e86d0af0'

export const getResumeData = async () => {
    const { data } = await axios.get(RESUME_DATA_GIST_ENDPOINT)
    const resumeData: GistRaw = JSON.parse(data.files['resume.json'].content)

    const { basics, education, languages, projects, skills, work } = resumeData

    // console.log(education)
    // console.log(languages)
    console.log(projects)
    // console.log(skills)
    // console.log(work)

    const personalInfo: PersonalResult = {
        name: basics.name,
        email: basics.email,
        role: basics.headline,
        socialMedias: basics.profiles.map((profile) => ({
            name: profile.network,
            url: profile.url,
        })),
    }

    const myProjects: ProjectResult[] = projects.map((project) => ({
        title: project.name,
        description: project.summary,
        githubURL: project.githubUrl,
        websiteURL: project.website,
        stars: 0,
    }))

    return {
        personalInfo,
        projects: myProjects,
    }
}
