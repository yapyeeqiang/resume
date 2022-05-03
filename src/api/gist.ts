import type { EducationResult, GistRaw, PersonalResult, ProjectResult, WorkResult } from '@/interfaces'
import axios from 'axios'

const RESUME_DATA_GIST_ENDPOINT = 'https://api.github.com/gists/549cdaa52a7a00afe355ccf0e86d0af0'

export const getResumeData = async () => {
    const { data } = await axios.get(RESUME_DATA_GIST_ENDPOINT)
    const resumeData: GistRaw = JSON.parse(data.files['resume.json'].content)

    const { basics, education: educations, languages, projects, skills, work: works } = resumeData

    console.log(works)

    const personalInfo: PersonalResult = {
        name: basics.name,
        email: basics.email,
        role: basics.label,
        socialMedias: basics.profiles.map((profile) => ({
            name: profile.network,
            url: profile.url,
        })),
        about: basics.summary,
    }

    const myProjects: ProjectResult[] = projects.map((project) => ({
        title: project.name,
        description: project.summary,
        githubURL: project.githubUrl,
        websiteURL: project.website,
        stars: 0,
    }))

    const mySkills = skills.map((skill) => {
        return {
            name: skill.name,
            keywords: skill.keywords.join(', '),
        }
    })

    const monthMap: Record<string, string> = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }

    const myEducations = educations.map((education): EducationResult => {
        const startMonth = monthMap[education.start.month]
        const endMonth = monthMap[education.end.month]

        const startDate = `${startMonth} ${education.start.year}`
        const endDate = education.end.month ? `${endMonth} ${education.end.year}` : 'Currently Pursuing'

        return {
            area: education.area,
            activities: education.activities,
            duration: `${startDate} - ${endDate}`,
            institution: education.institution,
            studyType: education.studyType,
        }
    })

    const myWorks = works.map((work): WorkResult => {
        const startMonth = monthMap[work.start.month]
        const endMonth = monthMap[work.end.month]

        const startDate = `${startMonth} ${work.start.year}`
        const endDate = work.end.month ? `${endMonth} ${work.end.year}` : 'Present'

        return {
            name: work.company,
            website: work.website,
            role: work.position,
            duration: `${startDate} - ${endDate}`,
            location: work.location,
            highlights: work.highlights,
        }
    })

    return {
        personalInfo,
        projects: myProjects,
        languages,
        skills: mySkills,
        educations: myEducations,
        works: myWorks,
    }
}
